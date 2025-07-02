import { FaHome, FaBriefcase, FaPenNib, FaEnvelope, FaUser, FaProjectDiagram, FaGithub } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa6';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
        <div className="profile-info">
          <strong>Justin Mandel</strong>
          <small>jmandel.dev@gmail.com</small>
        </div>
      </div>

      <nav className="nav">
        <a href="#"><FaHome /> Home</a>
        <a href="#"><FaUser /> About / Resume</a>
        <a href="#"><FaBriefcase /> Work</a>
        <a href="#"><FaProjectDiagram /> Projects</a>
        <a href="#"><FaPenNib /> Blog</a>
        <a href="#"><FaGamepad /> Esports</a>
        <a href="#"><FaEnvelope /> Contact</a>
      </nav>

      <div className="follow-section">
        <p className="nav-label">connect</p>
       <a href="https://www.linkedin.com/in/justin-mandel" target="_blank" rel="noopener noreferrer">
  <FaLinkedin /> LinkedIn
</a>

<a href="https://github.com/skiffee" target="_blank" rel="noopener noreferrer">
  <FaGithub /> GitHub
</a>

      </div>
    </aside>
  );
}
