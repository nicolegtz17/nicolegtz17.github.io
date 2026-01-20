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
          aboutHeading: "Hi, I'm Nicole",
          aboutLede:
            "I'm a software engineer working at the intersection of AI platforms, site reliability engineering, and web design. I build internal tools, AI-powered bots, and production systems that help teams move faster without sacrificing clarity or reliability.\n\nMy work spans multi-agent platforms, Slack automation, observability dashboards, and web interfaces, with a consistent focus on reducing cognitive load for users, engineers, and systems alike. I care deeply about clean abstractions, predictable behavior, and software that remains steady in high-stakes environments.\n\nI'm a dual-citizen with a Mexican background, raised in a border-town community where adaptability, clarity, and practical problem-solving were part of everyday life. That perspective continues to shape how I design systems: grounded, intentional, and built to last.",
          ctaResume: "Open resume",
          ctaProjects: "View projects",
          portfolioKicker: "Portfolio",
          portfolioHeading:
            "I design and build calm, confident software—where AI, reliability, and thoughtful UX meet.",
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
          connectResume: "View resume",
          connectBlog: "Read the blog",
          connectLinkedIn: "LinkedIn",
        },
        about: {
          kicker: "About",
          heading: "Hi, I'm Nicole",
          lede:
            "I am a software engineer working across AI platforms, site reliability engineering, and web design. I build systems that keep teams focused, reduce cognitive load, and deliver predictable behavior in production.\n\nMy work spans internal tools, AI-powered bots, multi-agent systems, Slack automation, observability dashboards, and modern web interfaces. I care about clear system boundaries, trustworthy data flows, and interfaces that make complex systems feel simple.\n\nI am Mexican and was raised in a border-town community, which shapes how I design for clarity, resilience, and real-world constraints.",
          whatIDo: "What I do",
          howIWork: "How I work",
          doOne: "Design AI-assisted workflows for internal and external teams.",
          doTwo: "Build resilient services, observability playbooks, and SRE systems.",
          doThree: "Ship web experiences with a focus on inclusive UX.",
          workOne: "Human-centered discovery paired with fast technical prototyping.",
          workTwo: "Clear documentation, clean handoffs, and thoughtful reviews.",
          workThree: "Performance, reliability, and accessibility from the start.",
        },
        projects: {
          kicker: "Projects",
          heading: "Focused, durable work",
          lede:
            "A selection of portfolio-ready projects spanning AI, Slack workflows, SRE programs, data platforms, and web experiences.",
          filterLabel: "Filter projects by tag",
          tags: {
            all: "All",
            ai: "AI",
            slack: "Slack",
            sre: "SRE",
            data: "Data",
            web: "Web",
          },
          items: {
            signalSync: {
              title: "Signal Sync",
              body: "AI summaries that highlight next steps across multiple teams.",
            },
            pulseRoom: {
              title: "Pulse Room",
              body: "An SRE dashboard that tracks incident health in real time.",
            },
            slackStudio: {
              title: "Slack Studio",
              body: "Workflow automations for launches, support, and on-call.",
            },
            violetLines: {
              title: "Violet Lines",
              body: "Minimal portfolio templates optimized for accessibility.",
            },
            opsAtlas: {
              title: "Ops Atlas",
              body: "AI-powered incident retrospectives with measurable outcomes.",
            },
            datasetOrchard: {
              title: "Dataset Orchard",
              body: "Curated data pipelines for experimentation and sharing.",
            },
          },
        },
        blog: {
          kicker: "Blog & Links",
          heading: "Writing and references",
          lede:
            "Placeholder writing samples and curated resources to share what I am exploring right now.",
          postsHeading: "Recent posts",
          linksHeading: "Curated links",
          posts: {
            one: {
              title: "Building calm incident response",
              date: "Jan 2026",
              excerpt: "How to create space for teams to resolve outages without panic.",
            },
            two: {
              title: "AI design systems for modern teams",
              date: "Dec 2025",
              excerpt: "Patterns that keep product, ML, and engineering aligned.",
            },
            three: {
              title: "A personal playbook for focus",
              date: "Oct 2025",
              excerpt: "Notes on rhythm, ritual, and deep work as an IC.",
            },
          },
          groups: {
            ai: "AI + Product",
            sre: "SRE + Operations",
            web: "Web + Design",
            aiLinks: {
              one: "Human-centered AI checklist",
              two: "Model evaluation notes",
              three: "AI product launch template",
            },
            sreLinks: {
              one: "Post-incident review guide",
              two: "Observability scorecard",
              three: "Service maturity ladder",
            },
            webLinks: {
              one: "Accessible motion patterns",
              two: "Typography pairing notes",
              three: "Portfolio teardown list",
            },
          },
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
          aboutHeading: "Hola, soy Nicole",
          aboutLede:
            "Soy ingeniera de software y trabajo en la interseccion de plataformas de IA, ingenieria de confiabilidad del sitio y diseno web. Construyo herramientas internas, bots con IA y sistemas de produccion que ayudan a los equipos a avanzar mas rapido sin sacrificar claridad ni confiabilidad.\n\nMi trabajo abarca plataformas multiagente, automatizaciones en Slack, dashboards de observabilidad e interfaces web, con un enfoque constante en reducir la carga cognitiva para usuarios, ingenieros y sistemas. Me importa profundamente la limpieza de las abstracciones, el comportamiento predecible y el software que se mantiene firme en entornos de alto riesgo.\n\nTengo doble nacionalidad y una raiz mexicana; creci en una comunidad fronteriza donde la adaptabilidad, la claridad y la resolucion practica de problemas formaban parte de la vida diaria. Esa perspectiva sigue moldeando como diseno sistemas: con base, intencion y durabilidad.",
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
          connectResume: "Ver curriculum",
          connectBlog: "Leer el blog",
          connectLinkedIn: "LinkedIn",
        },
        about: {
          kicker: "Sobre mi",
          heading: "Hola, soy Nicole",
          lede:
            "Combino pensamiento de producto, disciplina de infraestructura y desarrollo creativo para construir experiencias ligeras, claras y duraderas. Tengo doble nacionalidad y creci en una comunidad agricola fronteriza de Mexico.",
          whatIDo: "Lo que hago",
          howIWork: "Como trabajo",
          doOne: "Diseno flujos con IA para equipos internos y externos.",
          doTwo: "Construyo servicios resilientes, observabilidad y sistemas SRE.",
          doThree: "Creo experiencias web con enfoque en UX inclusivo.",
          workOne: "Descubrimiento centrado en personas con prototipos rapidos.",
          workTwo: "Documentacion clara, handoffs limpios y revisiones cuidadas.",
          workThree: "Rendimiento, confiabilidad y accesibilidad desde el inicio.",
        },
        projects: {
          kicker: "Proyectos",
          heading: "Trabajo enfocado y duradero",
          lede:
            "Una seleccion de proyectos que cubren IA, workflows en Slack, programas SRE, plataformas de datos y experiencias web.",
          filterLabel: "Filtrar proyectos por etiqueta",
          tags: {
            all: "Todo",
            ai: "IA",
            slack: "Slack",
            sre: "SRE",
            data: "Datos",
            web: "Web",
          },
          items: {
            signalSync: {
              title: "Signal Sync",
              body: "Resumes de IA que resaltan los siguientes pasos entre equipos.",
            },
            pulseRoom: {
              title: "Pulse Room",
              body: "Dashboard SRE que sigue la salud de incidentes en tiempo real.",
            },
            slackStudio: {
              title: "Slack Studio",
              body: "Automatizaciones para lanzamientos, soporte y guardia.",
            },
            violetLines: {
              title: "Violet Lines",
              body: "Plantillas de portafolio minimalistas y accesibles.",
            },
            opsAtlas: {
              title: "Ops Atlas",
              body: "Retros de incidentes con IA y resultados medibles.",
            },
            datasetOrchard: {
              title: "Dataset Orchard",
              body: "Pipelines de datos curados para experimentar y compartir.",
            },
          },
        },
        blog: {
          kicker: "Blog y enlaces",
          heading: "Escritura y referencias",
          lede:
            "Textos de muestra y recursos curados para compartir lo que estoy explorando ahora.",
          postsHeading: "Posts recientes",
          linksHeading: "Enlaces curados",
          posts: {
            one: {
              title: "Construyendo respuesta a incidentes calmada",
              date: "Ene 2026",
              excerpt: "Como crear espacio para resolver incidentes sin panico.",
            },
            two: {
              title: "Sistemas de diseno IA para equipos modernos",
              date: "Dic 2025",
              excerpt: "Patrones que alinean producto, ML e ingenieria.",
            },
            three: {
              title: "Un playbook personal para el enfoque",
              date: "Oct 2025",
              excerpt: "Notas sobre ritmo, ritual y trabajo profundo como IC.",
            },
          },
          groups: {
            ai: "IA + Producto",
            sre: "SRE + Operaciones",
            web: "Web + Diseno",
            aiLinks: {
              one: "Checklist de IA centrada en personas",
              two: "Notas de evaluacion de modelos",
              three: "Plantilla de lanzamiento de producto IA",
            },
            sreLinks: {
              one: "Guia de revision post-incidente",
              two: "Scorecard de observabilidad",
              three: "Escalera de madurez de servicios",
            },
            webLinks: {
              one: "Patrones de movimiento accesible",
              two: "Notas de combinacion tipografica",
              three: "Lista de desmontaje de portafolios",
            },
          },
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
