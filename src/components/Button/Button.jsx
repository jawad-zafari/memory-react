const Button = (props) => {
  return (
    <button className="game-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;