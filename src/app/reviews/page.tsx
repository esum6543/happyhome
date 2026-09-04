"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReviewsPage() {
  const router = useRouter();

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [showReviewForm, setShowReviewForm] = useState(false);

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
      <section className="mx-auto max-w-5xl rounded-3xl bg-white/60 p-6 shadow-sm sm:p-10">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-900">
            Client Reviews
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-700">
            Kind words from clients who trusted Enela with their homes,
            memories, and meaningful spaces.
          </p>
        </div>

        {/* Client reviews */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Review 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Living Room Refresh
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              “Enela transformed our living room in one afternoon. It finally
              feels like home.”
            </p>

            <p className="mt-4 text-sm font-medium text-slate-600">
              — S., St. Louis
            </p>
          </div>

          {/* Review 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Photo Digitizing
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              “The scans look amazing—clear, cropped, and ready to print. A
              priceless service.”
            </p>

            <p className="mt-4 text-sm font-medium text-slate-600">
              — A., Oakville
            </p>
          </div>

          {/* Kim Review */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:col-span-2">
            <h3 className="text-lg font-semibold text-slate-900">
              Packing, Unpacking &amp; Home Organization
            </h3>

            <div className="mt-3 space-y-4 leading-7 text-slate-700">
              <p>
                “I cannot recommend Enela enough! She helped us pack up two
                homes, unpack our belongings, and completely organize our
                kitchens and bedrooms. What could have been overwhelming and
                stressful moves became so much more manageable because of her.
              </p>

              <p>
                Every drawer, cabinet, and closet has a purpose, and everything
                is organized in a way that just makes sense. She works
                efficiently, stays focused, and accomplishes an amazing amount
                in a short period of time.
              </p>

              <p>
                Beyond being incredibly talented, she’s a pleasure to work
                with—professional, dependable, and genuinely invested in making
                your home functional and beautiful. If you’re looking for
                someone to help you pack, unpack, or organize your home, she’s
                worth every penny.
              </p>

              <p>
                I am so grateful for everything she did and would hire her again
                in a heartbeat! We moved out of state and miss her so much.”
              </p>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-600">
              — Kim, St. Louis, Missouri
            </p>
          </div>

          {/* Kip Review */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:col-span-2">
            <h3 className="text-lg font-semibold text-slate-900">
              Home Organization, Moving &amp; Project Support
            </h3>

            <div className="mt-3 space-y-4 leading-7 text-slate-700">
              <p>
                “Enela has been a lifesaver over the past few years. She has
                done everything—helping us thin and organize closets,
                organizing storage in my garage, organizing storage throughout
                my house, supervising moving activities, organizing offsite
                storage facilities, and handling our photo digitizing project.
              </p>

              <p>
                She combines the organizational and executive functional skill
                set of a project manager with the respectful and kind nature of
                a respected confidante or, in many ways, a therapist.
              </p>

              <p>
                It can be tough to deal with transitions and organization.
                Enela gets it organized, gets it done, and helps one feel
                comfortable and happy along the way. 
              </p>
              
              <p>
                Enela truly makes for a Happy Home!"
              </p>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-600">
              — Kip, St. Louis, Missouri
            </p>
          </div>
        </div>

        {/* Leave a review button */}
        <div className="mt-10 text-center">
          <p className="text-slate-700">
            Have you worked with Enela?
          </p>

          <button
            type="button"
            onClick={() => {
              setShowReviewForm((current) => !current);
              setStatus("idle");
            }}
            className="mt-4 rounded-full bg-pink-500 px-8 py-3 font-semibold text-white shadow-sm transition hover:bg-pink-600"
          >
            {showReviewForm ? "Close Review Form" : "Leave a Review"}
          </button>
        </div>

        {/* Review form appears only after clicking */}
        {showReviewForm && (
          <div className="mt-8 rounded-2xl bg-[#D1CCC7]/95 p-6 shadow-sm sm:p-8">
            <h3 className="text-center text-2xl font-semibold text-slate-900">
              Share Your Experience
            </h3>

            <p className="mx-auto mt-2 max-w-2xl text-center text-slate-800">
              Reviews are submitted for approval before being posted publicly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-7 max-w-xl space-y-5"
            >
              <div>
                <label
                  htmlFor="review-name"
                  className="block text-sm font-medium text-slate-900"
                >
                  Name
                </label>

                <input
                  id="review-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  disabled={status === "submitting"}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="review-email"
                  className="block text-sm font-medium text-slate-900"
                >
                  Email
                </label>

                <input
                  id="review-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  disabled={status === "submitting"}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="review-message"
                  className="block text-sm font-medium text-slate-900"
                >
                  Your Review
                </label>

                <textarea
                  id="review-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Write your review…"
                  disabled={status === "submitting"}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200 disabled:opacity-60"
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
                  className="rounded-full bg-pink-500 px-8 py-3 font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Sending..."
                    : "Submit Review"}
                </button>

                {status === "success" && (
                  <p className="mt-4 text-sm text-slate-700">
                    Thank you! Redirecting you home…
                  </p>
                )}

                {status === "error" && (
                  <p className="mt-4 text-sm text-red-700">
                    Sorry—your review did not send. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}
