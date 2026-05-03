export default function SpecialProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <img
        src="/gallery/19871.webp"
        alt="Special Projects"
        className="w-full rounded-2xl object-contain shadow-md"
      />

      <section className="mt-8 rounded-2xl bg-[#D1CCC7]/95 p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Special Projects
        </h1>

        <p className="mt-3 max-w-2xl text-slate-800">
          Personalized support for projects that don’t fit neatly into one category —
          long-distance moves, transitions, errands, home watch services,
          shopping, scheduling, and custom household assistance tailored to your needs.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block rounded-full bg-pink-500 px-6 py-3 font-semibold text-white"
        >
          Request a Free Quote
        </a>
      </section>
    </main>
  );
}
