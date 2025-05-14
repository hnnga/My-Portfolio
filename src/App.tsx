import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="app-container">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="main-content">
          <Section
            id="about"
            title="About Me"
            content={
              <div className="about-section">
                <img
                  src="/images/myself.png"
                  alt="Huỳnh Nga"
                  className="profile-image"
                />
                <div className="section-content">
                  <p>
                    I am Huynh Nga, a third-year Computer Science student at Ho Chi Minh City University of Technology (HCMUT). With a passion for frontend development, I enjoy crafting intuitive user experiences and visually appealing interfaces. My experience spans web technologies, database management, and AI research, particularly in diffusion models and large language models.
                  </p>
                  <ul className="list">
                    <li><strong>GPA</strong>: 3.0/4.0 (7.5/10)</li>
                    <li><strong>IELTS</strong>: 6.5 (May 2022)</li>
                    <li><strong>Languages</strong>: Vietnamese (Native), English</li>
                  </ul>
                </div>
              </div>
            }
          />
          <Section
            id="education"
            title="Education"
            content={
              <div className="section-content">
                <div className="education-item">
                  <h3 className="section-subtitle">
                    Ho Chi Minh City University of Technology (HCMUT)
                  </h3>
                  <p className="text-muted">Oct 2022 – Present | Computer Science, 3rd Year</p>
                  <p>GPA: 3.0/4.0 (7.5/10)</p>
                  <p>
                    Courses: Software Engineering, Database Systems, Operating Systems, Data Structures and Algorithms, Advanced Programming
                  </p>
                </div>
                <div className="education-item">
                  <h3 className="section-subtitle">
                    Experimental High School, HCMC University of Education
                  </h3>
                  <p className="text-muted">Aug 2019 – May 2022</p>
                  <p>GPA: 9.1/10</p>
                </div>
              </div>
            }
          />
          <Section
            id="experience"
            title="Experience"
            content={
              <div className="section-content">
                <div className="experience-item">
                  <h3 className="section-subtitle">
                    Unlimited Research Group of AI (URA), HCMUT – Member
                  </h3>
                  <p className="text-muted">May 2024 – Present</p>
                  <ul className="list">
                    <li>
                      Researched Diffusion Models for Virtual Try-On project, improving garment warping and body alignment.
                    </li>
                    <li>Explored Large Language Models (LLMs).</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h3 className="section-subtitle">HCMC AI Challenge 2024 – Participant</h3>
                  <p className="text-muted">Aug 2024 – Oct 2024</p>
                  <ul className="list">
                    <li>Developed event retrieval system using TransNet and OpenAI’s CLIP features.</li>
                    <li>Implemented OCR-based and text-prompt search functionalities.</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h3 className="section-subtitle">AI Summer School, HCMUT – Mentor</h3>
                  <p className="text-muted">Jul 2024</p>
                  <ul className="list">
                    <li>
                      Guided high school students in fine-tuning LLMs using Low-Rank Adaptation for healthcare applications.
                    </li>
                  </ul>
                </div>
              </div>
            }
          />
          <Section
            id="projects"
            title="Projects"
            content={
              <div className="section-content">
                <div className="project-item">
                  <h3 className="section-subtitle">
                    Adaptive Mask Refinement for Virtual Try-On Models
                  </h3>
                  <p className="text-muted">Oct 2024 – Feb 2025</p>
                  <p>
                    Developed an adaptive mask refinement mechanism using diffusion models and attention-based U-Net to enhance realism in virtual try-on systems.
                  </p>
                  <p>Skills: Python, Git, Deep Learning, Computer Vision, Agile</p>
                </div>
                <div className="project-item">
                  <h3 className="section-subtitle">Student Smart Printing Service</h3>
                  <p className="text-muted">Sep 2024 – Dec 2024</p>
                  <p>
                    Designed and developed a web-based printing service for HCMUT students, focusing on frontend development with ReactJs.
                  </p>
                  <p>Skills: ReactJs, TypeScript, CSS, Figma, Waterfall</p>
                </div>
                <div className="project-item">
                  <h3 className="section-subtitle">Hotpot Restaurant Database Management System</h3>
                  <p className="text-muted">Feb 2024 – May 2024</p>
                  <p>
                    Designed and implemented a relational database schema for a hotpot restaurant using MySQL.
                  </p>
                  <p>Skills: MySQL, Database Design</p>
                </div>
              </div>
            }
          />
          <Section
            id="skills"
            title="Skills"
            content={
              <div className="skills-grid">
                <div>
                  <h3 className="section-subtitle">Technical Skills</h3>
                  <ul className="list">
                    <li>Programming: Python, TypeScript, C++, CSS, SQL</li>
                    <li>Frontend: ReactJs, DOM Manipulation</li>
                    <li>Database: MySQL, Database Design</li>
                    <li>Architecture: Functional Programming, OOP, Design Patterns</li>
                    <li>Tools: Git, Visual Studio Code, Figma</li>
                    <li>Processes: Agile, Waterfall</li>
                    <li>OS: Windows, Linux</li>
                  </ul>
                </div>
                <div>
                  <h3 className="section-subtitle">Soft Skills</h3>
                  <ul className="list">
                    <li>Communication</li>
                    <li>Presentation</li>
                    <li>Teamwork</li>
                    <li>Self-learning</li>
                  </ul>
                </div>
              </div>
            }
          />
          <Section
            id="contact"
            title="Contact"
            content={
              <div className="section-content">
                <p>Email: <a href="mailto:huynhnga9124@gmail.com" className="link">huynhnga9124@gmail.com</a></p>
                <p>Phone: (+84) 932 071 394</p>
                <p>
                  Connect with me: <a href="https://www.linkedin.com/in/huynh-nga" className="link">LinkedIn</a>
                </p>
              </div>
            }
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
