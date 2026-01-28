// src/app/page.tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Hero */}
     
     <section className="rounded-2xl bg-[#F6E7EC]/95 p-8 shadow-sm">
  <h1 className="text-4xl font-bold tracking-tight text-slate-900">
    HappyHome<span className="text-pink-500">ByEnela</span>
  </h1>

  <p className="mt-4 max-w-2xl text-slate-800">
    Your home is an extension of your energy field. This is why practices
    like cleaning your home, rearranging furniture, organizing your closet,
    and getting rid of objects that are cluttering your space can have a
    profound impact on your own mind, body, and spirit.
  </p>

  <div className="mt-6 flex flex-wrap gap-3">
    <a
      href="/contact"
      className="rounded-full bg-pink-500 px-6 py-2.5 text-white font-semibold"
    >
      Get a free quote
    </a>

    <a
      href="/services"
      className="rounded-full border border-slate-300 px-6 py-2.5 text-slate-900"
    >
      View services
    </a>
  </div>

      </section>

      {/* Services summary */}
      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href="/services"
          className="rounded-xl bg-[#D1CCC7]/95 p-5 shadow-sm transition hover:bg-[#CEC9C3]"
        >
          <h3 className="font-semibold text-slate-900">Home Management</h3>
          <p className="mt-1 text-sm text-slate-800">
            Errands, coordination, scheduling, and personalized household support.
          </p>
        </a>

        <a
          href="/services"
          className="rounded-xl bg-[#D1CCC7]/95 p-5 shadow-sm transition hover:bg-[#CEC9C3]"
        >
          <h3 className="font-semibold text-slate-900">Organization</h3>
          <p className="mt-1 text-sm text-slate-800">
            Closets, pantries, garages, downsizing, and systemized spaces.
          </p>
        </a>

        <a
          href="/services"
          className="rounded-xl bg-[#D1CCC7]/95 p-5 shadow-sm transition hover:bg-[#CEC9C3]"
        >
          <h3 className="font-semibold text-slate-900">
            Decluttering &amp; Downsizing
          </h3>
          <p className="mt-1 text-sm text-slate-800">
            Downsizing, packing, labeling, and removal of donated or unwanted items.
          </p>
        </a>

        <a
          href="/services"
          className="rounded-xl bg-[#D1CCC7]/95 p-5 shadow-sm transition hover:bg-[#CEC9C3]"
        >
          <h3 className="font-semibold text-slate-900">Special Projects</h3>
          <p className="mt-1 text-sm text-slate-800">
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
            className="rounded-lg border"
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop"
            alt="Cozy bedroom"
          />

          <img
            className="rounded-lg border"
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop"
            alt="Minimal office"
          />
        </div>
      </section>

      {/* Special Projects & Transitions */}
      <section className="mt-12 rounded-2xl bg-[#D1CCC7]/95 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Special Projects &amp; Transitions
        </h2>

        <p className="mt-2 max-w-2xl text-slate-800">
          Some needs don’t fit neatly into a category. We provide thoughtful
          support for larger transitions — including long-distance and
          out-of-state moves — offering planning, coordination, and on-site
          presence when needed.
        </p>

        <ul className="mt-4 ml-5 grid list-disc gap-2 text-sm text-slate-800 sm:grid-cols-2">
          <li>Out-of-state relocation coordination</li>
          <li>Downsizing and transition planning</li>
          <li>Packing, labeling, and logistics oversight</li>
          <li>Furniture assembly and home setup</li>
          <li>Custom household or personal projects</li>
        </ul>

        <a
          href="/contact"
          className="mt-5 inline-block font-semibold text-pink-600"
        >
          Tell us what you need →
        </a>
      </section>

      {/* Reviews + affiliates */}
      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-[#D1CCC7]/95 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            What clients say
          </h3>

          <p className="mt-2 text-sm text-slate-800">
            “Enela transformed our living room in one afternoon. It finally feels
            like home.”
          </p>

          <p className="mt-1 text-sm text-slate-700">
            — S., St. Louis
          </p>

          <a
            href="/reviews"
            className="mt-3 inline-block text-sm font-medium text-slate-900 underline"
          >
            Read &amp; leave a review →
          </a>
        </div>

        <div className="rounded-xl bg-[#D1CCC7]/95 p-6 shadow-sm">
          <h3 className="font-semibold text-slate-900">Featured partners</h3>

          <ul className="mt-2 ml-5 list-disc space-y-1 text-sm text-slate-800">
            <li>
              <a
                className="text-pink-600"
                href="https://www.amazon.com/?tag=happyhomebyen-20"
              >
                Amazon (affiliate)
              </a>
            </li>
            <li>
              <a
                className="text-pink-600"
                href="https://www.containerstore.com/?aid=YOURID"
              >
                The Container Store (affiliate)
              </a>
            </li>
            <li>
              <a
                className="text-pink-600"
                href="https://example.com/?ref=yourcode"
              >
                Local partner
              </a>
            </li>
          </ul>

          <a
            href="/affiliates"
            className="mt-3 inline-block font-semibold text-pink-600"
          >
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
      <section className="mt-12 rounded-2xl bg-[#D1CCC7]/95 p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900">
          Ready to refresh your space?
        </h3>

        <p className="mt-1 text-slate-800">
          Free consults in St. Louis and virtual sessions anywhere.
        </p>

        <a
          href="/contact"
          className="mt-4 inline-block rounded-full bg-pink-500 px-6 py-2.5 font-semibold text-white"
        >
          Book a free consult
        </a>
      </section>
    </main>
  );
}
