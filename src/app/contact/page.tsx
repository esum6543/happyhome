export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-3 text-slate-600">
          We’ll respond within 1–2 business days. Free consults in St. Louis and virtual sessions anywhere.
        </p>

        <form
          className="mt-6 grid gap-4"
          action="https://formspree.io/f/xqaqkzag"
          method="POST"
        >
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
          <button type="submit" className="rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold">
            Send
          </button>
          <input type="hidden" name="_redirect" value="Thank you, please allow 2-3 bussiness days." />
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
  <Link
    href="/"
    className="rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold hover:bg-pink-600 transition"
  >
    Back to Home
  </Link>
</div>

        </form>
      </section>
    </main>
  );
}
