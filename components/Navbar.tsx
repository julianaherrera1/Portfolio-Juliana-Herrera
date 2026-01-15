export default function Navbar() {
    return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-bold">JH</span>

        <div className="flex gap-6 text-sm">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </nav>
    );
}