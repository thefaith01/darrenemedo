"use client";

import { useEffect, useRef } from "react";

const MAX_CAPTURE_WIDTH = 960;
const PLAYBACK_FPS = 30;

/**
 * Plays a video once, capturing every frame to offscreen canvases, then
 * switches to a canvas that ping-pongs (boomerangs) through those frames
 * forever. Falls back to a single frozen frame under prefers-reduced-motion.
 */
export function BoomerangVideoBg({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const frames: HTMLCanvasElement[] = [];
    const seen = new Set<string>();
    let capturing = true;
    let playbackTimer: ReturnType<typeof setInterval> | null = null;

    function sizeFor(): [number, number] {
      let w = video!.videoWidth || 1280;
      let h = video!.videoHeight || 720;
      if (w > MAX_CAPTURE_WIDTH) {
        h = Math.round(h * (MAX_CAPTURE_WIDTH / w));
        w = MAX_CAPTURE_WIDTH;
      }
      return [w, h];
    }

    function capture() {
      if (!capturing || !video) return;
      const key = video.currentTime.toFixed(3);
      if (!seen.has(key)) {
        seen.add(key);
        const [w, h] = sizeFor();
        const off = document.createElement("canvas");
        off.width = w;
        off.height = h;
        off.getContext("2d")?.drawImage(video, 0, 0, w, h);
        frames.push(off);
      }
      schedule();
    }

    function schedule() {
      if (!capturing || !video) return;
      if ("requestVideoFrameCallback" in video) {
        (video as HTMLVideoElement & {
          requestVideoFrameCallback: (cb: () => void) => void;
        }).requestVideoFrameCallback(capture);
      } else {
        requestAnimationFrame(capture);
      }
    }

    function startBoomerang() {
      if (!frames.length || !canvas) {
        // Capture never produced a frame (e.g. requestVideoFrameCallback and
        // requestAnimationFrame both suspended, as happens in a hidden/
        // unfocused tab). Fall back to looping the video natively rather
        // than leaving it frozen on its last frame.
        video!.loop = true;
        video!.play().catch(() => {});
        return;
      }
      canvas.width = frames[0].width;
      canvas.height = frames[0].height;
      video!.style.display = "none";
      canvas.style.display = "block";

      if (reduced) {
        ctx!.drawImage(frames[0], 0, 0);
        return;
      }

      let i = 0;
      let dir = 1;
      playbackTimer = setInterval(() => {
        ctx!.drawImage(frames[i], 0, 0);
        i += dir;
        if (i >= frames.length - 1) {
          i = frames.length - 1;
          dir = -1;
        } else if (i <= 0) {
          i = 0;
          dir = 1;
        }
      }, 1000 / PLAYBACK_FPS);
    }

    function onEnded() {
      capturing = false;
      startBoomerang();
    }

    video.addEventListener("ended", onEnded);
    video
      .play()
      .then(schedule)
      .catch(() => {
        // Autoplay blocked — leave the poster frame of the <video> visible.
      });

    return () => {
      capturing = false;
      video.removeEventListener("ended", onEnded);
      if (playbackTimer) clearInterval(playbackTimer);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 origin-top scale-[1.15] overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover object-top"
      />
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover object-top"
        style={{ display: "none" }}
      />
    </div>
  );
}
