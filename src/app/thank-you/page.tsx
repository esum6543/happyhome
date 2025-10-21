export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section className="rounded-2xl border p-8 text-center shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-pink-600">
          Thank you!
        </h1>
        <p className="mt-4 text-slate-600">
          Your message has been sent successfully.
          <br />
          We’ll get back to you within 1–2 business days.
        </p>

        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <a
            href="/"
            className="rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold hover:bg-pink-600 transition"
          >
            Back to Home
          </a>
          <a
            href="/services"
            className="rounded-full border px-5 py-2.5 hover:bg-slate-50 transition"
          >
            View Services
          </a>
        </div>
      </section>
    </main>
  );
}
