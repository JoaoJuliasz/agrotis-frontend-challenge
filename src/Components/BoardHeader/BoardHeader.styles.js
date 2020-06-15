import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BoardHeaderContainer = styled.div`
    padding: 10px;
    background: #145e43;
    display: flex;
    justify-content: space-between;
`
export const BoardHeaderLeftElement = styled.div`
    display: flex;
    color: #fff;
    font-size: 18px;
    padding: 10px; 
`
export const BoardHeaderRightElement = styled.div`
    display: flex;
    align-items: center;
`
export const BoardHeaderInfomartion = styled.p`
    margin: 0; 
    padding-left: 7px; 
`
export const BoardHeaderBackHome = styled(Link)`
    text-decoration: none;
`
export const BoardHeaderBackHomeText = styled.p`
    padding: 10px;
    color: #fff;
    margin: 0;
`
export const BoardHeaderSaveDoc = styled(Link)`
    text-decoration: none;
    padding: 10px 18px;
    background: #1b6a4c;
    border: 1px solid #75756e;
    color: #fff;
    text-decoration: none;
`
export const BoardHeaderFailSaveDoc = styled.p`
    margin: 0;
    color: #fff;
    padding: 10px 18px;
    background: #1b6a4c;
    border: 1px solid #75756e;
    cursor: pointer; 
`
export const SearchIcon = styled.span`
    padding: 5px 7px 8px;
    background: #fff;
    i {
        font-weight: 400
    }
`
export const SearchFied = styled.input`
    width: 250px;
    height: 31px;
    border: none;
    outline: none;
`