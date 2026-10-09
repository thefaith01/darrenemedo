import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-40">
      <h1 className="font-display text-6xl font-normal text-ink">Page not found</h1>
      <p className="mt-4 text-body text-muted">This page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block text-body font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
        Back home
      </Link>
    </Container>
  );
}
