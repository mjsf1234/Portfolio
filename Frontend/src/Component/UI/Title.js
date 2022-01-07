import React from "react";
import "./Title.css";

const Title = (props) => {
  const classes = "title";
  console.log(props.title);

  //   return <div className={classes}>{props.children}</div>;
  return (
    <div className={classes}>
      <h1 className="title-heading">{props.title}</h1>
    </div>
  );
};
export default Title;
