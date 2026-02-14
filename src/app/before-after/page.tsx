export default function BeforeAfterPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Before &amp; After
        </h1>
        <p className="mt-3 text-white/80">
          A few transformations — swipe through the pairs.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Card 1 */}
          <section className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
            <h2 className="text-lg font-medium text-white">Pantry Refresh</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <figure className="rounded-xl bg-black/20 p-3">
  <figcaption className="text-sm text-white/80">Before</figcaption>

  <img
    src="/gallery/before-after/IMG_3729.JPEG"
    alt="Pantry before 1"
    className="mt-2 aspect-[4/3] w-full rounded-lg object-cover"
  />

  <img
    src="/gallery/before-after/IMG_3730.JPEG"
    alt="Pantry before 2"
    className="mt-3 aspect-[4/3] w-full rounded-lg object-cover"
  />
</figure>


              <figure className="rounded-xl bg-black/20 p-3">
  <figcaption className="text-sm text-white/80">After</figcaption>

  <img
    src="/gallery/before-after/IMG_3735.JPEG"
    alt="Pantry after 1"
    className="mt-2 aspect-[4/3] w-full rounded-lg object-cover"
  />

  <img
    src="/gallery/before-after/IMG_3737.JEP"
    alt="Pantry after 2"
    className="mt-3 aspect-[4/3] w-full rounded-lg object-cover"
  />
</figure>

            </div>
          </section>

          {/* Card 2 */}
          <section className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
            <h2 className="text-lg font-medium text-white">Closet Organizing</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <figure className="rounded-xl bg-black/20 p-3">
                <figcaption className="text-sm text-white/80">Before</figcaption>
                <img
                  src="/gallery/towels.png"
                  alt="Closet before"
                  className="mt-2 aspect-[4/3] w-full rounded-lg object-cover"
                />
              </figure>

              <figure className="rounded-xl bg-black/20 p-3">
                <figcaption className="text-sm text-white/80">After</figcaption>
                <img
                  src="/gallery/enelalogo.png"
                  alt="Closet after"
                  className="mt-2 aspect-[4/3] w-full rounded-lg object-cover"
                />
              </figure>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
