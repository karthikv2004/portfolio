import "./About.css";

function About() {
  return (
    <section className="about-section container" id="about">
      
      {/* Top Main Card - Matches the "I am Professional..." block */}
      <div className="about-main-card">
        <div className="about-image-col">
          <img src="./public/image.png" alt="KARTHIK V" />
          <div className="floating-socials">
            <a href="https://github.com/sindums2004-droid" target="_blank" rel="noreferrer">GH</a>
            <a href="https://www.linkedin.com/in/sindu-m-s" target="_blank" rel="noreferrer">IN</a>
          </div>
        </div>

        <div className="about-text-col">
          <h2>I am a Full Stack Web Developer & AI Enthusiast</h2>
          
          <p>
            Hello! I'm KARTHIK V, an MCA student passionate about Full Stack Development, 
            Artificial Intelligence, Machine Learning, and Automation. I enjoy creating modern 
            websites, solving real-world problems, and building scalable software solutions.
          </p>
          
          <p>
            I am continuously learning new technologies and improving my programming skills to 
            build impactful digital experiences.
          </p>

          <div className="about-buttons">
            <button className="btn-primary">My Projects</button>
            <button className="btn-outline">Download CV</button>
          </div>
        </div>
      </div>

      {/* Skills Section - Matches the "Work Process" 2x2 Grid block */}
      <div className="skills-section">
        <div className="skills-header">
          <h2>Technical Skills</h2>
          <p>
            A breakdown of the tools and technologies I use to bring modern applications 
            and scalable backends to life.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>1. Frontend</h3>
            <p>HTML, CSS, JavaScript, React.js</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>2. Backend</h3>
            <p>Python, FastAPI, Node.js</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>3. Database</h3>
            <p>MySQL, PostgreSQL</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🛠️</div>
            <h3>4. Tools</h3>
            <p>Git, GitHub, VS Code</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;