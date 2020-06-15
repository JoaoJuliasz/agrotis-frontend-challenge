import React from 'react';
import {
    InputDocumentsPadding,
    InputDocumentsContainer,
    InputDocumentsLabel,
    InputDocumentsAreas,
    InputDocumentsInput,
    InputDocumentsSpan,
} from './InputDocuments.styles'

const InputDocuments = ({ name, description, handleChange, }) => {
    return (
        <InputDocumentsPadding>
            <InputDocumentsContainer>
                <InputDocumentsAreas Size='small'>
                    <InputDocumentsLabel >Nome* </InputDocumentsLabel>
                    <InputDocumentsInput type="text" name="name" value={name} onChange={handleChange} maxLength="20" />
                    <InputDocumentsSpan>{name.length}/20</InputDocumentsSpan>
                </InputDocumentsAreas>
                <InputDocumentsAreas Size='large' Space>
                    <InputDocumentsLabel>Descrição* </InputDocumentsLabel>
                    <InputDocumentsInput type="text" name="description" value={description} onChange={handleChange} maxLength="240" />
                    <InputDocumentsSpan>{description.length}/240</InputDocumentsSpan>
                </InputDocumentsAreas>
            </InputDocumentsContainer>
        </InputDocumentsPadding>
    );
};

export default InputDocuments;