import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="text-center">
      <p className="font-display text-6xl font-bold text-ink">404</p>
      <p className="mt-3 text-muted">This page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block text-accent underline-offset-2 hover:underline">
        Back home
      </Link>
    </Container>
  );
}
