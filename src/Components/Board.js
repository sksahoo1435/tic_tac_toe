import React from 'react'
import Square from './Square'
// import { useState } from 'react';

const Board = ({squares,handleSquareClicked,winningSquares}) => {

    const renderSquares = (position) => {
        
        const iswinningSquare = winningSquares.includes(position);

        return <Square
            value={squares[position]}
            onClick={() => handleSquareClicked(position)}
            iswinningSquare={iswinningSquare}
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