import React from 'react';
import { EmptyMessageContainer, EmptyMessageText } from './EmptyMessage.styles'

const EmptyMessage = ({ emptyInputElements }) => {
    return (
        <>
            {emptyInputElements ?
                <EmptyMessageContainer>
                    <EmptyMessageText>Please, fill the items!!</EmptyMessageText>
                </EmptyMessageContainer>
                : <></>}
        </>
    );
};

export default EmptyMessage;