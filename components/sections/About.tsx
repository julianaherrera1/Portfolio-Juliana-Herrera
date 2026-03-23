export default function About() {
  return (
    <section
      id="about"
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Juliana Herrera
              </span>
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-xl text-[var(--text-secondary)]">
              Frontend Developer Exploring Full-Stack Horizons
            </p>

            {/* Description */}
            <p className="mt-8 text-[var(--text-secondary)] leading-relaxed max-w-xl">
              I’m a Software Engineering student currently in my 8th semester,
              specializing in Frontend Web Development. I enjoy building modern,
              responsive, and user-centered web experiences using technologies
              like React, Next.js, and TypeScript.
            </p>

            <p className="mt-4 text-[var(--text-secondary)] leading-relaxed max-w-xl">
              My focus is writing clean, maintainable code and designing
              intuitive interfaces that deliver real value to users. Currently,
              I'm expanding my knowledge in backend technologies to grow as a
              Full-Stack Developer while exploring areas like Data Analysis
              and Artificial Intelligence.
            </p>

            {/* Tech stack */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["React", "Next.js", "TypeScript", "Tailwind", "Node.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* CTA */}
            <a
              href="/cv/cv - Juliana Herrera - EN.pdf"
              download
              className="inline-block mt-10 px-8 py-3 rounded-full bg-purple-500 hover:bg-purple-400 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              Download My CV
            </a>

          </div>

          {/* RIGHT SIDE - INFO CARD */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-xl shadow-lg">

            <div className="space-y-6 text-[var(--text-secondary)] text-sm md:text-base">

              <div>
                <span className="text-purple-400 font-medium">Age:</span> 21
              </div>

              <div>
                <span className="text-purple-400 font-medium">Location:</span>{" "}
                Medellín, Colombia
              </div>

              <div>
                <span className="text-purple-400 font-medium">Phone:</span>{" "}
                +57 311 724 9900
              </div>

              <div>
                <span className="text-purple-400 font-medium">Email:</span>{" "}
                julianaherrera522@gmail.com
              </div>

              <div>
                <span className="text-purple-400 font-medium">Languages:</span>{" "}
                Spanish (Native), English (Intermediate)
              </div>

              <div>
                <span className="text-purple-400 font-medium">Focus:</span>{" "}
                Frontend Development | Expanding into Full-Stack
              </div>

              <div>
                <span className="text-purple-400 font-medium">Status:</span>{" "}
                Open to internships & freelance opportunities
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}