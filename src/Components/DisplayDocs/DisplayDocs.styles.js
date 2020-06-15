import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DisplayDocsContainer = styled.div`
    padding: 20px;
    height: 90%;
    overflow: scroll;
`
export const EditableDocument = styled(Link)`
    text-decoration: none;
    color: #5d5c5c;
`
export const LoadMoreText = styled.div`
    padding-top: 10px;
    border-bottom: 1px solid;
    width: 12%;
    margin: auto;
    color: #0a4230;
    cursor: pointer;
    p{
        margin: 0
    }
`
export const EmptyDocuments = styled.div `
    display: flex;
    justify-content: center;
    padding: 15px;
    p{
        margin: 0
    }
`