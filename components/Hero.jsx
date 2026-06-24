import "./Home.css";

function Home() {
  return (
    <section className="hero-section container" id="home">
      <div className="hero-content">
        <h1>
          Hello, I'm <br />
          KARTHIK V
        </h1>
        
        <p className="hero-description">
          I'm an MCA Student and <strong>Full Stack Developer</strong> based in Bengaluru, India. 
          I strive to build immersive and beautiful web applications through carefully 
          crafted code, scalable Python backends, and user-centric React designs.
        </p>

        <a href="#contact" className="btn-primary">Say Hello!</a>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>MCA</h3>
            <p>Reva University</p>
          </div>
          <div className="stat-item">
            <h3>Full Stack</h3>
            <p>Developer</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Projects Built</p>
          </div>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-card">
          <img src="/photo.jpeg" alt="KARTHIK V" />
        </div>
      </div>
    </section>
  );
}

export default Home;