// app/about/page.tsx
import { FaReact, FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { BsFillAwardFill } from 'react-icons/bs';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { FiCoffee } from 'react-icons/fi';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">👋 About Me</h1>
      <section className="intro">
        <p>
          Hello, I'm <strong>John Doe</strong>! I'm a passionate <span role="img" aria-label="developer">💻</span> and a lifelong learner.
          Currently, I'm exploring the world of web development with Next.js, React, and TypeScript. 
        </p>
        <p>
          I love building creative and functional websites while improving my coding skills every day. Whether it's front-end or full-stack development, 
          I'm always ready to dive deep into any tech stack.
        </p>
      </section>

      <section className="skills">
        <h2>🛠️ My Skills</h2>
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
          <div className="skill-item">
            <BsFillAwardFill size={40} />
            <p>Web Design</p>
          </div>
        </div>
      </section>

      <section className="hobbies">
        <h2>🌟 Hobbies</h2>
        <ul>
          <li><FiCoffee size={25} /> Coffee enthusiast ☕</li>
          <li>Music lover 🎶 (always listening to indie and lo-fi beats)</li>
          <li>Traveling ✈️ (exploring new places and cultures)</li>
        </ul>
      </section>

      <section className="contact">
        <h2>📬 Get in Touch</h2>
        <p>
          I'm always open to discussing new projects, ideas, or collaborations. Feel free to reach out!
        </p>
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
    </div>
  );
};

export default About;
