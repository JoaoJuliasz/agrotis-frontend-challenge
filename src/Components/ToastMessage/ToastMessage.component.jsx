import React from 'react';
import { connect } from 'react-redux'
import { ToastMessageContainer, ToastMessageText, ToastMessageClose } from './ToastMessage.styles'
const ToastMessage = ({ toastMessage, onClick }) => {
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

const mapStateToProps = state => {
    return {
        toastMessage: state.toastMessage,
    }
}

export default connect(mapStateToProps)(ToastMessage);