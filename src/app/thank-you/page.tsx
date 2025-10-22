"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-center">
      <section className="rounded-2xl border p-8 shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-pink-600">Thank you!</h1>
        <p className="mt-4 text-slate-600">
          Your message was sent successfully.<br />
          You’ll be redirected to the home page shortly.
        </p>
      </section>
    </main>
  );
}
