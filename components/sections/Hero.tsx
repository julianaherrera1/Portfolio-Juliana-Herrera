export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden"
    >

      <div className="max-w-4xl mx-auto">

        {/* Greeting */}
        <p className="text-2xl text-[var(--text-tertiary)] mb-4">
          Hey!, I am
        </p>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-[var(--text-primary)]">
          Juliana Herrera
        </h1>

        {/* Role */}
        <h2 className="mt-4 text-xl md:text-2xl text-purple-400 font-medium">
          Frontend Software Developer
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          I am an 8th-semester Software Engineering student focused on
          Frontend Web Development, while actively expanding my skills to
          become a Fullstack Web Developer.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* Primary CTA */}
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-500 hover:-translate-y-0.5 transition-all duration-300"
          >
            View My Work
          </a>

          {/* Secondary CTA */}
          <a
            href="https://wa.me/573117249900?text=Hi%20Juliana%2C%20I%20found%20your%20portfolio%20and%20I%E2%80%99d%20like%20to%20connect."
            target="_blank"
            className="px-8 py-3 border border-[var(--border)] text-[var(--text-primary)] font-medium rounded-lg hover:border-purple-500 hover:text-purple-400 hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}