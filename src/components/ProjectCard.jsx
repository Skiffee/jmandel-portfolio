export default function ProjectCard({ title, date, image, tag }) {
  return (
    <div className="project-card">
      <span className="tag top-right">{tag}</span>
      <div className="project-content">
        <img src={image} alt={title} className="thumbnail" />
        <div className="details">
          <div className="title-date">
            <h3>{title}</h3>
            <small>{date}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
