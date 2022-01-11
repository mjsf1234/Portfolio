import ProjectCard from "../UI/ProjectCard";
import Title from "../UI/Title";
import "./Project.css";
import projects from "../Data/ProjectData";

const Project = () => {
  return (
    <div className="projects-main" id="projects">
      <Title title="Projects" />
      <div className="projects-grid">
        {projects.map((e) => {
          return (
            <ProjectCard
              key={e.id}
              name={e.name}
              image={e.imgUrl}
              desc={e.desc}
              gitlink={e.githuburl}
              prolink={e.projecturl}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Project;
