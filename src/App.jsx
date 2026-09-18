import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "AI / MACHINE LEARNING",
    title: "Plant Disease Classification",
    description:
      "Image-based plant disease classification system for 38 classes using CNN and Transfer Learning.",
    tech: "TensorFlow · Keras · OpenCV · MobileNetV2",
    details:
      "Developed CNN from scratch and MobileNetV2 models, including frozen and fine-tuned versions. Applied image preprocessing and augmentation and achieved 92.06% accuracy with the fine-tuned MobileNetV2 model.",
    github:
      "https://github.com/kainatmoin/Plant-Disease-Classification-Using-Deep-Learning.git",
  },
  {
    number: "02",
    category: "AI / COMPUTER VISION",
    title: "Waste Classification using Image Clustering",
    description:
      "Waste classification system using MobileNetV2, PCA and K-Means clustering for 9 waste classes.",
    tech: "Python · CNN · MobileNetV2 · PCA · K-Means",
    details:
      "Built a prediction pipeline in Google Colab and evaluated clustering performance using Silhouette Score and Davies–Bouldin Index.",
    github:
      "https://github.com/kainatmoin/Smart-Waste-Classification.git",
  },
  {
    number: "03",
    category: "NLP / MACHINE LEARNING",
    title: "Emotion Classifier",
    description:
      "Multi-label emotion classification application detecting 9 emotions from tweets.",
    tech: "Python · Scikit-learn · TF-IDF · Streamlit",
    details:
      "Built during AI Got Talent DevDay '26 at FAST NUCES Karachi. Achieved F1 Score 89.3%, Precision 88.6% and Recall 90.1%.",
    github:
      "https://github.com/kainatmoin/Tweet-Emotion-Classifier.git",
    demo:
      "https://aigot-talent-urpxliqh6zzqzwg5gqtbpa.streamlit.app/",
  },
  {
    number: "04",
    category: "COMPUTER VISION",
    title: "Human Pose Estimation",
    description:
      "Pose estimation and activity classification pipeline for real-time human movement analysis.",
    tech: "MediaPipe · OpenCV · Python",
    details:
      "Detected human body landmarks, calculated knee, hip and shoulder angles and classified Squat, Standing and Transition activities using a rule-based model.",
    github:
      "https://github.com/kainatmoin/Human-Pose-Estimation-Activity-Classification.git",
  },
  {
    number: "05",
    category: "AI APPLICATION",
    title: "NeuroFlow AI",
    description:
      "AI-powered career assistant developed for NED Proxion 2026.",
    tech: "React · JavaScript · AI / ML",
    details:
      "Developed features for resume analysis, LinkedIn integration, interview preparation and intelligent career guidance.",
    github:
      "https://github.com/kainatmoin/NeuroFlow-Proxion2026.git",
    demo:
      "https://neuro-flow-psi.vercel.app/",
  },
  {
    number: "06",
    category: "FINAL YEAR PROJECT · ONGOING",
    title: "PostPal",
    description:
      "Offline AI-powered fitness and rehabilitation assistant for exercise monitoring.",
    tech: "Python · MediaPipe · OpenCV · TensorFlow Lite · LSTM",
    details:
      "Uses a device camera for real-time pose estimation and exercise analysis, with voice guidance and real-time movement feedback. Final Year Project is currently ongoing.",
  },
  {
    number: "07",
    category: "AI / COMPUTER VISION",
    title: "AI Civic Guardian",
    description:
      "AI-powered civic issue reporting platform using computer vision, GPS location capture and structured report submission.",
    tech: "Python · Streamlit · YOLO · PyTorch · OpenCV · SQLite",
    details:
      "Built a civic issue reporting system using a fine-tuned YOLO model to detect 7 public infrastructure problems: potholes, road cracks, open manholes, fallen trees, garbage, broken streetlights and water leakage. Integrated AI confidence scores, browser GPS capture and SQLite-based report submission.",
    github:
      "https://github.com/kainatmoin/AI-Civic-Guardian",
    demo:
      "https://ai-civic-guardian-kryjzuyolzphxv7feqhxy4.streamlit.app/",
  },
];

