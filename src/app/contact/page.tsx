"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormspreeErrorItem = { message?: string };
type FormspreeErrorResponse = { errors?: FormspreeErrorItem[] };

export default function ContactPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xqaqkzag", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      let msg = "Something went wrong. Please try again.";
      try {
        const j: unknown = await res.json();
        if (j && typeof j === "object" && "errors" in j) {
          const errs = (j as FormspreeErrorResponse).errors;
          if (Array.isArray(errs) && errs[0]?.message) {
            msg = String(errs[0].message);
          }
        }
      } catch {
        // ignore JSON parse error
      }
      setError(msg);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section className="rounded-2xl bg-[#EFEDEA] p-8 shadow-md">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Contact Us
        </h1>

        <p className="mt-3 text-slate-700 max-w-2xl">
          We&apos;ll respond within 1–2 business days. Free consults in St. Louis
          and virtual sessions anywhere.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          {/* Honeypot spam trap */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <label className="grid gap-1">
            <span className="text-sm font-medium text-slate-900">Name</span>
            <input
              name="name"
              required
              className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium text-slate-900">Email</span>
            <input
              type="email"
              name="email"
              required
              className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm font-medium text-slate-900">
              Project details
            </span>
            <textarea
              name="message"
              rows={5}
              required
              className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
            />
          </label>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-pink-500 px-6 py-2.5 text-white font-semibold disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send"}
            </button>

            {error && (
              <p className="mt-3 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}
