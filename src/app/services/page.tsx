// src/app/services/page.tsx
export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-3 text-slate-600">
          Thoughtful support for homes, families, and life transitions.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Home Management</h3>
            <p className="mt-1 text-sm text-slate-600">
              Errands, coordination, scheduling, and personalized household support.
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Organization</h3>
            <p className="mt-1 text-sm text-slate-600">
              Closets, pantries, garages, downsizing, and systemized spaces.
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Caregiving Support</h3>
            <p className="mt-1 text-sm text-slate-600">
              Non-medical companion care and routine support.
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Special Projects</h3>
            <p className="mt-1 text-sm text-slate-600">
              Long-distance moves, transitions, and custom projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
