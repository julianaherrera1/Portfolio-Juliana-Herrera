import { GraduationCap } from "lucide-react";

export default function Education() {

  const education = [
    {
      title: "Software Engineering",
      institution: "IU Pascual Bravo",
      period: "8th Semester",
      description:
        "Currently pursuing a degree in Software Engineering with focus on web development, databases and software architecture.",
    },
    {
      title: "High School Diploma with Technical Training in Software Development Assistance",
      institution: "IE Barrio San Nicolas",
      period: "High School Diploma",
      description:
        "Technical program focused on software development fundamentals including programming, databases and web technologies.",
    },
  ];

  const courses = [
    "Git & GitHub - Platzi",
    "Basic Programming Course - Platzi",
    "HTML y CSS - Coursera",
    "Fundamentals of Software Engineering - Platzi",
    "Security Girls LATAM - Microsoft & WoMakersCode",
    "JavaScript - WoMakersCode",
    "Introduction to web IU design - IU Pascual Bravo",
    "Laravel fundamentals - IU Pascual Bravo"
  ];

  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="text-purple-600 dark:text-purple-400">Education</span>
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          My academic background and continuous learning in software development.
        </p>
      </div>

      {/* Main Education */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 
            rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 hover:border-purple-400
            transition-all duration-300"
          >

            {/* Icon */}
            <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg 
            bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400">
              <GraduationCap size={20} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-1">
              {item.title}
            </h3>

            {/* Institution */}
            <p className="text-sm text-neutral-500 mb-2">
              {item.institution} • {item.period}
            </p>

            {/* Description */}
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item.description}
            </p>

          </div>
        ))}
      </div>

      {/* Courses */}
      <div className="text-center">

        <h3 className="text-xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
          Courses & Certifications
        </h3>

        <div className="flex flex-wrap justify-center gap-3">
          {courses.map((course, index) => (
            <span
              key={index}
              className="text-sm px-4 py-1.5 rounded-full 
              bg-neutral-100 dark:bg-neutral-800
              hover:bg-purple-100 dark:hover:bg-purple-900/40
              hover:text-purple-700 dark:hover:text-purple-300
              transition-colors duration-200"
            >
              {course}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}