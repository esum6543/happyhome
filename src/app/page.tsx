// src/app/page.tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Hero */}
   {/* Hero (big background) */}
<section className="mt-2">
  <div className="relative overflow-hidden rounded-3xl border">
    {/* Background image */}
    <div
      className="h-[520px] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/closet.jpg')" }}
    />

    {/* Soft overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/10" />

    {/* Content layer */}
    <div className="absolute inset-0 p-6 sm:p-10">
      {/* Top-left tabs */}
      <div className="flex flex-wrap gap-2">
        <a
          href="/services#home-management"
          className="rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold border hover:bg-white transition"
        >
          Home Management
        </a>
        <a
          href="/services#organization"
          className="rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold border hover:bg-white transition"
        >
          Organization
        </a>
        <a
          href="/services#caregiving"
          className="rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold border hover:bg-white transition"
        >
          Decluttering and downsizing
        </a>
        <a
          href="/services#special-projects"
          className="rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold border hover:bg-white transition"
        >
          Special Projects
        </a>
      </div>
<div className="mt-10 max-w-xl">
  <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight">
    <span className="block">HAPPY</span>
    <span className="block">HOME</span>
    <span className="block text-pink-400">BY</span>
    <span className="block text-pink-500">ENELA</span>
  </h1>
</div>



  <p className="mt-6 text-base sm:text-lg text-slate-700 leading-relaxed">
    Your home is an extension of your energy field. This is why practices like
    cleaning your home, rearranging furniture, organizing your closet, and
    letting go of objects that clutter your space can have a profound impact
    on your mind, body, and spirit.
  </p>

  <div className="mt-8 flex flex-wrap gap-3">
    <a
      href="/contact"
      className="rounded-full bg-pink-500 px-6 py-3 text-white font-semibold"
    >
      Get a free quote
    </a>
    <a
      href="/services"
      className="rounded-full border bg-white/80 backdrop-blur px-6 py-3 font-semibold"
    >
      View services
    </a>
  </div>
</div>

    </div>
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
          <h3 className="font-semibold">Decluttering and downsizing</h3>
          <p className="mt-1 text-sm text-slate-600">
            Before the move, Packing, Labeling.
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
        <div className="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-4">
          <img
            className="rounded-lg border object-cover aspect-[4/3]"
            src="/gallery/towels.png"
            alt="Organized towels"
          />

          <img
            className="rounded-lg border object-contain aspect-square p-3"
            src="/gallery/enelalogo.png"
            alt="Enela logo"
          />

          <img
            className="rounded-lg border object-cover aspect-[4/3]"
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop"
            alt="Cozy bedroom"
          />

          <img
            className="rounded-lg border object-cover aspect-[4/3]"
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

        <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-slate-600 list-disc ml-5">
          <li>Out-of-state relocation coordination</li>
          <li>Downsizing and transition planning</li>
          <li>Packing, labeling, and logistics oversight</li>
          <li>Furniture assembly and home setup</li>
          <li>Custom household or personal projects</li>
        </ul>

        <a href="/contact" className="mt-5 inline-block text-pink-600 font-semibold">
          Tell us what you need →
        </a>
      </section>

      {/* Reviews + affiliates */}
      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">What clients say</h3>
          <p className="text-sm text-slate-600 mt-2">
            “Enela transformed our living room in one afternoon. It finally feels like home.” — S., St. Louis
          </p>
          <a href="/reviews" className="mt-3 inline-block text-pink-600 font-semibold">
            Read &amp; leave a review →
          </a>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Featured partners</h3>
          <ul className="text-sm text-slate-600 mt-2 list-disc ml-5 space-y-1">
            <li>
              <a className="text-pink-600" href="https://www.amazon.com/?tag=happyhomebyen-20">
                Amazon (affiliate)
              </a>
            </li>
            <li>
              <a className="text-pink-600" href="https://www.containerstore.com/?aid=YOURID">
                The Container Store (affiliate)
              </a>
            </li>
            <li>
              <a className="text-pink-600" href="https://example.com/?ref=yourcode">
                Local partner
              </a>
            </li>
          </ul>
          <a href="/affiliates" className="mt-3 inline-block text-pink-600 font-semibold">
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
        <p className="text-slate-600 mt-1">Free consults in St. Louis and virtual sessions anywhere.</p>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold"
        >
          Book a free consult
        </a>
      </section>
    </main>
  );
}
