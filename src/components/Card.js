const Card = (props) => {
  return (
    <div className = "card mb-3" >
      <div className="card-body">
        {props.id} , {props.name}
      </div>
    </div>
  );
};

export default Card;