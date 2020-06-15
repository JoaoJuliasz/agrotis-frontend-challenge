import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resetToastMessage, } from '../redux/Documents/documents.actions'
import DisplayDocs from '../Components/DisplayDocs/DisplayDocs.component';
import Board from '../Components/Board/Board.component';
import AddItemButton from '../Components/AddItemButton/AddItemButton.component';
import BoardHeader from '../Components/BoardHeader/BoardHeader.component';
import ToastMessage from '../Components/ToastMessage/ToastMessage.component';
const ReadDocuments = ({ documents, resetToastMessage, }) => {

    const [searchField, setSearchField] = useState('')

    useEffect(() => {
        setTimeout(() => {
            resetToastMessage()
        }, 3000)
    })

    const handleChange = event => {
        setSearchField(event.target.value)
    }

    const filteredDocuments = documents.filter(doc => doc.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
        <>
            <BoardHeader handleFunction={handleChange} element={searchField} />
            <Board documents={<DisplayDocs filteredDocuments={filteredDocuments} />} displayElement={<AddItemButton />} />
            <ToastMessage onClick={resetToastMessage}/>
        </>
    );
}

const mapStateToProps = state => {
    return {
        documents: state.documents,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        resetToastMessage: () => dispatch(resetToastMessage()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReadDocuments);