import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Aprendizaje Constante",
    description:
      "Siempre explorando nuevas tecnologías y mejorando mis habilidades.",
  },
  {
    icon: Rocket,
    title: "Creatividad",
    description:
      "Buscando crear proyectos funcionales y con buen diseño.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Disfrutando colaborar y compartir ideas con otros.",
  },
  {
    icon: Lightbulb,
    title: "Resolución de Problemas",
    description:
      "Encontrando soluciones simples y eficientes en cada proyecto.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre mì
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Sigo aprendiendo,
              <span className="font-serif italic font-normal text-white">
                {" "}
                un paso a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Soy estudiante de desarrollo de software y me interesa aprender sobre tecnologías web y creación de aplicaciones digitales.
              </p>
              <p>
                Me gusta explorar herramientas modernas, mientras desarrollo proyectos que me ayudan a mejorar mis habilidades y experiencia.
              </p>
              <p>
                Actualmente sigo aprendiendo y practicando tanto frontend como backend, buscando crear interfaces funcionales y atractivas.
                También disfruto descubrir nuevas tecnologías y trabajar en proyectos personales que me permitan crecer como desarrollador.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi meta es seguir aprendiendo y crear proyectos digitales funcionales y creativos."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};