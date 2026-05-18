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

};

export default Card;