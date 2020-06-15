import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AddItemContainer = styled.div`
    position: absolute;
    right: 35px;
    bottom: -15px;
    background: #b65e08;
    border-radius: 50%;
    padding: 5px 12px;
    font-size: 35px ;
`
export const AddItemIcon = styled(Link)`
    text-decoration: none;
    color: #fff;
`