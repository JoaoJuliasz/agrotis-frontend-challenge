import React from 'react';
import { useSelector } from 'react-redux'
import { ToastMessageContainer, ToastMessageText, ToastMessageClose } from './ToastMessage.styles'
const ToastMessage = ({ onClick }) => {
    const toastMessage = useSelector(state => state.toastMessage)
    return (
        <div>
            {
                toastMessage ?
                    <ToastMessageContainer>
                        <ToastMessageText>Situação salva com sucesso</ToastMessageText>
                        <ToastMessageClose onClick={onClick}><i className="fas fa-times"></i></ToastMessageClose>
                    </ToastMessageContainer>
                    :
                    <></>
            }
        </div>
    );
};
export default ToastMessage;