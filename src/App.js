import './styles.scss';
import Board from './Components/Board';
import { useState } from 'react';
import calculateWinner from './Winner';

function App() {

  const [squares, setSquare] = useState(Array(9).fill(null));

  const [isXnext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const nextPlayer =isXnext ? 'X':'0';

  const statusMessage = winner ? `Winner is ${winner}`:`Next player is ${nextPlayer}`;

  const handleSquareClicked = (clickedPosition) => {

      if (squares[clickedPosition] || winner) {
          return;
      }

      setSquare((currentSquare) => {
          return currentSquare.map((squareValue, position) => {
              if (clickedPosition === position) {
                  return isXnext?'X' : '0';
              }
              return squareValue;
          })
      });

      setIsXNext((currentIsnext)=> !currentIsnext);
  }


  return (
    <div className="app">
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClicked={handleSquareClicked} />
    </div>
  );
}

export default App;
