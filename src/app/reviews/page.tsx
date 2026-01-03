export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
        <p className="mt-3 text-slate-600">
          A few kind words from recent clients in the St. Louis area.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Living Room Refresh</h3>
            <p className="text-sm text-slate-600 mt-2">
              “Enela transformed our living room in one afternoon. It finally feels like home.” — S., St. Louis
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Photo Digitizing</h3>
            <p className="text-sm text-slate-600 mt-2">
              “The scans look amazing — clear, cropped, and ready to print. A priceless service.” — A., Oakville
            </p>
          </div>
        </div>

       <div className="mt-10 rounded-2xl border p-6">
  <h3 className="text-xl font-semibold text-center">Want to share your experience?</h3>
  <p className="text-slate-600 mt-1 text-center">
    Send us a quick review below. Reviews are submitted for approval before being posted publicly.
  </p>

  'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReviewsPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xqaqkzag", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) throw new Error("Formspree submission failed");

      setStatus("success");
      form.reset();

      // Let them see "Thank you" briefly, then go home
      setTimeout(() => router.push("/"), 900);
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
        <p className="mt-3 text-slate-600">
          A few kind words from recent clients in the St. Louis area.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Living Room Refresh</h3>
            <p className="text-sm text-slate-600 mt-2">
              “Enela transformed our living room in one afternoon. It finally feels like home.” — S., St. Louis
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Photo Digitizing</h3>
            <p className="text-sm text-slate-600 mt-2">
              “The scans look amazing — clear, cropped, and ready to print. A priceless service.” — A., Oakville
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border p-6">
          <h3 className="text-xl font-semibold text-center">Want to share your experience?</h3>
          <p className="text-slate-600 mt-1 text-center">
            Send us a quick review below. Reviews are submitted for approval before being posted publicly.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 max-w-xl mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Your name"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="you@email.com"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Your Review</label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border px-3 py-2"
                placeholder="Write your review…"
                disabled={status === "submitting"}
              />
            </div>

            <input type="hidden" name="source" value="HappyHomeByEnela Reviews Page" />

            <div className="text-center">
              <button
                type="submit"
                className="inline-block rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold disabled:opacity-60"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Submit review"}
              </button>

              {status === "success" && (
                <p className="mt-3 text-sm text-slate-600">
                  Thank you! Redirecting you home…
                </p>
              )}

              {status === "error" && (
                <p className="mt-3 text-sm text-red-600">
                  Sorry — something didn’t send. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
