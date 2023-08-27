import React from 'react'
import Square from './Square'
import { useState } from 'react';

const Board = () => {

    const [squares, setSquare] = useState(Array(9).fill(null));

    console.log(squares)

    const handleSquareClicked = (clickedPosition) => {
        setSquare((currentSquare) => {
            return currentSquare.map((squareValue, position) => {
                if (clickedPosition === position) {
                    return 'X';
                }
                return squareValue;
            })
        })
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