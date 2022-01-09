import Card from "../UI/Card";
import ProjectCard from "../UI/ProjectCard";
import Title from "../UI/Title";
import "./Project.css";

const Project = () => {
  const Projects = [
    {
      id: 0,
      name: "Food Ordering Website",
      imgUrl: "/Images/food-ordering-website.jpg",
      desc: "This is food ordering website ",
      githuburl: "https://github.com/mjsf1234/Flipr_Hackathon",
      projecturl: "",
    },
    {
      id: 1,
      name: "Expense Tracker",
      imgUrl: "/Images/expense-tracker.png",
      desc: "This application will keep the track of all your entered expense",
      githuburl: "https://github.com/mjsf1234/Expense-Trackers",
      projecturl: "https://mjsf1234.github.io/Expense-Trackers/",
    },
    {
      id: 2,
      name: "Online Booking Sytem",
      imgUrl: "/images/online-booking.png",
      desc: "This is online booking system where you can book our prefered time slot and you will aloted that slot and will be charged accordingly",
      githuburl: "https://github.com/mjsf1234/Online-Booking-System",
      projecturl: "",
    },
    {
      id: 3,
      name: "Portfolio",
      imgUrl: "/Images/portfolio.png",
      desc: "This is my portfolio build on react and its show all my projects and skills thanks for visiting",
      githuburl: "https://github.com/mjsf1234/Portfolio",
      projecturl: "",
    },
  ];

  return (
    <div className="projects-main">
      <Title title="Projects" />
      <div className="projects-grid">
        {Projects.map((e) => {
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
