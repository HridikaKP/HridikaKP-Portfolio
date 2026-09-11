import { motion } from "framer-motion";
import "./App.css";

const services = [
  {
    number: "01",
    title: "Generative AI & LLM Development",
    description:
      "Building intelligent applications using large language models, embeddings, retrieval systems, and modern Generative AI technologies.",
    technologies: "LLMs · RAG · LangChain · Hugging Face",
  },
  {
    number: "02",
    title: "Machine Learning Solutions",
    description:
      "Developing practical machine learning solutions including data preprocessing, model development, evaluation, and prediction.",
    technologies: "Python · Machine Learning · Scikit-learn",
  },
  {
    number: "03",
    title: "RAG & NLP Solutions",
    description:
      "Creating intelligent document and text-based systems using semantic search, embeddings, vector databases, and NLP.",
    technologies: "NLP · RAG · Embeddings · Vector Search",
  },
  {
    number: "04",
    title: "Backend Development",
    description:
      "Building reliable backend systems and REST APIs for AI-powered applications and modern software products.",
    technologies: "Python · FastAPI · PostgreSQL · Docker",
  },
  {
    number: "05",
    title: "Website Development",
    description:
      "Designing and developing responsive, modern websites with clean interfaces and smooth user experiences.",
    technologies: "React · JavaScript · HTML · CSS · Vite",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "React",
  "FastAPI",
  "Machine Learning",
  "Generative AI",
  "RAG",
  "NLP",
  "SQL",
  "PostgreSQL",
  "ChromaDB",
  "Docker",
  "Git & GitHub",
];

const projects = [
  {
    number: "01",
    title: "InfoPilot AI",
    description:
      "An AI-powered information and document application using intelligent retrieval and Generative AI.",
    tags: ["Python", "FastAPI", "RAG", "AI"],
    github: "https://github.com/HridikaKP",
  },
  {
    number: "02",
    title: "AI Assistant",
    description:
      "An intelligent assistant application combining natural language processing with modern generative AI.",
    tags: ["Python", "NLP", "LLM", "AI"],
    github: "https://github.com/HridikaKP",
  },
  {
    number: "03",
    title: "Intelligent Web App",
    description:
      "A modern web application combining React frontend technology with backend services and intelligent application features.",
    tags: ["React", "JavaScript", "FastAPI", "Web"],
    github: "https://github.com/HridikaKP",
  },
];

function GitHubIcon() {
  return (
    <svg
      className="github-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55v-2.13c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="linkedin-svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M5.2 3.5A2.7 2.7 0 1 1 5.2 8.9a2.7 2.7 0 0 1 0-5.4ZM2.8 10.5h4.8V21H2.8V10.5Zm7.7 0h4.6v1.44h.07c.64-1.2 2.2-2.46 4.53-2.46 4.84 0 5.74 3.18 5.74 7.32V21h-4.8v-3.73c0-.89-.02-2.04-.06-2.88-.06-1.18-.48-2.06-1.76-2.06-1.3 0-1.5 1-1.5 2.02V21h-4.82V10.5Z"
      />
    </svg>
  );
}

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Hridikakp
          </a>

          <nav className="nav-links">

            <a href="#home" className="active">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>

          <a
            href="#contact"
            className="talk-button"
          >
            Let's Talk
            <span>→</span>
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="background-glow glow-left"></div>

        <div className="background-glow glow-right"></div>


        {/* ================= HERO CONTENT ================= */}

        <motion.div
          className="hero-content"

          initial={{
            opacity: 0,
            x: -35,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <div className="availability">

            <span className="availability-dot"></span>

            <span>
              AVAILABLE FOR OPPORTUNITIES
            </span>

          </div>


          <h1 className="hero-title">

            <span className="hello">
              Hi, I'm
            </span>

            <span className="name">
              Hridika KP
            </span>

          </h1>


          <h2 className="hero-role">
            AI Developer &amp; Software Engineer
          </h2>


          <p className="hero-description">
            I build intelligent applications using
            Generative AI, Machine Learning, RAG,
            NLP, and modern web technologies to solve
            real-world problems.
          </p>


          {/* ================= BUTTONS ================= */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              <span>
                View My Work
              </span>

              <span className="button-arrow">
                →
              </span>
            </a>


            <a
              href="https://github.com/HridikaKP"
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >

              <GitHubIcon />

              <span>
                GitHub
              </span>

            </a>


            <a
              href="https://www.linkedin.com/in/hridika-k-p/"
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >

              <LinkedInIcon />

              <span>
                LinkedIn
              </span>

            </a>

          </div>


          {/* ================= CAPABILITIES ================= */}

          <div className="capabilities">

            <div className="capability">

              <strong>
                AI
              </strong>

              <span>
                SOLUTIONS
              </span>

            </div>


            <div className="capability-divider"></div>


            <div className="capability">

              <strong>
                ML
              </strong>

              <span>
                MODELS
              </span>

            </div>


            <div className="capability-divider"></div>


            <div className="capability">

              <strong>
                WEB
              </strong>

              <span>
                APPLICATIONS
              </span>

            </div>


            <div className="capability-divider"></div>


            <div className="capability">

              <strong className="infinity">
                ∞
              </strong>

              <span>
                LEARNING
              </span>

            </div>

          </div>

        </motion.div>


        {/* ================= HERO PHOTO ================= */}

        <motion.div
          className="hero-image-area"

          initial={{
            opacity: 0,
            x: 40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >

          <div className="hero-photo-glow"></div>

          <div className="hero-photo-halo"></div>


          <div className="hero-photo">

            <img
              src="/images/ChatGPT Image Sep 11, 2026, 11_13_35 AM.png"
              alt="Hridika KP"
            />

            <div className="photo-dark-overlay"></div>

            <div className="photo-bottom-blend"></div>

            <div className="photo-left-blend"></div>

            <div className="photo-right-blend"></div>

          </div>

        </motion.div>


        {/* ================= SCROLL ================= */}

        <a
          href="#about"
          className="scroll-down"
        >

          <div className="mouse">
            <span></span>
          </div>

          <small>
            SCROLL DOWN
          </small>

          <span className="scroll-arrow">
            ↓
          </span>

        </a>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="section about-section"
        id="about"
      >

        <div className="container">

          <div className="section-label">

            <span>
              01
            </span>

            ABOUT ME

          </div>


          <div className="about-grid">

            <div>

              <h2 className="section-title">

                Building intelligent
                <br />

                <span>
                  solutions with purpose.
                </span>

              </h2>


              <a
                href="#services"
                className="secondary-button"
              >

                Explore My Work

                <span>
                  →
                </span>

              </a>

            </div>


            <div className="about-text">

              <p>
                I'm an AI Developer and Software Engineer
                focused on building practical, intelligent,
                and user-friendly applications.
              </p>

              <p>
                My work combines Generative AI, Machine
                Learning, Natural Language Processing,
                Retrieval-Augmented Generation, backend
                development, and modern web technologies.
              </p>

              <p>
                I enjoy transforming ideas into useful
                digital products by combining technology,
                creativity, and problem-solving.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}

      <section
        className="section"
        id="services"
      >

        <div className="container">

          <div className="section-label">

            <span>
              02
            </span>

            SERVICES

          </div>


          <h2 className="section-title">

            What I can
            <br />

            <span>
              build for you.
            </span>

          </h2>


          <p className="section-intro">
            From intelligent AI applications to modern
            websites and backend systems, I build
            technology-focused solutions for real-world needs.
          </p>


          <div className="services">

            {services.map((service, index) => (

              <motion.div
                className="service"
                key={service.number}

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >

                <span className="service-number">
                  {service.number}
                </span>


                <div className="service-info">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <small>
                    {service.technologies}
                  </small>

                </div>


                <span className="service-arrow">
                  ↗
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        className="section skills-section"
        id="skills"
      >

        <div className="container">

          <div className="section-label">

            <span>
              03
            </span>

            SKILLS

          </div>


          <div className="skills-header">

            <h2 className="section-title">

              Tools I use to
              <br />

              <span>
                bring ideas to life.
              </span>

            </h2>


            <p>
              A combination of AI, software engineering,
              backend, and frontend technologies.
            </p>

          </div>


          <div className="skills">

            {skills.map((skill, index) => (

              <motion.div
                className="skill"
                key={skill}

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
              >

                {skill}

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        className="section"
        id="projects"
      >

        <div className="container">

          <div className="section-label">

            <span>
              04
            </span>

            PROJECTS

          </div>


          <div className="projects-header">

            <h2 className="section-title">

              Selected
              <br />

              <span>
                projects.
              </span>

            </h2>


            <p>
              A selection of projects exploring
              artificial intelligence, software
              engineering, and modern web development.
            </p>

          </div>


          <div className="projects">

            {projects.map((project, index) => (

              <motion.article
                className="project"
                key={project.number}

                initial={{
                  opacity: 0,
                  y: 25,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="project-top">

                  <span>
                    {project.number}
                  </span>

                  <span>
                    ↗
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <div className="project-tags">

                  {project.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>


                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  View on GitHub →
                </a>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="section contact-section"
        id="contact"
      >

        <div className="container">

          <div className="section-label">

            <span>
              05
            </span>

            CONTACT

          </div>


          <div className="contact-grid">

            <h2 className="contact-title">

              Let's build
              <br />

              something
              <br />

              <span>
                intelligent.
              </span>

            </h2>


            <div className="contact-content">

              <p>
                Have an idea, project, or opportunity?
                I'd love to hear about it.
              </p>


              <a
                href="mailto:yourmail@example.com"
                className="email"
              >

                hridikaprabhas@gmail.com

                <span>
                  ↗
                </span>

              </a>


              <div className="contact-links">

                <a
                  href="https://github.com/HridikaKP"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>


                <a
                  href="https://www.linkedin.com/in/hridika-k-p/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-container">

          <span className="footer-logo">
            Hridikakp
          </span>


          <span>
            © {new Date().getFullYear()} Hridika KP
          </span>


          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;