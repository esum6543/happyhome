export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-3 text-slate-600">
          Simple, transparent packages. We tailor each plan to your space and budget.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border p-4 hover:bg-slate-50 transition">
            <h3 className="font-semibold">Room Refresh</h3>
            <p className="text-sm text-slate-600 mt-1">
              Fast makeovers: layout, color, décor, and styling.
            </p>
          </div>
          <div className="rounded-xl border p-4 hover:bg-slate-50 transition">
            <h3 className="font-semibold">Organization</h3>
            <p className="text-sm text-slate-600 mt-1">
              Closets, pantry, garage, and whole-home systems.
            </p>
          </div>
          <div className="rounded-xl border p-4 hover:bg-slate-50 transition">
            <h3 className="font-semibold">Photo Digitizing</h3>
            <p className="text-sm text-slate-600 mt-1">
              Bulk scanning with dust cleanup and precise auto-crop.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border p-6 text-center">
          <h3 className="text-xl font-semibold">Not sure where to start?</h3>
          <p className="text-slate-600 mt-1">Book a free 15-minute consult.</p>
          <a href="/contact" className="mt-4 inline-block rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold">
            Book a free consult
          </a>
        </div>
      </section>
    </main>
  );
}
