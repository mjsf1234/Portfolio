import "./Tools.css";
import React from "react";
import Title from "../UI/Title";
import Card from "../UI/Card";

export const Tools = () => {
  const tools = [];
  return (
    <div className="tools-main" id="tools">
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
