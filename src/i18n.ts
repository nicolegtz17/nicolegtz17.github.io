import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        layout: {
          title: "Nicole Gutierrez",
          subtitle: "AI + Product + Web",
        },
        nav: {
          home: "Home",
          about: "About",
          projects: "Projects",
          blog: "Blog/Links",
          resume: "Resume",
        },
        theme: {
          dark: "Dark",
          light: "Light",
          switchToDark: "Switch to dark theme",
          switchToLight: "Switch to light theme",
        },
        language: {
          label: "Language",
          english: "EN",
          spanish: "ES",
        },
        footer: {
          built: "Built with Vite + React + TypeScript. Hosted on GitHub Pages.",
          updated: "Last updated 2026.",
        },
        home: {
          aboutKicker: "About",
          aboutHeading: "Hi, I'm Nicole 👋",
          aboutLede:
            "I'm a software engineer focused on AI platforms, reliability, and building systems that make complex work easier to reason about. This space is where I share projects, ideas, and notes from building production software.",
          ctaAbout: "About me ✨",
          ctaResume: "Open resume",
          ctaProjects: "View projects",
          portfolioKicker: "Portfolio",
          portfolioHeading:
            "I design and build calm, confident software where AI, reliability, and thoughtful UX meet.",
          portfolioLede:
            "Designing webpages, building AI bots, and shipping confident software experiences. This selection highlights the work I am most proud of.",
          portfolioCta: "Explore the full portfolio",
          cardOneTitle: "AI Product Strategy",
          cardOneBody: "Workstreams that turn ML prototypes into reliable, measurable wins.",
          cardTwoTitle: "Slack + Workflow Design",
          cardTwoBody: "Automations that make teams feel fast without feeling chaotic.",
          cardThreeTitle: "Web Experiences",
          cardThreeBody: "Soft, minimal interfaces with accessible, responsive systems.",
          connectKicker: "Let's connect",
          connectHeading: "Open to collaborations, speaking, and new roles.",
          connectLede:
            "I love partnering with teams that value clarity, reliability, and thoughtful design. Reach out to start a conversation.",
          connectEmail: "Email me",
          connectResume: "View resume",
          connectBlog: "Read the blog",
          connectLinkedIn: "LinkedIn",
        },
        about: {
          kicker: "About",
          heading: "Hi, I'm Nicole ✨",
          lede:
            "I'm a software engineer working at the intersection of AI platforms, site reliability engineering, and web development. I build internal tools and AI-powered systems that help engineering teams move faster and operate with greater clarity.\n\nI'm particularly interested in AI-driven platforms and agent-based systems, and I enjoy working across the stack, from backend services and data pipelines to developer-facing web interfaces. I have hands-on experience with AWS, Snowflake, and PostgreSQL, and I value teams that emphasize learning, ownership, and strong engineering fundamentals.\n\nMy work includes multi-agent systems, Slack automation, observability dashboards, and workflow tooling, with a focus on simplifying complex systems and reducing cognitive overhead for engineers and operators.\n\nI'm a dual-citizen with a Mexican background, raised in a border-town community where adaptability and clear problem-solving were part of everyday life. That perspective continues to influence how I approach engineering problems.",
          ctaResume: "Open resume 📄",
          ctaProjects: "View projects 💡",
          heroImageAlt: "Nicole smiling in Times Square",
          heroCardTitle: "Quick hellos",
          heroBadgeOne: "AI + product thinker",
          heroBadgeTwo: "SRE minded, UX obsessed",
          heroBadgeThree: "AI systems builder + storyteller",
          funKicker: "Outside work",
          funHeading: "Things that light me up 🌈",
          funLede:
            "When I'm off the clock, I'm usually chasing fresh air, good food, and little sparks of joy.",
          funOne: "Runs, long walks, and sunny resets 🏃‍♀️",
          funTwo: "Pickleball dates and friendly competition 🏓",
          funThree: "Piano time and cozy playlists 🎹",
          funFour: "New places, city nights, and travel days ✈️",
          funFive: "Sushi + tacos forever, coffee over matcha (but I love both) 🍣🌮☕",
          carouselKicker: "Photo roll",
          carouselHeading: "Tiny memories, big smiles 📸",
          carouselLede: "Swipe through the moments that keep me inspired.",
          carouselLabel: "Nicole's fun photo carousel",
          carouselCityAlt: "Night city skyline",
          carouselCityCaption: "City glow",
          carouselSeaAlt: "Ocean view from a lookout",
          carouselSeaCaption: "Sea-view breathers",
          carouselPickleAlt: "Nicole with a pickleball paddle",
          carouselPickleCaption: "Pickleball wins",
          carouselMatchaAlt: "Matcha and coffee drinks",
          carouselMatchaCaption: "Matcha and coffee fuels",
          carouselSushiAlt: "Sushi plate",
          carouselSushiCaption: "Sushi cravings",
          carouselTacosAlt: "Tacos plate",
          carouselTacosCaption: "Taco time",
          whatIDo: "What I do",
          howIWork: "How I work",
          doOne: "Design AI-assisted workflows for internal and external teams. 🤝",
          doTwo: "Build resilient services, observability playbooks, and SRE systems. 🛠️",
          doThree: "Ship web experiences with a focus on inclusive UX. ✨",
          workOne: "Human-centered discovery paired with fast technical prototyping. 🔍",
          workTwo: "Clear documentation, clean handoffs, and thoughtful reviews. 🧩",
          workThree: "Performance, reliability, and accessibility from the start. ✅",
        },
        projects: {
          kicker: "Projects",
          heading: "Focused, durable work",
          lede:
            "Highlighted internal tools and platform work, presented with public-safe artifacts.",
          filterLabel: "Filter projects by tag",
          labels: {
            role: "Role",
            deliverable: "Open deliverable",
            timeline: "Timeline",
            learnings: "Key learnings",
          },
          tags: {
            all: "All",
            ai: "AI",
            slack: "Slack",
            sre: "SRE",
            data: "Data",
            web: "Web",
          },
          items: {
            slackStudio: {
              title: "Slack Studio",
              category: "Slack · AI · Internal Tooling",
              role:
                "Developer responsible for designing and implementing Slack-based automations and AI-assisted workflows. Focused on extending existing internal bots with new commands, improving reliability, and integrating operational systems (e.g., ticketing, on-call, and reporting tools).",
              deliverables: [
                "Mock Slack workspace demonstrating command flows",
                "Synthetic examples of AI-powered thread summaries and workflow automation",
                "Architecture diagram showing Slack → service layer → AI tools routing",
                "All demos use dummy data and abstracted system names.",
              ],
              timeline: [
                "Development: 1–2 weeks per workflow",
                "Iteration: Ongoing improvements over multiple months",
              ],
              learnings: [
                "Designing UX that works within Slack’s strict interaction constraints",
                "Knowing when AI adds value vs. when deterministic automation is safer",
                "Building internal tools that scale across teams without increasing support burden",
                "Structuring AI workflows to fail gracefully in production environments",
              ],
            },
            opsAtlas: {
              title: "Ops Atlas",
              category: "AI · SRE · Incident Management",
              role:
                "Contributor to an existing incident response system, responsible for extending AI-driven capabilities such as Slack thread summarization, incident report generation, and automated ticket creation.",
              deliverables: [
                "Sample incident timeline generated from synthetic Slack data",
                "AI summarization examples for incident retrospectives",
                "High-level workflow diagram of incident → AI analysis → reporting",
                "No real incidents, systems, or metrics are exposed.",
              ],
              timeline: ["Development: ~1 month", "Scope: Feature extensions and production hardening"],
              learnings: [
                "Applying AI safely in high-stakes operational contexts",
                "Translating unstructured conversations into actionable summaries",
                "Understanding trust boundaries in incident response tooling",
                "Designing AI systems that support engineers without replacing human judgment",
              ],
            },
            signalSync: {
              title: "Signal Sync",
              category: "AI · Data · Platform Analytics",
              role:
                "Developer responsible for designing and building an internal analytics dashboard to track AI platform usage, performance, and adoption metrics. Owned database design, backend services, and frontend visualization.",
              deliverables: [
                "Screenshot or live demo of analytics dashboard using synthetic data",
                "Example schema for tracking usage, latency, and success rates",
                "Architecture diagram of metrics ingestion and visualization flow",
              ],
              timeline: [
                "Development: ~1 month",
                "Iteration: Extended over time as new metrics were added",
              ],
              learnings: [
                "Designing observability for AI systems beyond traditional metrics",
                "Balancing metric granularity with performance and cost constraints",
                "Turning raw usage data into insights that influence engineering decisions",
                "Building dashboards that are useful to both engineers and stakeholders",
              ],
            },
            pulseRoom: {
              title: "Pulse Room",
              category: "SRE · Data Visualization",
              role:
                "Developer responsible for building a visualization system to track scheduled job execution, dependencies, and failures across critical systems. Focused on improving visibility into timing and execution health.",
              deliverables: [
                "Gantt-style job execution visualization using mock job data",
                "Dependency graph showing upstream/downstream relationships",
                "Read-only UI demonstrating failure detection and timing analysis",
              ],
              timeline: ["Development: ~1 month", "Scope: Visualization and observability feature build"],
              learnings: [
                "Visualizing complex system behavior in a way engineers can quickly understand",
                "Representing time-based dependencies accurately in frontend systems",
                "Improving observability without overwhelming users with data",
                "Translating operational pain points into practical tooling",
              ],
            },
          },
        },
        blog: {
          kicker: "Blog",
          heading: "Research notes and links",
          lede:
            "A scrollable home for longform takes, paper notes, and experiments. Tap the card to jump into the post.",
          postsHeading: "Featured posts",
        },
        resume: {
          kicker: "Resume",
          heading: "Download or view",
          lede:
            "Grab the PDF or preview it below. Replace the placeholder with your latest resume in the public folder.",
          download: "Download resume",
        },
        notFound: {
          heading: "Page not found",
          body: "The page you are looking for does not exist yet.",
          back: "Back to home",
        },
      },
    },
    es: {
      translation: {
        layout: {
          title: "Nicole Gutierrez",
          subtitle: "IA + Producto + Web",
        },
        nav: {
          home: "Inicio",
          about: "Sobre mi",
          projects: "Proyectos",
          blog: "Blog/Enlaces",
          resume: "Curriculum",
        },
        theme: {
          dark: "Modo oscuro",
          light: "Modo claro",
          switchToDark: "Cambiar a tema oscuro",
          switchToLight: "Cambiar a tema claro",
        },
        language: {
          label: "Idioma",
          english: "EN",
          spanish: "ES",
        },
        footer: {
          built: "Creado con Vite + React + TypeScript. Hospedado en GitHub Pages.",
          updated: "Ultima actualizacion 2026.",
        },
        home: {
          aboutKicker: "Sobre mi",
          aboutHeading: "Hola, soy Nicole 👋",
          aboutLede:
            "Soy ingeniera de software enfocada en plataformas de IA, confiabilidad y en construir sistemas que hagan el trabajo complejo mas facil de razonar. Este espacio es donde comparto proyectos, ideas y notas de construccion de software en produccion.",
          ctaAbout: "Sobre mi ✨",
          ctaResume: "Abrir curriculum",
          ctaProjects: "Ver proyectos",
          portfolioKicker: "Portafolio",
          portfolioHeading: "Disenando experiencias de software calmadas y seguras.",
          portfolioLede:
            "Construyo productos con IA, infraestructura resiliente y experiencias web cuidadas. Esta seleccion destaca el trabajo del que estoy mas orgullosa.",
          portfolioCta: "Explorar el portafolio completo",
          cardOneTitle: "Estrategia de producto IA",
          cardOneBody: "Lineas de trabajo que convierten prototipos ML en resultados medibles.",
          cardTwoTitle: "Diseno de workflows en Slack",
          cardTwoBody: "Automatizaciones que hacen a los equipos mas rapidos sin caos.",
          cardThreeTitle: "Experiencias web",
          cardThreeBody: "Interfaces minimalistas con sistemas accesibles y responsivos.",
          connectKicker: "Conectemos",
          connectHeading: "Abierta a colaboraciones, charlas y nuevos roles.",
          connectLede:
            "Me gusta colaborar con equipos que valoran claridad, confiabilidad y diseno cuidadoso. Escribeme para conversar.",
          connectEmail: "Escribeme",
          connectResume: "Ver curriculum",
          connectBlog: "Leer el blog",
          connectLinkedIn: "LinkedIn",
        },
        about: {
          kicker: "Sobre mi",
          heading: "Hola, soy Nicole ✨ ",
          lede:
            "Soy ingeniera de software y trabajo en la interseccion de plataformas de IA, ingenieria de confiabilidad del sitio y desarrollo web. Construyo herramientas internas y sistemas con IA que ayudan a los equipos de ingenieria a avanzar mas rapido y operar con mayor claridad.\n\nMe interesan especialmente las plataformas impulsadas por IA y los sistemas basados en agentes, y disfruto trabajar en todo el stack, desde servicios backend y pipelines de datos hasta interfaces web para desarrolladores. Tengo experiencia practica con AWS, Snowflake y PostgreSQL, y valoro equipos que enfatizan el aprendizaje, la autonomia y fundamentos solidos de ingenieria.\n\nMi trabajo incluye sistemas multiagente, automatizaciones en Slack, dashboards de observabilidad y tooling de flujos de trabajo, con enfoque en simplificar sistemas complejos y reducir la carga cognitiva de ingenieros y operadores.\n\nTengo doble nacionalidad y una raiz mexicana; creci en una comunidad fronteriza donde la adaptabilidad y la resolucion clara de problemas formaban parte de la vida diaria. Esa perspectiva sigue influyendo en como abordo los problemas de ingenieria.",
          ctaResume: "Abrir curriculum 📄",
          ctaProjects: "Ver proyectos 💡",
          heroImageAlt: "Nicole sonriendo en Times Square",
          heroCardTitle: "Saluditos rapidos",
          heroBadgeOne: "IA + producto",
          heroBadgeTwo: "Mentalidad SRE, amor por UX",
          heroBadgeThree: "Constructora de sistemas IA + storyteller",
          funKicker: "Fuera del trabajo",
          funHeading: "Cosas que me llenan de energia 🌈",
          funLede: "Cuando desconecto, busco aire fresco, buena comida y pequenos momentos felices.",
          funOne: "Correr, caminar y recargar al sol 🏃‍♀️",
          funTwo: "Pickleball y competencia amistosa 🏓",
          funThree: "Piano y playlists cozy 🎹",
          funFour: "Nuevos lugares, noches de ciudad y viajes ✈️",
          funFive: "Sushi y tacos siempre, cafe sobre matcha (pero me gustan los dos) 🍣🌮☕",
          carouselKicker: "Fotos",
          carouselHeading: "Momentos chiquitos, sonrisas grandes 📸",
          carouselLede: "Desliza para ver las postales que me inspiran.",
          carouselLabel: "Carrusel de fotos divertidas de Nicole",
          carouselCityAlt: "Luces de ciudad",
          carouselCityCaption: "Brillo de ciudad",
          carouselSeaAlt: "Vista al mar",
          carouselSeaCaption: "Vista al mar",
          carouselPickleAlt: "Jugando pickleball",
          carouselPickleCaption: "Pickleball time",
          carouselMatchaAlt: "Matcha y cafe",
          carouselMatchaCaption: "Matcha y cafe",
          carouselSushiAlt: "Plato de sushi",
          carouselSushiCaption: "Sushi time",
          carouselTacosAlt: "Plato de tacos",
          carouselTacosCaption: "Taco time",
          whatIDo: "Lo que hago",
          howIWork: "Como trabajo",
          doOne: "Diseno flujos con IA para equipos internos y externos. 🤝",
          doTwo: "Construyo servicios resilientes, observabilidad y sistemas SRE. 🛠️",
          doThree: "Creo experiencias web con enfoque en UX inclusivo. ✨",
          workOne: "Descubrimiento centrado en personas con prototipos rapidos. 🔍",
          workTwo: "Documentacion clara, handoffs limpios y revisiones cuidadas. 🧩",
          workThree: "Rendimiento, confiabilidad y accesibilidad desde el inicio. ✅",
        },
        projects: {
          kicker: "Proyectos",
          heading: "Trabajo enfocado",
          lede:
            "Proyectos internos destacados, presentados con entregables seguros para publico.",
          filterLabel: "Filtrar proyectos por etiqueta",
          labels: {
            role: "Rol",
            deliverable: "Entregable",
            timeline: "Cronograma",
            learnings: "Aprendizajes clave",
          },
          tags: {
            all: "Todo",
            ai: "IA",
            slack: "Slack",
            sre: "SRE",
            data: "Datos",
            web: "Web",
          },
          items: {
            slackStudio: {
              title: "Slack Studio",
              category: "Slack · IA · Herramientas internas",
              role:
                "Desarrolladora responsable de disenar e implementar automatizaciones en Slack y flujos con IA. Enfocada en ampliar bots internos con nuevos comandos, mejorar confiabilidad e integrar sistemas operativos (tickets, guardias y reportes).",
              deliverables: [
                "Mock de workspace de Slack con flujos de comandos",
                "Ejemplos sinteticos de resumenes de hilos con IA y automatizacion",
                "Diagrama de arquitectura: Slack → capa de servicios → herramientas de IA",
                "Todos los demos usan datos ficticios y nombres abstraidos.",
              ],
              timeline: [
                "Desarrollo: 1–2 semanas por flujo",
                "Iteracion: mejoras continuas durante meses",
              ],
              learnings: [
                "Disenar UX que funcione dentro de las restricciones de Slack",
                "Saber cuando la IA aporta valor vs. automatizacion deterministica",
                "Construir herramientas internas que escalen sin aumentar soporte",
                "Estructurar flujos de IA con fallos seguros en produccion",
              ],
            },
            opsAtlas: {
              title: "Ops Atlas",
              category: "IA · SRE · Gestion de incidentes",
              role:
                "Colaboradora en un sistema de respuesta a incidentes, encargada de ampliar capacidades con IA como resumenes de hilos en Slack, generacion de reportes y creacion automatica de tickets.",
              deliverables: [
                "Linea de tiempo de incidente generada con datos sinteticos de Slack",
                "Ejemplos de resumenes de IA para retrospectivas",
                "Diagrama de alto nivel: incidente → analisis IA → reportes",
                "No se exponen incidentes, sistemas ni metricas reales.",
              ],
              timeline: ["Desarrollo: ~1 mes", "Alcance: extensiones de funciones y endurecimiento en produccion"],
              learnings: [
                "Aplicar IA de forma segura en contextos operativos criticos",
                "Traducir conversaciones no estructuradas en resumenes accionables",
                "Entender limites de confianza en herramientas de incidentes",
                "Disenar IA que apoye a ingenieras/os sin reemplazar juicio humano",
              ],
            },
            signalSync: {
              title: "Signal Sync",
              category: "IA · Datos · Analitica de plataforma",
              role:
                "Desarrolladora responsable de disenar y construir un dashboard interno de analitica para uso, rendimiento y adopcion. Duena del diseno de base de datos, servicios backend y visualizacion frontend.",
              deliverables: [
                "Captura o demo del dashboard con datos sinteticos",
                "Esquema de ejemplo para uso, latencia y tasas de exito",
                "Diagrama de arquitectura del flujo de metricas y visualizacion",
              ],
              timeline: ["Desarrollo: ~1 mes", "Iteracion: se extendio con nuevas metricas"],
              learnings: [
                "Disenar observabilidad para IA mas alla de metricas tradicionales",
                "Equilibrar granularidad con rendimiento y costo",
                "Convertir datos crudos en insights accionables",
                "Crear dashboards utiles para ingenieria y stakeholders",
              ],
            },
            pulseRoom: {
              title: "Pulse Room",
              category: "SRE · Visualizacion de datos",
              role:
                "Desarrolladora responsable de construir un sistema de visualizacion para ejecuciones programadas, dependencias y fallos. Enfocada en mejorar visibilidad de tiempos y salud.",
              deliverables: [
                "Visualizacion estilo Gantt con datos simulados",
                "Grafo de dependencias upstream/downstream",
                "UI de solo lectura para deteccion de fallos y analisis de tiempos",
              ],
              timeline: ["Desarrollo: ~1 mes", "Alcance: visualizacion y observabilidad"],
              learnings: [
                "Visualizar comportamiento complejo de sistemas con claridad",
                "Representar dependencias temporales con precision en frontend",
                "Mejorar observabilidad sin abrumar con datos",
                "Traducir dolores operativos en tooling practico",
              ],
            },
          },
        },
        blog: {
          kicker: "Blog",
          heading: "Notas de investigacion y enlaces",
          lede:
            "Un espacio para textos largos, notas de papers y experimentos. Toca la tarjeta para bajar al post.",
          postsHeading: "Posts destacados",
        },
        resume: {
          kicker: "Curriculum",
          heading: "Descargar o ver",
          lede:
            "Descarga el PDF o revisalo abajo. Reemplaza el archivo con tu curriculum mas reciente.",
          download: "Descargar curriculum",
        },
        notFound: {
          heading: "Pagina no encontrada",
          body: "La pagina que buscas no existe aun.",
          back: "Volver al inicio",
        },
      },
    },
  },
});

export default i18n;
