import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { connect } from 'react-redux'
import ReadDocuments from '../Pages/ReadDocuments.page';
import CreateDocuments from '../Pages/CreateDocuments.page';
import EditDocuments from '../Pages/EditDocuments.page';

const Index = ({ documents }) => {
    const renderDocs = (routerProps) => {
        let docId = routerProps.match.params.id;
        let foundDoc = documents.find(doc => doc.id == docId);
        return foundDoc ? <EditDocuments document={foundDoc} /> : null
    }
    return (
        <Switch>
            <Route exact path="/" component={() => <ReadDocuments />} />
            <Route path="/create" component={() => <CreateDocuments />} />
            <Route path='/edit/:id' render={routerProps => renderDocs(routerProps)} />
        </Switch>
    );
}

const mapStateToProps = state => {
    return {
        documents: state.documents
    }
}

export default connect(mapStateToProps)(Index);