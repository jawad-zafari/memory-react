import { useState, useEffect } from 'react';
import Card from '../Card/Card';

import backImage from '../../assets/back.jpg';
import card1 from '../../assets/card1.jpg';
import card2 from '../../assets/card2.jpg';
import card3 from '../../assets/card3.jpg';
import card4 from '../../assets/card4.jpg';
import card5 from '../../assets/card5.jpg';
import card6 from '../../assets/card6.jpg';
import card7 from '../../assets/card7.jpg';
import card8 from '../../assets/card8.jpg';
import card9 from '../../assets/card9.jpg';
import card10 from '../../assets/card10.jpg';
import card11 from '../../assets/card11.jpg';
import card12 from '../../assets/card12.jpg';

const cardImages = [
  { id: 1, image: card1 },
  { id: 2, image: card2 },
  { id: 3, image: card3 },
  { id: 4, image: card4 },
  { id: 5, image: card5 },
  { id: 6, image: card6 },
  { id: 7, image: card7 },
  { id: 8, image: card8 },
  { id: 9, image: card9 },
  { id: 10, image: card10 },
  { id: 11, image: card11 },
  { id: 12, image: card12 },
];

const Game = (props) => {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [isComparing, setIsComparing] = useState(false);

  const shuffleCards = () => {
    let deck = [];

    for (let i = 0; i < 12; i++) {
      let currentImage = cardImages[i];

      deck.push({
        image: currentImage.image,
        pairId: currentImage.id,
        uniqueId: Math.random(), 
        isMatched: false
      });

      deck.push({
        image: currentImage.image,
        pairId: currentImage.id,
        uniqueId: Math.random() + 1,
        isMatched: false
      });
    }

    deck.sort(() => 0.5 - Math.random());

    setCards(deck);
    setChoiceOne(null);
    setChoiceTwo(null);
    props.setTurns(0); 
    setIsComparing(false);
  };

  const handleChoice = (selectedCard) => {
    if (isComparing === true) { return; }
    if (selectedCard.isMatched === true) { return; }
    if (selectedCard === choiceOne) { return; }
    if (selectedCard === choiceTwo) { return; }

    if (choiceOne === null) {
      setChoiceOne(selectedCard);
    } else if (choiceTwo === null) {
      setChoiceTwo(selectedCard);
      setIsComparing(true); 
    }
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setIsComparing(false);
    props.setTurns(props.turns + 1);
  };

  useEffect(() => {
    if (choiceOne !== null && choiceTwo !== null) {
      
      if (choiceOne.pairId === choiceTwo.pairId) {
        
        let updatedCards = cards.map((card) => {
          if (card.uniqueId === choiceOne.uniqueId || card.uniqueId === choiceTwo.uniqueId) {
            return {
              image: card.image,
              pairId: card.pairId,
              uniqueId: card.uniqueId,
              isMatched: true 
            };
          } else {
            return card;
          }
        });

        setCards(updatedCards);
        resetTurn();

      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (cards.length > 0) {
      let allMatched = true;
      for (let i = 0; i < cards.length; i++) {
        if (cards[i].isMatched === false) {
          allMatched = false;
        }
      }
      props.setIsWon(allMatched);
    }
  }, [cards]);

  useEffect(() => {
    shuffleCards();
  }, []);

};

export default Game;