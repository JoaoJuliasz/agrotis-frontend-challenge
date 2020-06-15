import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const HeaderContainer = styled.div`
    border-bottom: 1px solid;
    text-align: left;
    background: #fff; 
`
export const HeaderImg = styled(Link)` 
    img {
    height: 50px;
    padding-left: 20px;
    }
`