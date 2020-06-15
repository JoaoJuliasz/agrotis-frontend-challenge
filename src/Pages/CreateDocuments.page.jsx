import React, { useState } from 'react';
import { connect } from 'react-redux'
import { createDocument, resetEmptyFieldsMessage } from '../redux/Documents/documents.actions'
import Board from '../Components/Board/Board.component'
import InputDocuments from '../Components/InputDocuments/InputDocuments.component';
import EmptyMessage from '../Components/EmptyMessage/EmptyMessage.component';
import BoardHeader from '../Components/BoardHeader/BoardHeader.component';

const CreateDocuments = ({ documentsLength, createDocument, resetEmptyFieldsMessage, emptyInputElements }) => {
    const [documentValues, setDocumentValues] = useState({ name: '', description: '', id: documentsLength })
    const { name, description, id } = documentValues

    const handleChange = event => {
        const { value, name } = event.target
        setDocumentValues({ ...documentValues, [name]: value })
    }
    const handleClick = () => {
        if (name && description) {
            createDocument({ name, description, id })
        } else {
            resetEmptyFieldsMessage()
        }
    }
    return (
        <>
            <BoardHeader path='updateDocuments' handleFunction={handleClick} element={{name, description}}/>
        
            <Board
                documents={<InputDocuments name={name}
                    description={description}
                    handleChange={handleChange} />}
                displayElement={<EmptyMessage emptyInputElements={emptyInputElements} />}
            />
        </>
    )
}
const mapStateToProps = state => {
    return {
        documentsLength: state.documents.length,
        emptyInputElements: state.emptyInputElements,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createDocument: (name, description, id) => dispatch(createDocument(name, description, id)),
        resetEmptyFieldsMessage: () => dispatch(resetEmptyFieldsMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDocuments);