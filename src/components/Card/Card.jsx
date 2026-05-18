import './Card.css';

const Card = (props) => {
  
  const handleClick = () => {
    if (props.isClickable === true) {
      props.onClick();
    }
  };

};

export default Card;