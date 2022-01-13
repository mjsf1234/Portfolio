import ProjectCard from "../UI/ProjectCard";
import Title from "../UI/Title";
import "./Project.css";
import projects from "../Data/ProjectData";
import { Section, SectionTitle } from "../UI/Style";
import { GridContainer, BlogCard,Img, TitleContent, HeaderThree, CardInfo, Hr } from "./ProjectStyle";

const Project = () => {
  return (
    
    <Section> 
      <SectionTitle>
        Project
      </SectionTitle>

      <GridContainer>
       
      
      </GridContainer>
      // {/* <div className="projects-grid">
      //   {projects.map((e) => {
      //     return (
      //       <ProjectCard
      //         key={e.id}
      //         name={e.name}
      //         image={e.imgUrl}
      //         desc={e.desc}
      //         gitlink={e.githuburl}
      //         prolink={e.projecturl}
      //       />
      //     );
      //   })}
      // </div> */}
 </Section>
  );
};
export default Project;
