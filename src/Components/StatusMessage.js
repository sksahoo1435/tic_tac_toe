import React from "react";

const StatusMessage = ({ winner, gamingBoard,checkMovesleft }) => {
    const { squares, isXnext } = gamingBoard;
    const noMovesLeft = squares.every((squarevalue) => squarevalue !== null);

    const nextPlayer = isXnext ? "X" : "0";

    checkMovesleft(noMovesLeft)

    const renderStatusMessage = () => {
        if (winner) {
            return (
                <>
                    Winner is
                    <span className={winner === "X" ? "text-green" : "text-orange"}>
                        {winner}
                    </span>
                </>
            );
        }
        if (!winner && noMovesLeft) {
            return (
                <>
                    <span className="text-orange">0</span> and{" "}
                    <span className="text-green">X</span> tied
                </>
            );
        }
        if (!winner && !noMovesLeft) {
            return (
                <>
                    Next Player is
                    <span className={isXnext ? "text-green" : "text-orange"}>
                        {nextPlayer}
                    </span>
                </>
            );
        }
        return null;
    };

    return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
