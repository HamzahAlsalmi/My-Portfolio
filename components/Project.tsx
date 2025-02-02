interface ProjectProps {
  title: string;
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  imageUrl,
  liveUrl,
  repoUrl,
}) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  );
};

export default Project;
