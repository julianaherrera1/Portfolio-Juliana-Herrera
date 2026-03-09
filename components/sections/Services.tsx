import { Code2, Server, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building modern, responsive and accessible web interfaces using React, Next.js and modern UI practices.",
    },
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Developing APIs and server-side functionality for scalable web applications using modern backend technologies.",
    },
    {
      icon: Rocket,
      title: "Website Optimization",
      description:
        "Improving performance, responsiveness and overall user experience of existing websites.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-purple-600 dark:text-purple-400">Services</span>
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Ways I can help companies and clients build modern, scalable and
          high-quality web solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 
              hover:shadow-lg hover:-translate-y-1 hover:border-purple-400 
              transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 w-11 h-11 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Freelance note */}
      <p className="text-center text-sm text-neutral-500 mt-12">
        Available for freelance projects and full-time opportunities.
      </p>
    </section>
  );
}