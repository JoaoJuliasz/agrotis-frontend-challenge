import React, { useState } from 'react';
import { connect } from 'react-redux'
import Documents from '../Documents/Documents.component';
import { DisplayDocsContainer, EditableDocument, LoadMoreText, EmptyDocuments } from './DisplayDocs.styles'

const DisplayDocs = ({ filteredDocuments, documents }) => {
    const [loadMoreDocs, setloadMoreDocs] = useState({ loadMoreText: 'Carregar mais...', loadMoreSize: 2 })
    const { loadMoreText, loadMoreSize } = loadMoreDocs
    const handleClick = () => {
        loadMoreSize === 2 ?
            setloadMoreDocs({ loadMoreText: 'Carregar menos...', loadMoreSize: documents.size })
            :
            setloadMoreDocs({ loadMoreText: 'Carregar mais...', loadMoreSize: 2 })

    }
    return (
        <DisplayDocsContainer>
            {filteredDocuments.length > 0 ?
                <>
                    {filteredDocuments.slice(0, loadMoreSize).map((item) =>
                        item.name.toLowerCase() === 'andamento' ?
                            <EditableDocument to={`edit/${item.id}`}>
                                <Documents key={item.id} item={item} />
                            </EditableDocument>
                            :
                            <Documents key={item.id} item={item} />
                    )}
                    <LoadMoreText onClick={handleClick}>
                        <p>{loadMoreText}</p>
                    </LoadMoreText>
                </>
                :
                <EmptyDocuments>
                    <p>Nenhum Documento...</p>
                </EmptyDocuments>
            }
        </DisplayDocsContainer>
    );
};
const mapStateToProps = state => {
    return {
        documents: state.documents,
    }
}
export default connect(mapStateToProps)(DisplayDocs);