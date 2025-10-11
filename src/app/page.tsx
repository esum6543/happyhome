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
          Home styling • Organization • Photo digitizing in St. Louis.
          We make spaces calm, beautiful, and easy to live in—plus we preserve
          your memories with high-quality scanning and auto-crop.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/contact" className="rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold">
            Get a free quote
          </a>
          <a href="/services" className="rounded-full border px-5 py-2.5">
            View services
          </a>
        </div>
      </section>

      {/* Services summary */}
      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        <a href="/services#refresh" className="rounded-xl border p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold">Room Refresh</h3>
          <p className="text-sm text-slate-600 mt-1">
            Fast makeovers: layout, color, décor, and styling.
          </p>
        </a>
        <a href="/services#organize" className="rounded-xl border p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold">Organization</h3>
          <p className="text-sm text-slate-600 mt-1">
            Closets, pantry, garage, and whole-home systems.
          </p>
        </a>
        <a href="/services#photos" className="rounded-xl border p-4 hover:bg-slate-50 transition">
          <h3 className="font-semibold">Photo Digitizing</h3>
          <p className="text-sm text-slate-600 mt-1">
            Bulk scanning with dust cleanup and precise auto-crop.
          </p>
        </a>
      </section>

      {/* Before/after placeholder gallery */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Before & After</h2>
        <p className="text-slate-600 mt-1">
          Replace these images later in <code>/public</code>. They use the template’s default styles.
        </p>
        <div className="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-4">
          <img className="rounded-lg border" src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop" alt="Styled room" />
          <img className="rounded-lg border" src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=800&auto=format&fit=crop" alt="Organized kitchen" />
          <img className="rounded-lg border" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop" alt="Cozy bedroom" />
          <img className="rounded-lg border" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop" alt="Minimal office" />
        </div>
      </section>

      {/* Reviews + affiliates */}
      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">What clients say</h3>
          <p className="text-sm text-slate-600 mt-2">
            “Enela transformed our living room in one afternoon. It finally feels like home.”
            — S., St. Louis
          </p>
          <a href="/reviews" className="mt-3 inline-block text-pink-600 font-semibold">Read & leave a review →</a>
        </div>
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Featured partners</h3>
          <ul className="text-sm text-slate-600 mt-2 list-disc ml-5 space-y-1">
            <li><a className="text-pink-600" href="https://www.amazon.com/?tag=YOURTAG-20">Amazon (affiliate)</a></li>
            <li><a className="text-pink-600" href="https://www.containerstore.com/?aid=YOURID">The Container Store (affiliate)</a></li>
            <li><a className="text-pink-600" href="https://example.com/?ref=yourcode">Local partner</a></li>
          </ul>
          <a href="/affiliates" className="mt-3 inline-block text-pink-600 font-semibold">See all affiliates →</a>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-2xl border p-6 text-center">
        <h3 className="text-xl font-semibold">Ready to refresh your space?</h3>
        <p className="text-slate-600 mt-1">Free consults in St. Louis and virtual sessions anywhere.</p>
        <a href="/contact" className="mt-4 inline-block rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold">
          Book a free consult
        </a>
      </section>
    </main>
  );
}

