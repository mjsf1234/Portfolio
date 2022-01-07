import "./Card.css";

const Card = (props) => {
  const classes = props.className + " card";
  console.log("classes " + classes);

  return (
    <div className={classes}>
      <div className="img">
        <img src={props.image} alt="logo" />
      </div>
      <h2>{props.name}</h2>
    </div>
  );
};
export default Card;
