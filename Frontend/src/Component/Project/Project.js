import Card from "../UI/Card";
import ProjectCard from "../UI/ProjectCard";
import Title from "../UI/Title";
import "./Project.css";

const Project = () => {
  const Projects = [
    {
      id: 0,
      name: "Food-Ordering-website",
      imgUrl: "/Images/food-ordering-website.jpg",
      desc: "this is food ordering website where you can order you desire dishes",
      url: "https://github.com/mjsf1234/Flipr_Hackathon",
    },
    {
      id: 1,
      name: "Expense-Tracker",
      imgUrl: "/Images/expense-tracker.png",
      desc: "this application will keep the track of all your entered expense",
      url: "https://github.com/mjsf1234/Expense-Tracker",
    },
    {
      id: 2,
      name: "Online-booking-Sytem",
      imgUrl: "/images/online-booking.png",
      desc: "this is online booking system where you can book our prefered time slot and you will aloted that slot and will be charged accordingly",
      url: "https://github.com/mjsf1234/Online-Booking-System",
    },
    {
      id: 3,
      name: "Portfolio",
      imgUrl: "/Images/portfolio.png",
      desc: "This is my portfolio build on react and its show all my projects and skills thanks for visiting",
      url: "https://github.com/mjsf1234/Portfolio",
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
              link={e.url}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Project;
