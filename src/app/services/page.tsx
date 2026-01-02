export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-3 text-slate-600">
          Simple, transparent services. We tailor each plan to your home, timeline, and budget.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Room Refresh */}
          <div className="rounded-xl border p-4 hover:bg-slate-50 transition">
            <h3 className="font-semibold">Room Refresh</h3>
            <p className="text-sm text-slate-600 mt-1">
              Fast, thoughtful makeovers: layout, color flow, décor, and styling.
            </p>
          </div>

          {/* Organization */}
          <div className="rounded-xl border p-4 hover:bg-slate-50 transition">
            <h3 className="font-semibold">Organization</h3>
            <ul className="text-sm text-slate-600 mt-2 list-disc ml-5 space-y-1">
              <li>In-home consultation</li>
              <li>One-on-one assistance</li>
              <li>Additional helpers available at $60/hour</li>
              <li>Shopping for projects and supplies</li>
              <li>Management of consignment items</li>
              <li>Removal of donated or unwanted items</li>
              <li>Garages and unfinished basements</li>
            </ul>
          </div>

          {/* Caregiving Support */}
          <div className="rounded-xl border p-4 hover:bg-slate-50 transition">
            <h3 className="font-semibold">Caregiving Support</h3>
            <p className="text-sm text-slate-600 mt-1">
              Non-medical companion care and routine support, by request.
            </p>
            <ul className="text-sm text-slate-600 mt-2 list-disc ml-5 space-y-1">
              <li>Companion care and supervision</li>
              <li>Routine support and presence</li>
              <li>Light meal preparation</li>
              <li>Medication reminders (no administration)</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">
              Non-medical support only. Scope and availability confirmed per request.
            </p>
          </div>

          {/* Special Projects */}
          <div className="rounded-xl border p-4 hover:bg-slate-50 transition">
            <h3 className="font-semibold">Special Projects</h3>
            <p className="text-sm text-slate-600 mt-1">
              Custom home needs and larger transitions, including out-of-state relocations.
            </p>
            <ul className="text-sm text-slate-600 mt-2 list-disc ml-5 space-y-1">
              <li>Out-of-state relocation coordination</li>
              <li>Downsizing and move planning</li>
              <li>Packing, labeling, and logistics oversight</li>
              <li>Furniture assembly and home setup</li>
              <li>Vendor coordination and on-site presence</li>
            </ul>
          </div>
        </div>

        {/* Photo Digitizing - full width callout */}
        <div className="mt-6 rounded-2xl border p-5 hover:bg-slate-50 transition">
          <h3 className="font-semibold">Photo Digitizing</h3>
          <p className="text-sm text-slate-600 mt-1">
            Bulk scanning with dust cleanup, precise auto-crop, and careful handling of your memories.
          </p>
        </div>

        {/* Custom request line */}
        <div className="mt-8 rounded-2xl border p-6">
          <h3 className="text-lg font-semibold">Custom Requests</h3>
          <p className="text-slate-600 mt-1">
            Don’t see what you need listed? Tell us what you’re working on, your timeline, and any details.
            We’ll respond with a clear plan and quote.
          </p>
          <a href="/contact" className="mt-3 inline-block text-pink-600 font-semibold">
            Request a custom plan →
          </a>
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border p-6 text-center">
          <h3 className="text-xl font-semibold">Not sure where to start?</h3>
          <p className="text-slate-600 mt-1">Book a free 15-minute consult.</p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold"
          >
            Book a free consult
          </a>
        </div>
      </section>
    </main>
  );
}
