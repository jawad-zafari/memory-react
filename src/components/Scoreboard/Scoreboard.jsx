import Button from '../Button/Button.jsx'; 

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <p>Nombre de mouvements : <strong>{props.turns}</strong></p>
      
      <Button text="Nouvelle partie !" onClick={props.onNewGame} />

      {props.isWon === true ? (
        <div className="win-message">
        Félicitations! Vous avez gagné !        
        </div>
      ) : null}
    </div>
  );
};

export default Scoreboard;