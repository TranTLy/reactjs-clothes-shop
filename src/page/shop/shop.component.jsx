import React from 'react';
import './shop.component.scss';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import Collection from '../collection/collection.component';

const Shop = ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection} />
        </div>
    );
}

export default Shop;