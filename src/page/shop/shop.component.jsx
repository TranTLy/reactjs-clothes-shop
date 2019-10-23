import React from 'react';
import './shop.component.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spiner/with-spiner.component';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);
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
        const { isCollecitonFetching, isCollecitonLoaded } = this.props;
        // console.log("isCollecitonFetching: ", isCollecitonFetching);
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                    render={props => <CollectionOverviewWithSpinner isLoading={isCollecitonFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={props => <CollectionWithSpinner isLoading={!isCollecitonLoaded} {...props} />} />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isCollecitonFetching: selectIsCollectionFetching,
    isCollecitonLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);