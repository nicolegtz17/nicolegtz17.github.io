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
          subtitle: "",
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
            "Software engineer focused on AI platforms, reliability, and building systems that make complex work easier to reason about. This space is where I share projects, ideas, and notes from building production software.",
          ctaAbout: "About me",
          ctaResume: "Open resume",
          ctaProjects: "View projects",
          portfolioKicker: "Portfolio",
          portfolioHeading:
            "I live software engineering culture — databases, AI platforms, and full-stack products built with real ownership and curiosity.",
          portfolioLede:
            "Whether it's designing a data layer, shipping an AI system, or crafting the interface on top — I care about every layer. This is the work I'm most proud of.",
          portfolioCta: "Explore the full portfolio",
          connectKicker: "Let's connect",
          connectHeading: "Open to collaborations, speaking, and new roles.",
          connectLede:
            "I love partnering with teams that value clarity, reliability, and thoughtful design. Reach out to start a conversation.",
          connectEmail: "Email me",
          connectResume: "View resume",
          connectLinkedIn: "LinkedIn",
        },
        about: {
          kicker: "About",
          heading: "Hi, I'm Nicole",
          lede:
            "I'm a software engineer working at the intersection of AI platforms, site reliability engineering, and web development. I build internal tools and AI-powered systems that help engineering teams move faster and operate with greater clarity.\n\nI'm particularly interested in AI-driven platforms and agent-based systems, and I enjoy working across the stack — from backend services and data pipelines to developer-facing web interfaces. I have hands-on experience with AWS, Snowflake, and PostgreSQL, and I value teams that emphasize learning, ownership, and strong engineering fundamentals.\n\nMy work includes multi-agent systems, MCP server infrastructure, observability dashboards, and workflow tooling — with a focus on simplifying complex systems and reducing cognitive overhead for engineers and operators.",
          ctaResume: "Open resume",
          ctaProjects: "View projects",
          heroImageAlt: "Nicole Gutierrez — professional headshot",
          heroCardTitle: "Quick snapshot",
          heroBadgeOne: "AI platforms + product",
          heroBadgeTwo: "SRE-minded, UX-obsessed",
          heroBadgeThree: "Multi-agent systems builder",
        },
        projects: {
          kicker: "Projects",
          heading: "Selected work",
          lede:
            "Real projects I've shipped — from enterprise AI infrastructure to full-stack web applications.",
          filterLabel: "Filter projects by tag",
          labels: {
            role: "Role",
            deliverable: "Deliverables",
            timeline: "Timeline",
            learnings: "Key learnings",
            viewProject: "View project",
          },
          tags: {
            all: "All",
            ai: "AI",
            sre: "SRE",
            data: "Data",
            web: "Web",
          },
          items: {
            dentalia: {
              title: "Dentalia",
              category: "Web · Full Stack · Healthcare",
              role:
                "Full-stack developer building a modern dental practice management platform. Responsible for patient scheduling, record management, and clinic workflow from intake to billing.",
              deliverables: [
                "Patient portal with appointment scheduling and visit history",
                "Clinic dashboard for managing patient records and workflows",
                "Responsive design optimized for both desktop and mobile",
                "Full-stack implementation: React frontend, REST API backend",
              ],
              timeline: [
                "Status: Actively in development",
                "Iterating on core features and UX",
              ],
              learnings: [
                "Designing healthcare workflows that balance simplicity and compliance",
                "Building robust scheduling systems with conflict resolution",
                "Optimizing performance for real-time data updates in clinical settings",
                "Full-stack ownership from DB schema through UI",
              ],
            },
            mcpAuth: {
              title: "MCP Server Authentication — PIMCO",
              category: "AI · Enterprise · Authentication",
              role:
                "Designed and built an authentication and authorization layer for Model Context Protocol (MCP) servers at PIMCO. Enabled secure, role-based access to AI tools and financial data pipelines for engineering and research teams.",
              deliverables: [
                "OAuth/SSO integration for MCP server access in a regulated environment",
                "Role-based access control governing which AI tools each team can invoke",
                "Audit logging and access reporting for compliance and security review",
                "Documentation covering auth flow, onboarding, and token lifecycle",
              ],
              timeline: [
                "Development: ~2–3 months",
                "Scope: Enterprise-grade authentication and authorization for AI infrastructure",
              ],
              learnings: [
                "Securing AI tool infrastructure inside a regulated financial services firm",
                "Designing auth flows that don't create friction for LLM-to-tool integrations",
                "Understanding compliance and audit requirements for enterprise AI deployments",
                "Building systems that handle both human-initiated and machine-to-machine identity",
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
            "Grab the PDF or preview it below.",
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
          subtitle: "",
        },
        nav: {
          home: "Inicio",
          about: "Sobre mí",
          projects: "Proyectos",
          blog: "Blog/Enlaces",
          resume: "Currículum",
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
          updated: "Última actualización 2026.",
        },
        home: {
          aboutKicker: "Sobre mí",
          aboutHeading: "Hola, soy Nicole",
          aboutLede:
            "Ingeniera de software enfocada en plataformas de IA, confiabilidad y construcción de sistemas que hacen el trabajo complejo más fácil de razonar. Aquí comparto proyectos, ideas y notas de software en producción.",
          ctaAbout: "Sobre mí",
          ctaResume: "Ver currículum",
          ctaProjects: "Ver proyectos",
          portfolioKicker: "Portafolio",
          portfolioHeading:
            "Vivo la cultura de ingeniería de software — bases de datos, plataformas de IA y productos full-stack construidos con responsabilidad y curiosidad real.",
          portfolioLede:
            "Ya sea diseñando una capa de datos, lanzando un sistema de IA o construyendo la interfaz encima — me importa cada capa. Este es el trabajo del que estoy más orgullosa.",
          portfolioCta: "Explorar el portafolio completo",
          connectKicker: "Conectemos",
          connectHeading: "Abierta a colaboraciones, charlas y nuevos roles.",
          connectLede:
            "Me gusta colaborar con equipos que valoran claridad, confiabilidad y diseño cuidadoso. Escríbeme para conversar.",
          connectEmail: "Escríbeme",
          connectResume: "Ver currículum",
          connectLinkedIn: "LinkedIn",
        },
        about: {
          kicker: "Sobre mí",
          heading: "Hola, soy Nicole",
          lede:
            "Soy ingeniera de software en la intersección de plataformas de IA, ingeniería de confiabilidad y desarrollo web. Construyo herramientas internas y sistemas con IA que ayudan a los equipos de ingeniería a avanzar más rápido y operar con mayor claridad.\n\nMe interesan especialmente las plataformas impulsadas por IA y los sistemas basados en agentes. Trabajo en todo el stack: desde servicios backend y pipelines de datos hasta interfaces web para desarrolladores. Tengo experiencia con AWS, Snowflake y PostgreSQL, y valoro equipos que enfatizan el aprendizaje, la autonomía y los fundamentos sólidos.\n\nMi trabajo incluye sistemas multiagente, infraestructura de servidores MCP, dashboards de observabilidad y tooling de flujos de trabajo — con enfoque en simplificar sistemas complejos y reducir la carga cognitiva.",
          ctaResume: "Ver currículum",
          ctaProjects: "Ver proyectos",
          heroImageAlt: "Nicole Gutierrez — foto profesional",
          heroCardTitle: "Resumen rápido",
          heroBadgeOne: "Plataformas de IA + producto",
          heroBadgeTwo: "Mentalidad SRE, amor por UX",
          heroBadgeThree: "Constructora de sistemas multiagente",
        },
        projects: {
          kicker: "Proyectos",
          heading: "Trabajo seleccionado",
          lede:
            "Proyectos reales que he desarrollado — desde infraestructura de IA empresarial hasta aplicaciones web full-stack.",
          filterLabel: "Filtrar proyectos por etiqueta",
          labels: {
            role: "Rol",
            deliverable: "Entregables",
            timeline: "Cronograma",
            learnings: "Aprendizajes clave",
            viewProject: "Ver proyecto",
          },
          tags: {
            all: "Todo",
            ai: "IA",
            sre: "SRE",
            data: "Datos",
            web: "Web",
          },
          items: {
            dentalia: {
              title: "Dentalia",
              category: "Web · Full Stack · Salud",
              role:
                "Desarrolladora full-stack construyendo una plataforma moderna de gestión de consultorios dentales. Responsable de agendas, registros de pacientes y flujos de trabajo de la clínica.",
              deliverables: [
                "Portal de pacientes con agenda de citas e historial de visitas",
                "Dashboard para el consultorio con gestión de registros y flujos",
                "Diseño responsivo optimizado para escritorio y móvil",
                "Implementación full-stack: frontend React, backend REST API",
              ],
              timeline: [
                "Estado: En desarrollo activo",
                "Iterando en funcionalidades principales y UX",
              ],
              learnings: [
                "Diseñar flujos de salud que equilibren simplicidad y cumplimiento",
                "Construir sistemas de agendas robustos con resolución de conflictos",
                "Optimizar rendimiento para actualizaciones en tiempo real",
                "Responsabilidad full-stack desde el esquema de BD hasta la UI",
              ],
            },
            mcpAuth: {
              title: "Autenticación MCP — PIMCO",
              category: "IA · Empresa · Autenticación",
              role:
                "Diseñé y construí una capa de autenticación y autorización para servidores MCP (Model Context Protocol) en PIMCO. Habilitó acceso seguro basado en roles a herramientas de IA y pipelines financieros.",
              deliverables: [
                "Integración OAuth/SSO para acceso a servidores MCP en entorno regulado",
                "Control de acceso basado en roles para permisos de herramientas de IA",
                "Registro de auditoría y reportes de acceso para cumplimiento",
                "Documentación del flujo de autenticación y ciclo de vida de tokens",
              ],
              timeline: [
                "Desarrollo: ~2–3 meses",
                "Alcance: Autenticación y autorización enterprise para infraestructura de IA",
              ],
              learnings: [
                "Asegurar infraestructura de IA en una firma financiera regulada",
                "Diseñar flujos de auth que no generen fricción en integraciones LLM",
                "Entender requisitos de cumplimiento para despliegues de IA empresarial",
                "Construir sistemas para identidad humana y máquina a máquina",
              ],
            },
          },
        },
        blog: {
          kicker: "Blog",
          heading: "Notas de investigación y enlaces",
          lede:
            "Un espacio para textos largos, notas de papers y experimentos. Toca la tarjeta para ir al post.",
          postsHeading: "Posts destacados",
        },
        resume: {
          kicker: "Currículum",
          heading: "Descargar o ver",
          lede: "Descarga el PDF o revísalo abajo.",
          download: "Descargar currículum",
        },
        notFound: {
          heading: "Página no encontrada",
          body: "La página que buscas no existe aún.",
          back: "Volver al inicio",
        },
      },
    },
  },
});

export default i18n;
