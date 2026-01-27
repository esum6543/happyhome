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
            <h3 className="font-semibold">Decluttering &amp; Downsizing</h3>
            <ul className="mt-1 list-disc pl-4 text-sm text-slate-600">
              <li>Packing</li>
              <li>Labeling</li>
              <li>Supervise/direct movers</li>
              <li>Unpacking after the move</li>
              <li>Removal of donated or unwanted items</li>
              <li>Set-up and organization</li>
              <li>Make calls on client&apos;s behalf</li>
              <li>Be present for utility and household services</li>
            </ul>
          </div>

          <div className="rounded-xl border p-4">
            <h3 className="font-semibold">Special Projects</h3>
            <ul className="mt-1 list-disc pl-4 text-sm text-slate-600">
              <li>Long-distance moves</li>
              <li>Transitions</li>
              <li>Vacation Home Watch</li>
              <li>Pick up mail</li>
              <li>Present for home repairs</li>
              <li>Turn lights on/off</li>
              <li>Errands</li>
              <li>Cleaning</li>
              <li>Shopping</li>
              <li>Postal/shipping</li>
              <li>Gift buying</li>
              <li>Gift wrapping</li>
              <li>Emails and phone calls</li>
              <li>Custom projects</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

