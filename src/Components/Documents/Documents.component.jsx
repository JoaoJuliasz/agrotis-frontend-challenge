import React from 'react';
import { connect } from 'react-redux'
import { deleteDocument } from '../../redux/Documents/documents.actions'

import { DocumentContainer, DocumentLabelContainer, DocumentInfos, DeleteDocumentSpan } from './Documents.styles'

const Documents = ({ item, deleteDocument }) => {

    const handleClick = id => {
        if (window.confirm('Are you sure you want to delete this document?')) {
            deleteDocument(id)
        }
    }
    return (
        <DocumentContainer key={item.id}>
            <DocumentLabelContainer>
                <label>Nome:</label>
                <DocumentInfos>{item.name}</DocumentInfos>
            </DocumentLabelContainer>
            <DocumentLabelContainer>
                <label>descriçao:</label>
                <DocumentInfos>{item.description}</DocumentInfos>
            </DocumentLabelContainer>
            <DeleteDocumentSpan onClick={() => handleClick(item.id)}><i className="fas fa-times"></i></DeleteDocumentSpan>
        </DocumentContainer>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        deleteDocument: (id) => dispatch(deleteDocument(id))
    }
}

export default connect(null, mapDispatchToProps)(Documents);