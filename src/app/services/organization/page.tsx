export default function OrganizationPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <img
        src="/gallery/19874.webp"
        alt="Organization"
        className="w-full rounded-2xl object-contain shadow-md"
      />

      <section className="mt-8 rounded-2xl bg-[#D1CCC7]/95 p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          Organization
        </h1>

        <p className="mt-3 max-w-2xl text-slate-800">
          Functional systems for closets, pantries, garages, storage spaces,
          and everyday living areas designed to create calm, order, and ease.
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
