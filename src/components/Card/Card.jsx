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
      
    </div>
  );
};

export default Card;