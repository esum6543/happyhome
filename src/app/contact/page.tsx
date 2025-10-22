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
        router.push("/thank-you"); // go to your thank-you page (which auto-redirects home)
        return;
      }

      // Try to read a Formspree error message without using `any`
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
        // ignore JSON parse error, keep default msg
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
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-slate-600">
          We’ll respond within 1–2 business days. Free consults in St. Louis and virtual sessions anywhere.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
          {/* Honeypot spam trap */}
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <label className="grid gap-1">
            <span>Name</span>
            <input name="name" required className="block w-full border p-2 rounded" />
          </label>

          <label className="grid gap-1">
            <span>Email</span>
            <input type="email" name="email" required className="block w-full border p-2 rounded" />
          </label>

          <label className="grid gap-1">
            <span>Project details</span>
            <textarea name="message" rows={5} required className="block w-full border p-2 rounded" />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Send"}
          </button>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
      </section>
    </main>
  );
}


