import styled from 'styled-components'

export const DocumentContainer = styled.div`
    display: flex;
    border: 1px solid;
    padding: 15px;
    border-radius: 6px;
    margin-bottom: 5px;
`

export const DocumentLabelContainer = styled.div`
    display: flex;
    width: 50%;
    text-align: left;
`

export const DocumentInfos = styled.p`
    margin: 0;
    font-weight: 600;
    padding: 0px 10px; 
`

export const DeleteDocumentSpan = styled.span`
    cursor: pointer;
    i {
        font-weight: 100
    }
`