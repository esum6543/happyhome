export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20">
        
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          About
        </h1>

        <div className="mt-6 space-y-6 text-slate-700 leading-relaxed">
          <p>
            I believe the spaces we live in should support our daily lives—not add to the stress of it. 
            My work focuses on creating functional, well-organized environments that feel calm, intentional, and easy to maintain.
          </p>

          <p>
            I approach each project by understanding how a space is used and what isn’t working, 
            then designing simple systems that bring clarity and structure. Whether it’s a closet, pantry, or everyday living area, 
            I focus on solutions that are practical, not rigid.
          </p>

          <p>
            What sets my work apart is attention to detail and respect for how people actually live. 
            I don’t believe in one-size-fits-all organizing. Every home is different, and the goal is always to create something 
            that works long after the project is complete.
          </p>

          <p>
            My goal is simple—to make life easier, help you reset your space, and create a home that feels manageable and calm. 
            I’m also happy to support ongoing home maintenance when needed, so your space continues to work for you over time.
          </p>

          {/* Signature */}
          <p className="pt-6 text-slate-900 font-medium">
            — Enela
          </p>
        </div>

      </div>
    </main>
  );
}
