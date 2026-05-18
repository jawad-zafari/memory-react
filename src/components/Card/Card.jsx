import './Card.css';

const Card = (props) => {
  
  const handleClick = () => {
    if (props.isClickable === true) {
      props.onClick();
    }
  };

  let innerClass = "card-inner";
  if (props.isFlipped === true) {
    innerClass = "card-inner flipped";
  }

  let pointerStyle = "auto";
  let cursorStyle = "pointer";
  if (props.isClickable === false) {
     pointerStyle = "none";
     cursorStyle = "default";
  }

  return (
    <div
      className="card"
      onClick={handleClick}
      style={{ pointerEvents: pointerStyle, cursor: cursorStyle }}
    >
      <div className={innerClass}>
        <div className="card-back">
          <img src={props.backImage} className="back-img" alt="back" />
        </div>
        <div className="card-front">
          <img src={props.card.image} alt="front" />
        </div>
      </div>
      
      
    </div>
  );
};

export default Card;