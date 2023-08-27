import React from 'react'
import Square from './Square'
import { useState } from 'react';

const Board = () => {

    const [squares, setSquare] = useState(Array(9).fill(null));

    const [isXnext, setIsXNext] = useState(false);

    const handleSquareClicked = (clickedPosition) => {

        if (squares[clickedPosition]) {
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

    const renderSquares = (position) => {
        return <Square
            value={squares[position]}
            onClick={() => handleSquareClicked(position)}
        />
    }

    return (
        <div className='board'>

            <div className='board-row'>
                {renderSquares(0)}
                {renderSquares(1)}
                {renderSquares(2)}

            </div>
            <div className='board-row'>
                {renderSquares(3)}
                {renderSquares(4)}
                {renderSquares(5)}

            </div>
            <div className='board-row'>
                {renderSquares(6)}
                {renderSquares(7)}
                {renderSquares(8)}

            </div>
        </div>
    )
}

export default Board