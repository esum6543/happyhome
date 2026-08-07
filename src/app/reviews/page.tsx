"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReviewsPage() {
  const router = useRouter();

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xqaqkzag", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Formspree submission failed");
      }

      setStatus("success");
      form.reset();

      setTimeout(() => {
        router.push("/");
      }, 900);
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F1ED] px-4 py-12 sm:px-6">
      {/* Outer readable surface */}
      <section className="mx-auto max-w-5xl rounded-3xl bg-white/60 p-6 shadow-sm sm:p-10">
        <h1 className="text-3xl font-semibold text-slate-900">Reviews</h1>

        <p className="mt-3 max-w-2xl text-slate-700">
          A few kind words from recent clients in the St. Louis area.
        </p>

        {/* Client reviews */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white/70 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Living Room Refresh
            </h3>

            <p className="mt-2 text-sm text-slate-800">
              “Enela transformed our living room in one afternoon. It finally
              feels like home.”
            </p>

            <p className="mt-1 text-sm text-slate-700">
              — S., St. Louis
            </p>
          </div>

          <div className="rounded-xl bg-white/70 p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900">
              Photo Digitizing
            </h3>

            <p className="mt-2 text-sm text-slate-800">
              “The scans look amazing — clear, cropped, and ready to print. A
              priceless service.”
            </p>

            <p className="mt-1 text-sm text-slate-700">
              — A., Oakville
            </p>
          </div>

          <div className="rounded-xl bg-white/70 p-6 shadow-sm md:col-span-2">
            <h3 className="font-semibold text-slate-900">
              Packing, Unpacking &amp; Home Organization
            </h3>

            <p className="mt-2 text-sm text-slate-800">
              “I cannot recommend Enela enough! She helped us pack up two
              homes, unpack our belongings, and completely organize our
              kitchens and bedrooms. What could have been overwhelming and
              stressful moves became so much more manageable because of her.
            </p>

            <p className="mt-3 text-sm text-slate-800">
              Every drawer, cabinet, and closet has a purpose, and everything
              is organized in a way that just makes sense. She works
              efficiently, stays focused, and accomplishes an amazing amount
              in a short period of time.
            </p>

            <p className="mt-3 text-sm text-slate-800">
              Beyond being incredibly talented, she’s a pleasure to work
              with—professional, dependable, and genuinely invested in making
              your home functional and beautiful. If you’re looking for
              someone to help you pack, unpack, or organize your home, she’s
              worth every penny.
            </p>

            <p className="mt-3 text-sm text-slate-800">
              I am so grateful for everything she did and would hire her again
              in a heartbeat! We moved out of state and miss her so much.”
            </p>

            <p className="mt-2 text-sm text-slate-700">
              — Kim, St. Louis, Missouri
            </p>
          </div>
        </div>

        {/* Review form */}
        <div className="mt-10 rounded-2xl bg-[#D1CCC7]/95 p-8 shadow-sm">
          <h3 className="text-center text-xl font-semibold text-slate-900">
            Want to share your experience?
          </h3>

          <p className="mt-2 text-center text-slate-800">
            Send us a quick review below. Reviews are submitted for approval
            before being posted publicly.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-6 max-w-xl space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-slate-900">
                Name
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                disabled={status === "submitting"}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                disabled={status === "submitting"}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">
                Your Review
              </label>

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your review…"
                disabled={status === "submitting"}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 disabled:opacity-60"
              />
            </div>

            <input
              type="hidden"
              name="source"
              value="HappyHomeByEnela Reviews Page"
            />

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-block rounded-full bg-pink-500 px-6 py-2.5 font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Submit review"}
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
