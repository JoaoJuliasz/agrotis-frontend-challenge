import styled from 'styled-components'

export const ToastMessageContainer = styled.div`
    color: #fff;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 360px;
    margin: auto;
    height: 60px;
    text-align: center;
    vertical-align: middle;
    line-height: 64px;
    background: #009d0e;
    display: flex;
    justify-content: space-between;
`
export const ToastMessageText = styled.p`
    margin: 0 10px;
`
export const ToastMessageClose = styled.span`
    margin: 0 10px;
    cursor: pointer;
    fontSize: 25px;
    i {
        font-weight: 100
    }
`