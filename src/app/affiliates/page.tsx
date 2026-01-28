export default function AffiliatesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section className="rounded-2xl bg-[#EFEDEA] p-8 shadow-md">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Affiliate Partners
        </h1>

        <p className="mt-3 text-slate-700 max-w-2xl">
          We partner with trusted brands and local businesses to bring you quality
          home and organizational products.
        </p>

        <ul className="mt-6 space-y-3 text-slate-800">
          <li className="rounded-xl bg-white/70 p-4 shadow-sm">
            <a
              href="https://www.amazon.com/?tag=happyhomebyen-20"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-pink-600 underline"
            >
              Amazon
            </a>{" "}
            <span className="text-slate-700">
              — Recommended tools, décor, and storage solutions.
            </span>
          </li>

          <li className="rounded-xl bg-white/70 p-4 shadow-sm">
            <a
              href="https://www.containerstore.com/?aid=YOURID"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-pink-600 underline"
            >
              The Container Store
            </a>{" "}
            <span className="text-slate-700">
              — Elegant and durable organization systems.
            </span>
          </li>

          <li className="rounded-xl bg-white/70 p-4 shadow-sm">
  <span className="font-semibold text-slate-900">
    Local Partners
  </span>{" "}
  <span className="text-slate-700">
    — St. Louis-based craftspeople and small businesses we trust and collaborate with.
  </span>
</li>

        </ul>

        <div className="mt-10 rounded-2xl bg-[#D1CCC7]/95 p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">
            Want to partner with us?
          </h3>

          <p className="mt-2 text-slate-800">
            We love working with like-minded brands. Reach out to discuss collaboration.
          </p>

          <a
            href="/contact"
            className="mt-4 inline-block rounded-full bg-pink-500 px-6 py-2.5 text-white font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
