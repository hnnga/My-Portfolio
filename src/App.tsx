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
                    My name is Huỳnh Nga. I am a third-year Computer Science student. Through academic projects and research activities, I have gained hands-on experience in software development, 
                    particularly in web technologies, database management, and AI research. I am passionate about learning new technologies and contributing to impactful, user-focused solutions.
                    
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
                    Ho Chi Minh City University of Technology, Vietnam National University Ho Chi Minh City (HCMUT - BACH KHOA HCMC)
                  </h3>
                  <a href="https://hcmut.edu.vn/" className="link" >https://hcmut.edu.vn/ </a>
                  <p className="text-muted">Oct 2022 – Present | Computer Science, 3rd Year</p>
                  <p>GPA: 3.0/4.0 (7.5/10)</p>
                  <ul className="list">
                    <li><strong>Software Engineering</strong>: Agile methodologies, system modeling, use case and requirements analysis, software architecture design.</li>
                    <li><strong>Database Systems</strong>: Relational databases, SQL, normalization, indexing, query optimization.</li>
                    <li><strong>Operating Systems</strong>: Linux command-line operations, shell scripting, process & file management.</li>
                    <li><strong>Data Structures and Algorithms</strong>: Data structures, algorithm design, complexity analysis.</li>
                    <li><strong>Advanced Programming</strong>: Functional programming, higher-order functions, recursion.</li>
                  </ul>
                </div>
                <div className="education-item">
                  <h3 className="section-subtitle">
                    Experimental High School, Ho Chi Minh City University of Education (TRUNG HOC THUC HANH SU PHAM)
                  </h3>
                  <a href="http://trunghocthuchanhdhsp.edu.vn/" className="link" >http://trunghocthuchanhdhsp.edu.vn/</a>
                  
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
                  <a href="https://www.ura.hcmut.edu.vn/" className="link" >https://www.ura.hcmut.edu.vn/</a>
                  <p className="text-muted">May 2024 – Present</p>
                  <em>URA is a research group founded by Assoc. Prof. Quan Thanh Tho, the group focuses on AI research, covering both theoretical studies and practical applications in NLP, Computer Vision, Speech Processing, and Time Series data.</em>
                    <br></br>
                    Main roles:
                  <ul className="list">
                    <li>
                      Researched Diffusion Models for the Virtual Try-On project (see in <a href="#projects" className="link"> Projects</a>), aiming to generate realistic clothing try-on images by improving garment warping, texture preservation, and body alignment.
                    </li>
                    <li>Explored Large Language Models (LLMs).</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h3 className="section-subtitle">HCMC AI Challenge 2024 – Participant</h3>
                  <a href="https://aichallenge.hochiminhcity.gov.vn/" className="link" >https://aichallenge.hochiminhcity.gov.vn/</a>
                  
                  <p className="text-muted">Aug 2024 – Oct 2024</p>
                  <em>HCMC AI Challenge is a competition where participants develop AI algorithms to solve real-world problems for Ho Chi Minh City. The 2024 challenge focuses on event retrieval from videos.
                  </em>
                    <br></br>
                    Main roles:
                  <ul className="list">
                    <li>Worked in a team of 5 to develop event retrieval system using TransNet and OpenAI’s CLIP features.</li>
                    <li>Implemented OCR-based and text-prompt search functionalities.</li>
                    <li>Qualified to the final round.</li>
                  </ul>
                </div>
                <div className="experience-item">
                  <h3 className="section-subtitle">AI Summer School, HCMUT – Mentor</h3>
                  <p className="text-muted">Jul 2024</p>
                  <em>AI Summer School is a structured hackathon framework featuring interactive lectures and a guided competition to help high school students build LLM-powered applications within 24 hours.
                  </em>
                  <ul className="list">
                    <li>
                      Instructed high school students in building a healthcare-focused LLM by fine-tuning a pre-trained model using the <a href="https://openreview.net/forum?id=nZeVKeeFYf9" className="link" >Low-Rank Adaptation</a> technique, including dataset creation and model fine-tuning, as well as model deployment.
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
                  <em>Virtual try-on is a technology that enables users to visualize how garments fit onto a person’s image, 
                    enhancing the online shopping experience by generating realistic try-on results.</em>
                    <br></br>
                    Main roles:
                  <ul className="list">
                    <li>
                      Researched diffusion models, U-Net architectures, and attention mechanisms to improve virtual try-on model realism.
                    </li>
                    <li>Collaborated on developing an adaptive mask refinement mechanism and integrating it into other virtual try-on models, reducing computational complexity using attention-based U-Net while maintaining high-quality garment alignment and human feature preservation.
                    </li>
                    <li> Paper Auto-ARM: An Autonomous Adaptive Mask Refinement Mechanism for Enhancing
                        Naturalness in Virtual Try-On Models get accepted at <a href="https://cita.vku.udn.vn/" className="link" >CITA 2025</a>.
                    </li>
                  </ul>
                  <p><strong>Skills:</strong> Python, Git, Deep Learning, Computer Vision, Agile</p>
                </div>
                <div className="project-item">
                  <h3 className="section-subtitle">Student Smart Printing Service</h3>
                  <p className="text-muted">Sep 2024 – Dec 2024</p>
                    <a href="https://github.com/namhk4311/CO3001-SSPS.git" className="link" >View Source code</a>

                  <ul className="list">
                    <li>
                      Worked in a team of five for a Software Engineering course project at university to design and develop a smart printing service for HCMUT students, covering requirement analysis, system modeling, architecture design, and implementation.
                    </li>
                    <li>Built and deployed a web-based application, with my main role is developing frontend using ReactJs by implementing key features such as printer management and document printing.</li>
                  </ul>
                  <p><strong>Skills:</strong> ReactJs, TypeScript, CSS, Figma, git, Waterfall proccess.</p>
                  These are some UI pictures of this project:
                  <div className="skills-images">
                  <img
                    src="/images/print-dashboard.png"
                    alt="Skill Image 1"
                    className="skill-image"
                  />
                  <img
                    src="/images/print-print-properties.png"
                    alt="Skill Image 2"
                    className="skill-image"
                  />
                  <img
                    src="/images/print-manage-printer.png"
                    alt="Skill Image 2"
                    className="skill-image"
                  />
                </div>


                </div>
                <div className="project-item">
                  <h3 className="section-subtitle">Hotpot Restaurant Database Management System</h3>
                  <p className="text-muted">Feb 2024 – May 2024</p>
                  <ul className="list">
                    <li>
                      Worked in a team of four for a Database System course project at university to design an enhanced entity relationship diagram and relational database schema for a hotpot restaurant management system.
                    </li>
                    <li>Developed and implemented the database using MySQL.</li>
                  </ul>
                  <p><strong>Skills:</strong> MySQL, database design, group-working.</p>
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
                    <li>DOM Manipulation: ReactJs</li>
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
                  Linkedin: <a href="https://www.linkedin.com/in/nga-huynh-316928328/" className="link">Nga Huynh</a>
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
