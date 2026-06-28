const experiences = [
  {
    period: "2023",
    role: "Inicio de mi vida como estudiante en desarrollo de software",
    company: "",
    description:
      "Comencé mi formación en la carrera de Tecnologías de la Información, fortaleciendo conocimientos en bases de datos, desarrollo web, desarrollo móvil y desarrollo de software.",
    technologies: [],
    current: true,
  },
  {
    period: "2024",
    role: "Proyecto Integrador – Gladiators",
    company: "",
    description:
      "Desarrollé Gladiators, mi primer proyecto integrador universitario, consistente en un sistema de punto de venta con funcionalidades para el control de ventas, inventario y gestión de productos.",
    technologies: ["Flask", "Python","Postgres SQL"],
    current: false,
  },
  {
    period: "2025",
    role: "Proyecto Integrador – Light Step",
    company: "",
    description:
      "Desarrollé Light Step, un proyecto que integró una página web, una aplicación móvil y un dispositivo IoT, con el objetivo de ofrecer una solución tecnológica.",
    technologies: ["Python","JavaScript", "Django", "TailwindCSS","Flutter","Dart", "Firebase", ],
    current: false,
  },
  {
    period: "2025",
    role: "Módulo de Contratos y Expedientes",
    company: "",
    description:
      "Realicé mis estadías en la empresa Aizu, donde desarrollé un nuevo módulo para el sistema interno de la empresa enfocado en la gestión de contratos y expedientes.",
    technologies: ["JavaScript", "PHP", "MySQL","Filezilla"],
    current: false,
  },
    {
    period: "2026 – Actualidad",
    role: "Desarrollo de Modelo Matemático con MediaPipe",
    company: "",
    description:
      "Desarrollé un modelo matemático utilizando MediaPipe para el análisis de movimientos mediante una cámara por computadora.",
    technologies: ["JavaScript", "Python", "OpenCV","MediaPipe"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
          >
          
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experiencia adquirida{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              a través del tiempo.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            Una cronología de mi crecimiento como estudiante</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};