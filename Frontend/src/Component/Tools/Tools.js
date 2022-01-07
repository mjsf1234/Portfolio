import "./Tools.css";
import React from "react";
import Title from "../UI/Title";
import Card from "../UI/Card";

export const Tools = () => {
  const tools = [
    {
      id: 0,
      name: "Github",
      imgUrl: "/Images/github.png",
    },
    {
      id: 1,
      name: "Heroku",
      imgUrl: "/Images/heroku.png",
    },
    {
      id: 2,
      name: "test",
      imgUrl: "",
    },
  ];
  return (
    <div className="tools-main">
      <Title title="Tools" />
      {/* <h1 className="tools-title">Tools</h1>
      </Title> */}
      <div className="tools-grid">
        {tools.map((e) => {
          return <Card key={e.id} name={e.name} image={e.imgUrl} />;
        })}
      </div>
    </div>
  );
};
export default Tools;
