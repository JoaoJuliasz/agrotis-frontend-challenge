import React from 'react';
import {BoardContainer} from './Board.styles'
const Board = ({ documents, displayElement }) => {
    return (
        <BoardContainer>
            {documents}
            {displayElement ?? null}
        </BoardContainer>
    );
};

export default Board;