const certificates = [
  {
    title: "Google AI Professional Certificate",
    organization: "Google & Coursera · 2026",
    image: "/Certificates/google-ai-professional.jpeg",
  },
  {
    title: "Google AI Essentials Specialization",
    organization: "Google & Coursera · 2026",
    image: "/Certificates/google-ai-essentials.jpeg",
  },
  {
    title: "Generative AI Application Developer",
    organization: "NCEAC-HEC & ULEF, USA · 2026",
    image: "/Certificates/generative-ai.jpeg",
  },
  {
    title: "AI Got Talent",
    organization:
      "Certificate of Participation · FAST NUCES Karachi · 2026",
    image: "/Certificates/ai-got-talent.jpeg",
  },
  {
    title: "Proxion 2026",
    organization:
      "Certificate of Participation · NED University · 2026",
    image: "/Certificates/proxion-2026.png",
  },
  {
    title: "Certificate of Participation in AI",
    organization: "ACIP",
    image: "/Certificates/acip.jpeg",
  },
  {
    title: "Web Development Professional Training Program",
    organization: "Professional Training",
    image: "/Certificates/web-development.jpeg",
  },
  {
    title: "Carbon Footprint Reduction Training",
    organization: "Training Certificate",
    image: "/Certificates/carbon-footprint.jpeg",
  },
  {
    title: "Climate Change",
    organization: "Training / Participation Certificate",
    image: "/Certificates/climate change.jpeg",
  },
  {
    title: "Human Flag Formation",
    organization: "Certificate of Participation",
    image: "/Certificates/human-flag.jpeg",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.35], [0, -90]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.35], [1.04, 1]);
  const heroContentY = useTransform(scrollYProgress, [0, 0.28], [0, 70]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  useEffect(() => {
    if (loading) return;

    const selectors = [
      ".section-heading",
      ".skills-grid .skill-card",
      ".project-card",
      ".experience-item",
      ".education-item",
      ".certificate-card",
      ".contact-content",
      ".contact-links",
      "footer",
    ];

    const elements = document.querySelectorAll(selectors.join(","));
    elements.forEach((element) => element.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return (
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="loader-inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="loader-name"
            initial={{ opacity: 0, y: 18, letterSpacing: "8px" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-2px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Kainat Moin
          </motion.span>

          <motion.span
            className="loader-role"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
          >
            AI &amp; MACHINE LEARNING ENGINEER
          </motion.span>

          <motion.div
            className="loader-line"
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.25, duration: 0.65, ease: "easeOut" }}
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <main>
      {/* ================= NAVIGATION ================= */}

      <motion.header
        className="navbar"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#home" className="logo">
          MY <span>PORTFOLIO.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>
      </motion.header>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <motion.div
          className="hero-image"
          style={{ y: heroImageY, scale: heroImageScale }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.04 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.15 }}
        />

        <motion.div
          className="hero-content"
          style={{ y: heroContentY, opacity: heroOpacity }}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow hero-role">
            AI &amp; MACHINE LEARNING ENGINEER
          </p>

          <p className="hero-hello">Hello, I'm</p>

          <h1>
            Kainat <em>Moin</em>
          </h1>

          <p className="hero-description">
            Building intelligent solutions with
            <br />
            AI, Machine Learning &amp; Computer Vision.
          </p>

          <p className="hero-tags">
            AI Enthusiast <span>·</span> Developer{" "}
            <span>·</span> Computer Vision
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              Explore my work <span>↘</span>
            </a>

            <a
              href="/CV/Kainat Moin Resume.pdf"
              download
              className="secondary-btn"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className="scroll-explore"
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          whileHover={{ x: -4 }}
        >
          <span>SCROLL TO EXPLORE</span>
          <i>↓</i>
        </motion.a>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="about section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 — ABOUT</p>

          <h2>
            Building with <em>curiosity</em>
            <br />
            and intelligence.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-intro">
            <p>
              I am Kainat Moin, an AI &amp; Machine Learning Engineer
              focused on building practical intelligent systems.
            </p>
          </div>

          <div className="about-text">
            <p>
              My work combines Python, Machine Learning, Deep Learning,
              Computer Vision and AI application development.
            </p>

            <p>
              I enjoy taking real-world problems and turning them into
              data-driven solutions through experimentation, research and
              continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="skills section" id="skills">
        <div className="section-heading skills-heading">
          <p className="eyebrow">02 — SKILLS &amp; EXPERTISE</p>

          <h2>
            Technical <em>capabilities.</em>
          </h2>

          <p className="section-intro">
            A combination of AI knowledge, development skills and practical
            problem solving.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-number">01</span>
            <div className="skill-symbol">✦</div>

            <h3>AI &amp; Machine Learning</h3>

            <p>
              Machine Learning, Deep Learning, model evaluation, data
              preprocessing and intelligent systems.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">02</span>
            <div className="skill-symbol">◉</div>

            <h3>Computer Vision</h3>

            <p>
              Image processing, CNNs, OpenCV, MediaPipe and intelligent
              visual applications.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">03</span>
            <div className="skill-symbol">&lt;/&gt;</div>

            <h3>Python</h3>

            <p>
              Python development for AI, automation, machine learning and
              data-driven applications.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">04</span>
            <div className="skill-symbol">⌘</div>

            <h3>Deep Learning</h3>

            <p>
              TensorFlow, Keras, CNN architectures, Transfer Learning and
              TensorFlow Lite.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">05</span>
            <div className="skill-symbol">⌁</div>

            <h3>Data &amp; Analytics</h3>

            <p>
              NumPy, Pandas, Matplotlib, feature engineering, model
              evaluation and data analysis.
            </p>
          </div>

          <div className="skill-card">
            <span className="skill-number">06</span>
            <div className="skill-symbol">+</div>

            <h3>Web Development</h3>

            <p>
              HTML, CSS, JavaScript, React, WordPress and AI-powered web
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section className="projects section" id="projects">
        <div className="projects-heading">
          <div>
            <p className="eyebrow">03 — SELECTED WORK</p>

            <h2>
              Projects <em>&amp;</em>
              <br />
              Experiments
            </h2>
          </div>

          <p className="projects-intro">
            A selection of technical work developed through learning,
            experimentation and real-world problem solving.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
              onClick={() => setActiveProject(project)}
            >
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <p className="eyebrow">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">{project.tech}</div>
              </div>

              <div className="project-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= PROJECT MODAL ================= */}

      {activeProject && (
        <motion.div
          className="project-modal"
          onClick={() => setActiveProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="project-modal-box"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project"
            >
              ×
            </button>

            <p className="eyebrow">{activeProject.category}</p>

            <h2>{activeProject.title}</h2>

            <p className="modal-description">
              {activeProject.details}
            </p>

            <p className="modal-tech">{activeProject.tech}</p>

            <div className="modal-links">
              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}

              {activeProject.demo && (
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* ================= EXPERIENCE ================= */}

      <section className="experience section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">04 — EXPERIENCE</p>

          <h2>
            Experience in <em>practice.</em>
          </h2>
        </div>

        <div className="experience-list">
          <div className="experience-item">
            <span className="experience-date">
              FEB 2025 — MAY 2025
            </span>

            <div>
              <h3>SEO &amp; Content Writer</h3>

              <p className="company">Ads-Expert</p>

              <p>
                Created data-driven SEO content to improve search rankings
                and engagement.
              </p>
            </div>
          </div>

          <div className="experience-item">
            <span className="experience-date">
              APR 2025 — JUN 2025
            </span>

            <div>
              <h3>Sales Executive</h3>

              <p className="company">Groath Digital</p>

              <p>
                Engaged clients through chat platforms to generate and
                convert leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section className="education section" id="education">
        <div className="section-heading">
          <p className="eyebrow">05 — EDUCATION</p>

          <h2>
            Learning is part of <em>the process.</em>
          </h2>
        </div>

        <div className="education-list">
          <div className="education-item">
            <span>2023 — PRESENT</span>

            <div>
              <h3>BS Artificial Intelligence</h3>

              <p>
                Dawood University of Engineering &amp; Technology, Karachi
              </p>

              <p>Semester 7 · Current CGPA: 3.49</p>
            </div>
          </div>

          <div className="education-item">
            <span>2023</span>

            <div>
              <h3>Intermediate — Pre-Engineering</h3>

              <p>
                BAMM PECHS Government Girls College, Karachi
              </p>

              <p>Grade: A</p>
            </div>
          </div>

          <div className="education-item">
            <span>EARLIER EDUCATION</span>

            <div>
              <h3>Matriculation</h3>

              <p>Matriculation / Secondary School Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}

      <section className="certificates section" id="certificates">
        <div className="section-heading">
          <p className="eyebrow">06 — CERTIFICATIONS</p>

          <h2>
            Learning beyond the <em>classroom.</em>
          </h2>

          <p className="section-intro">
            Professional certificates, training and participation
            achievements.
          </p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              className="certificate-card"
              key={certificate.title}
            >
              <div className="certificate-image">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                />
              </div>

              <div className="certificate-info">
                <h3>{certificate.title}</h3>

                <p>{certificate.organization}</p>

                <span>View certificate ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section className="contact section" id="contact">
        <div className="contact-content">
          <p className="eyebrow">07 — CONTACT</p>

          <h2>
            Let's build something
            <br />
            <em>intelligent.</em>
          </h2>

          <p className="contact-text">
            Interested in AI, Machine Learning, Computer Vision or
            technology-focused projects? Feel free to get in touch.
          </p>

          <a
            href="mailto:kainatmoin4@gmail.com"
            className="email-link"
          >
            kainatmoin4@gmail.com ↗
          </a>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/kainat-moin-7103b82a3/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/kainatmoin"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a href="/CV/Kainat Moin Resume.pdf" download>
            Download CV ↓
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <span>KAINAT MOIN</span>

        <span>AI &amp; MACHINE LEARNING ENGINEER</span>

        <span>© 2026</span>
      </footer>
    </main>
  );
}

export default App;