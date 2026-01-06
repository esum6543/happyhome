// src/app/page.tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Hero */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight">
          HappyHome<span className="text-pink-500">ByEnela</span>
        </h1>
        <p className="mt-3 text-slate-600">
          Home styling • Organization • Photo digitizing in St. Louis. We make spaces calm,
          beautiful, and easy to live in—plus we preserve your memories with high-quality
          scanning and auto-crop.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold"
          >
            Get a free quote
          </a>
          <a href="/services" className="rounded-full border px-5 py-2.5">
            View services
          </a>
        </div>
      </section>

      {/* Services summary */}
      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a href="/services" className="rounded-xl border p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold">Home Management</h3>
          <p className="mt-1 text-sm text-slate-600">
            Errands, coordination, scheduling, and personalized household support.
          </p>
        </a>

        <a href="/services" className="rounded-xl border p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold">Organization</h3>
          <p className="mt-1 text-sm text-slate-600">
            Closets, pantries, garages, downsizing, and systemized spaces.
          </p>
        </a>

        <a href="/services" className="rounded-xl border p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold">Caregiving Support</h3>
          <p className="mt-1 text-sm text-slate-600">
            Non-medical companion care and routine support, by request.
          </p>
        </a>

        <a href="/services" className="rounded-xl border p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold">Special Projects</h3>
          <p className="mt-1 text-sm text-slate-600">
            Long-distance moves, life transitions, and custom home projects.
          </p>
        </a>
      </section>

      {/* Gallery */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Before &amp; After</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <img
            className="aspect-[4/3] rounded-lg border object-cover"
            src="/gallery/towels.png"
            alt="Organized towels"
          />

          <img
            className="aspect-square rounded-lg border object-contain p-3"
            src="/gallery/enelalogo.png"
            alt="Enela logo"
          />

          <img
            className="aspect-[4/3] rounded-lg border object-cover"
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop"
            alt="Cozy bedroom"
          />

          <img
            className="aspect-[4/3] rounded-lg border object-cover"
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop"
            alt="Minimal office"
          />
        </div>
      </section>

      {/* Special Projects */}
      <section className="mt-12 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">Special Projects &amp; Transitions</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Some needs don’t fit neatly into a category. We provide thoughtful support for
          larger transitions — including long-distance and out-of-state moves — offering
          planning, coordination, and on-site presence when needed.
        </p>

        <ul className="ml-5 mt-4 grid list-disc gap-2 text-sm text-slate-600 sm:grid-cols-2">
          <li>Out-of-state relocation coordination</li>
          <li>Downsizing and transition planning</li>
          <li>Packing, labeling, and logistics oversight</li>
          <li>Furniture assembly and home setup</li>
          <li>Custom household or personal projects</li>
        </ul>

        <a href="/contact" className="mt-5 inline-block font-semibold text-pink-600">
          Tell us what you need →
        </a>
      </section>

      {/* Reviews + affiliates */}
      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">What clients say</h3>
          <p className="mt-2 text-sm text-slate-600">
            “Enela transformed our living room in one afternoon. It finally feels like home.” — S., St. Louis
          </p>
          <a href="/reviews" className="mt-3 inline-block font-semibold text-pink-600">
            Read &amp; leave a review →
          </a>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Featured partners</h3>
          <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-slate-600">
            <li>
              <a
                className="text-pink-600"
                href="https://www.amazon.com/?tag=happyhomebyen-20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon (affiliate)
              </a>
            </li>
            <li>
              <a
                className="text-pink-600"
                href="https://www.containerstore.com/?aid=YOURID"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Container Store (affiliate)
              </a>
            </li>
            <li>
              <a
                className="text-pink-600"
                href="https://example.com/?ref=yourcode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Local partner
              </a>
            </li>
          </ul>
          <a href="/affiliates" className="mt-3 inline-block font-semibold text-pink-600">
            See all affiliates →
          </a>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="mt-6 text-center">
        <p className="text-xs text-slate-500">
          Disclosure: As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>

      {/* CTA */}
      <section className="mt-12 rounded-2xl border p-6 text-center">
        <h3 className="text-xl font-semibold">Ready to refresh your space?</h3>
        <p className="mt-1 text-slate-600">Free consults in St. Louis and virtual sessions anywhere.</p>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-full bg-pink-500 px-5 py-2.5 font-semibold text-white"
        >
          Book a free consult
        </a>
      </section>
    </main>
  );
}
