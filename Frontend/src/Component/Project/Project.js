import ProjectCard from "../UI/ProjectCard";
import Title from "../UI/Title";
import "./Project.css";
import projects from "../Data/ProjectData";
import { Section, SectionTitle ,SectionDivider} from "../UI/Style";
import { GridContainer, BlogCard,Img, TitleContent, HeaderThree, CardInfo, Hr } from "./ProjectStyle";

const Project = () => {
  return (
    < Section id="projects">
      <Title title="Projects"/>
       <GridContainer >
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
      </GridContainer>
      </Section>

      );
};
export default Project;
