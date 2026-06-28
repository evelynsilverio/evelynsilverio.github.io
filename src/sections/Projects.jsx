import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Light Step",
    description:
      "Light Step es un proyecto que integra una página web, una aplicación móvil y un dispositivo IoT. Consiste en unas escaleras inteligentes que se controlan a través de la aplicación móvil, en la que se le puede cambiar el color, el efecto, la opacidad y consultar el tiempo de uso, de igualmanera, cuando las escaleras detectan personas se encienden. En la página web se encuentra la información sobre las esclaeras inteligentes, así como el costo",
    image: "/projects/proyecto1.jpeg",
    tags: ["Django", "Tailwind css", "Python", "JavaScript"],
    link: "#",
  },
  {
    title: "Realtime Simulator",
    description:"Realtime Simulator es un simulador de partículas en tiempo real controlado mediante gestos de las manos y comandos de voz. Permite modificar la velocidad y fuerza de las partículas para visualizar su comportamiento en distintos escenarios físicos, como la dispersión de materiales durante un derrumbe o un impacto.",
    image: "/projects/proyecto2.png",
    tags: ["Python", "Media Pipe", "JavaScript"],
    link: "#",
  },
  {
    title: "Sistema de Punto de Venta",
    description:
      "Gladiators en un Sistema de Punto de Venta, su funcionalidad consiste en hacer ventas, gestionar productos, empleados e inventario, ",
    image: "/projects/proyecto3.jpeg",
    tags: ["Flask", "Python", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Módulo Contratos y Expedientes",
    description:
      "Es un módulo, el cuál consiste en generar contratos con IA a empleados nuevos, así como poder firmarlos digitalmente o subir la e.firma, donde cada empleado puede subir sus documentos personales al expediente correspondiente",
    image: "/projects/proyecto4.jpeg",
    tags: ["PHP", "MySQL", "Filezilla", "JavaScript"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Proyectos destacados
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proyectos
            <span className="font-serif italic font-normal text-white">
              {" "}
              con gran impacto.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Una seleccionn de mis proyectos recientes que han generado impacto
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/50
                  to-transparent opacity-60"
                />

                {/* Overlay Link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
        </div>
      </div>
    </section>
  );
};