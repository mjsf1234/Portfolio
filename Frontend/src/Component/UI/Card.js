import "./Card.css";

const Card = (props) => {
  const classes = props.className + " card";
  console.log("classes " + classes);

  return (
    <div className={classes}>
      <div className="card-img">
        <img src={props.image} alt="logo" />
      </div>
      <span className="card-name">{props.name}</span>
    </div>
  );
};
export default Card;
