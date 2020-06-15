import styled from 'styled-components'

export const InputDocumentsPadding = styled.div`
    padding: 20px;
`
export const InputDocumentsContainer = styled.div`
    display: flex;
    padding: 15px;
    border-radius: 6px;
    margin-bottom: 5px; 
`
export const InputDocumentsAreas = styled.div`
    width: ${({ Size }) =>
        Size === 'small' && '30%' || Size === 'large' && '70%'
    };
    display: flex;
    flex-direction: column; 
    padding-left: ${({ Space }) =>
        Space ? '10px' : ''
    };
`

export const InputDocumentsLabel = styled.label`
font-size: 10px;
text-align: left;
`
export const InputDocumentsInput = styled.input`
border: none;
border-bottom: 1px solid;
outline: none;
`
export const InputDocumentsSpan = styled.span`
text-align: right;
font-size: 12px;
padding-top: 5px;
`