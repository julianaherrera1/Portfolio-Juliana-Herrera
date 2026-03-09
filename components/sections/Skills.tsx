export default function Skills() {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Design",
    "UI/UX Basics",
    "Figma (Basic)",
  ];

  const backend = [
    "Node.js",
    "Express",
    "PHP",
    "Laravel",
    "REST APIs",
    "Authentication",
    "CRUD Operations",
    "SQL Databases (MySQL)",
  ];

  const toolsSoft = [
    "Git",
    "GitHub",
    "Vercel",
    "Netlify",
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Organization",
    "Continuous Learning",
  ];

  const learning = [
    "Backend Development",
    "Artificial Intelligence",
    "Data Analysis with Python",
    "Power BI",
  ];

  const Card = ({ title, items }: { title: string; items: string[] }) => (
    <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 
    hover:shadow-lg hover:-translate-y-1 hover:border-purple-400 
    transition-all duration-300">

      <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800
            hover:bg-purple-100 dark:hover:bg-purple-900/40
            hover:text-purple-700 dark:hover:text-purple-300
            transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-purple-600 dark:text-purple-400">Skills</span>
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable web
          applications while continuously improving my development skills.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Frontend" items={frontend} />
        <Card title="Backend" items={backend} />
        <Card title="Tools & Soft Skills" items={toolsSoft} />
      </div>

      {/* Currently Learning */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">
          Currently Learning
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {learning.map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm rounded-full border border-neutral-300 dark:border-neutral-700
              hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400
              transition-colors duration-200"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-sm text-neutral-500 mt-6">
          English: Intermediate • Spanish: Native
        </p>
      </div>
    </section>
  );
}