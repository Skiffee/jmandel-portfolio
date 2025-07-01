import './styles/App.css';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import BackgroundParticles from './components/BackgroundParticles';

import projects from './data/projects'; // 👈 this line

function App() {
  return (
    <>
      <div className="background-wrapper">
        <BackgroundParticles />
      </div>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <div className="content-block">
            <Hero />
            <h2 className="section-title">Latest</h2>
            <div className="projects">
{projects.map((project, index) => (
  <ProjectCard
    key={index}
    title={project.title}
    date={project.date}
    image={project.image}
    tag={project.tag}
    description={project.description}
  />
))}

            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
