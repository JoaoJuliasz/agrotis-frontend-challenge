import React, { useState } from 'react';
import { updateDocument } from '../redux/Documents/documents.actions'
import { connect } from 'react-redux'
import Board from '../Components/Board/Board.component';
import InputDocuments from '../Components/InputDocuments/InputDocuments.component';
import BoardHeader from '../Components/BoardHeader/BoardHeader.component';
const EditDocuments = ({ document, updateDocument }) => {
    const [changeDocs, setChangeDocs] = useState({ name: document.name, description: document.description })
    const { name, description } = changeDocs
    const { id } = document
    const handleChange = event => {
        const { name, value } = event.target
        setChangeDocs({ ...changeDocs, [name]: value })
    }
    const handleClick = () => {
        updateDocument({ name, description, id })
    }
    return (
        <>
            <div>
                <BoardHeader path='updateDocuments'
                    handleFunction={handleClick} element={{ name, description }} />
                <Board documents={<InputDocuments name={name}
                    description={description}
                    handleChange={handleChange} />}
                />
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        updateDocument: (name, description, id) => dispatch(updateDocument(name, description, id))
    }
}
export default connect(null, mapDispatchToProps)(EditDocuments);