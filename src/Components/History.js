import React from 'react'

const History = ({ history, move,currentMove }) => {
    return (
        <div className='history-wrapper'>
            <ul className='history'>
                {
                    history.map((ele, index) =>
                        <li key={index}>
                            <button type='button' className={`btn-move ${currentMove === index ? 'active':''}`}
                                onClick={() => move(index)}>
                                {index === 0 ? 'New Game' : `Go to move ${index}`}
                            </button>

                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default History