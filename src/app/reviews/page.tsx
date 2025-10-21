export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">Reviews</h1>
        <p className="mt-3 text-slate-600">
          A few kind words from recent clients in the St. Louis area.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Living Room Refresh</h3>
            <p className="text-sm text-slate-600 mt-2">
              “Enela transformed our living room in one afternoon. It finally feels like home.” — S., St. Louis
            </p>
          </div>

          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Photo Digitizing</h3>
            <p className="text-sm text-slate-600 mt-2">
              “The scans look amazing — clear, cropped, and ready to print. A priceless service.” — A., Oakville
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border p-6 text-center">
          <h3 className="text-xl font-semibold">Want to share your experience?</h3>
          <p className="text-slate-600 mt-1">
            We’d love to feature your feedback on our site.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block rounded-full bg-pink-500 px-5 py-2.5 text-white font-semibold"
          >
            Leave a review
          </a>
        </div>
      </section>
    </main>
  );
}
