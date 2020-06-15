import React from 'react';
import { AddItemContainer, AddItemIcon } from './AddItemButton.styles'
const AddItemButton = () => {
    return (
        <AddItemContainer>
            <AddItemIcon to='/create' >
                <i className="fas fa-plus"></i>
            </AddItemIcon>
        </AddItemContainer>
    );
};

export default AddItemButton;