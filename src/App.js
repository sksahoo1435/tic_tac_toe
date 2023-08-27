import './styles.scss';
import Board from './Components/Board';
import { useState } from 'react';
import calculateWinner from './Winner';
import StatusMessage from './Components/StatusMessage';
import History from './Components/History';

const NEW_GAME =[{ squares: Array(9).fill(null), isXnext: false }]

function App() {

  const [histories, setHistory] = useState([{ squares: Array(9).fill(null), isXnext: false }])

  const [currentMove, setCurrentMove] = useState(0);

  const [gameDraw,setGameDraw] = useState(false);

  const gamingBoard = histories[currentMove]

  const {winner,winningSquares} = calculateWinner(gamingBoard.squares);

  console.log({ histories, currentMove })

  const handleSquareClicked = (clickedPosition) => {

    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory((currentHistory) => {

      const isTraversing = currentMove + 1 !== currentHistory.length;

      const latestGamingstate = isTraversing ? currentHistory[currentMove] : histories[histories.length - 1];

      const nextGamingSate = latestGamingstate.squares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return latestGamingstate.isXnext ? 'X' : '0';
        }
        return squareValue;
      });

      const base = isTraversing ? currentHistory.slice(0, currentHistory.indexOf(latestGamingstate) + 1) : currentHistory

      return base.concat({
        squares: nextGamingSate,
        isXnext: !latestGamingstate.isXnext
      })

    });
    setCurrentMove(move => move + 1)
  }

  const moveTo = (move) => {
    setCurrentMove(move)
  }

  const onNewGameStart =()=>{
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  const checkMovesleft =(e)=>{
    setGameDraw(e)
  }


  return (
    <div className="app">

      <h1>TIC <span className='text-green'>TAC</span> TOE</h1>

      <StatusMessage winner={winner} gamingBoard={gamingBoard}  checkMovesleft={(e)=> checkMovesleft(e)}/>
      <Board squares={gamingBoard.squares} winningSquares={winningSquares}
       handleSquareClicked={handleSquareClicked} />
      
      <button type='button' onClick={onNewGameStart}
       className={`btn-reset ${winner || gameDraw ? 'active':''}`}>Start new game</button>

      <h2>Current game history</h2>
      <History history={histories} move={moveTo} currentMove={currentMove} />

      <div className='bg-balls'/>

    </div>
  );
}

export default App;
