import React from 'react'

const Square = ({ value, onClick, iswinningSquare }) => {

    const nonWinning = value === 'X' ? 'text-green' : 'text-orange';
    const winningcolor = iswinningSquare ? 'winning' : '';
    return (
        <button type='button' className={`square ${nonWinning} ${winningcolor}`} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square