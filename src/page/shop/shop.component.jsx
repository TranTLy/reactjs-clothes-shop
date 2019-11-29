import React, { useEffect, lazy, Suspense } from 'react';
import './shop.component.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStart } from '../../redux/shop/shop.action';
import Spinner from '../../components/spinner/spinner.component';
// import CollectionContainer from '../collection/collection.container';
// import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';

const CollectionContainer = lazy(()=> import('../collection/collection.container'));
const CollectionOverviewContainer = lazy(()=> import('../../components/collection-overview/collection-overview.container'));


const Shop = ({ fetchCollectionStart, match }) => {
    useEffect(() => {
        fetchCollectionStart();
    }, [])


    return (
        <div className="shop-page">
            <Suspense fallback = {Spinner}>
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionContainer} />
            </Suspense>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(Shop);