import './styles.scss';
import Board from './Components/Board';
import { useState } from 'react';
import calculateWinner from './Winner';
import StatusMessage from './Components/StatusMessage';

function App() {

  const [squares, setSquare] = useState(Array(9).fill(null));

  const [isXnext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

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
      <StatusMessage winner={winner} isXnext={isXnext} squares={squares}/>
      <Board squares={squares} handleSquareClicked={handleSquareClicked} />
    </div>
  );
}

export default App;
