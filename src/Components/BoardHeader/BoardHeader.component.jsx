import React from 'react';

import {
    BoardHeaderContainer,
    BoardHeaderLeftElement,
    BoardHeaderRightElement,
    BoardHeaderInfomartion,
    BoardHeaderBackHome,
    BoardHeaderSaveDoc,
    BoardHeaderFailSaveDoc,
    BoardHeaderBackHomeText,
    SearchIcon,
    SearchFied,
} from './BoardHeader.styles'

const BoardHeader = ({ path, handleFunction, element }) => {
    if (path) {
        return (
            <BoardHeaderContainer>
                <BoardHeaderBackHome to="/">
                    <BoardHeaderLeftElement>
                        <i className="fas fa-chevron-left"></i>
                        <BoardHeaderInfomartion>Situação</BoardHeaderInfomartion>
                    </BoardHeaderLeftElement>
                </BoardHeaderBackHome>
                <BoardHeaderRightElement>
                    <BoardHeaderBackHome to="/">
                        <BoardHeaderBackHomeText>VOLTAR</BoardHeaderBackHomeText>
                    </BoardHeaderBackHome>
                    {element.name && element.description ?
                        <BoardHeaderSaveDoc to='/' onClick={handleFunction}>SALVAR</BoardHeaderSaveDoc>
                        : <BoardHeaderFailSaveDoc onClick={handleFunction}>SALVAR</BoardHeaderFailSaveDoc>
                    }
                </BoardHeaderRightElement>
            </BoardHeaderContainer>)
    }
    else {
        return (
            <BoardHeaderContainer>
                <BoardHeaderLeftElement>
                    <BoardHeaderInfomartion>Sistuaçoes de documento</BoardHeaderInfomartion>
                </BoardHeaderLeftElement>
                <BoardHeaderRightElement>
                    <SearchIcon><i className="fas fa-search"></i></SearchIcon>
                    <SearchFied type='search' onChange={handleFunction} value={element} placeholder="Pesquisar por nome..." />
                </BoardHeaderRightElement>
            </BoardHeaderContainer>
        );
    }
};

export default BoardHeader;