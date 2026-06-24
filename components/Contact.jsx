import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-header">
        <h2>Let's Connect</h2>
        <p>Feel free to reach out for collaborations, opportunities, or just a quick chat.</p>
      </div>

      <div className="contact-grid">
        
        {/* Left Column: Info */}
        <div className="contact-info-col">
          <h3>Get in Touch</h3>
          <p className="contact-subtext">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>kartikkarthik183@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📱</div>
            <div>
              <h4>Phone</h4>
              <p>+91 7483916802</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h4>Location</h4>
              <p>Bengaluru, India</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/sindums2004-droid" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/sindu-m-s" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="contact-form-col">
          <form className="contact-form">
            <div className="input-group">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" placeholder="Job Opportunity" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Write your message here..." required></textarea>
            </div>

            <button type="submit" className="btn-primary form-submit-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;