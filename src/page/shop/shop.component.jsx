import React from 'react';
import './shop.component.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.action';
import CollectionContainer from '../collection/collection.container';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
class Shop extends React.Component {
    state = {
        isLoading: true
    }

    componentDidMount() {
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync();
    }

    render() {
        const { match } = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapDispatchToProps)(Shop);