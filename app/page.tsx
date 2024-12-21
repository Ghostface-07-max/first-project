// app/page.tsx
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { AiFillMail } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Website! 👋</h1>
          <p>Your journey into the world of web development starts here.</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer, exploring technologies like <span>React</span> and <span>Next.js</span>. Let's build something amazing together!
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <FaReact size={40} />
            <p>React</p>
          </div>
          <div className="skill-item">
            <SiNextdotjs size={40} />
            <p>Next.js</p>
          </div>
          <div className="skill-item">
            <SiTypescript size={40} />
            <p>TypeScript</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Let's Connect</h2>
        <div className="contact-links">
          <a href="mailto:johndoe@example.com" target="_blank" rel="noopener noreferrer">
            <AiFillMail size={30} /> Email
          </a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} /> GitHub
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} /> LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2024 John Doe - All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
