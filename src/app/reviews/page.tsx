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

      setTimeout(() => router.push("/"), 900);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Outer readable surface */}
      <section className="rounded-2xl bg-[#EFEDEA] p-8 shadow-md">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Reviews
        </h1>

        <p className="mt-3 text-slate-700 max-w-2xl">
          A few kind words from recent clients in the St. Louis area.
        </p>

        {/* Sample reviews */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white/70 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Living Room Refresh</h3>
            <p className="mt-2 text-sm text-slate-800">
              “Enela transformed our living room in one afternoon. It finally feels like home.”
            </p>
            <p className="mt-1 text-sm text-slate-700">
              — S., St. Louis
            </p>
          </div>

          <div className="rounded-xl bg-white/70 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">Photo Digitizing</h3>
            <p className="mt-2 text-sm text-slate-800">
              “The scans look amazing — clear, cropped, and ready to print. A priceless service.”
            </p>
            <p className="mt-1 text-sm text-slate-700">
              — A., Oakville
            </p>
          </div>
        </div>

        {/* Review form */}
        <div className="mt-10 rounded-2xl bg-[#D1CCC7]/95 p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 text-center">
            Want to share your experience?
          </h3>
          <p className="mt-2 text-slate-800 text-center">
            Send us a quick review below. Reviews are submitted for approval before being posted publicly.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 mx-auto max-w-xl space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-900">Name</label>
              <input
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                placeholder="Your name"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Email</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                placeholder="you@email.com"
                disabled={status === "submitting"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">Your Review</label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                placeholder="Write your review…"
                disabled={status === "submitting"}
              />
            </div>

            <input type="hidden" name="source" value="HappyHomeByEnela Reviews Page" />

            <div className="text-center pt-2">
              <button
                type="submit"
                className="inline-block rounded-full bg-pink-500 px-6 py-2.5 text-white font-semibold disabled:opacity-60"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Submit review"}
              </button>

              {status === "success" && (
                <p className="mt-3 text-sm text-slate-700">
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
