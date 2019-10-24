import './collection-overview.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectCollectionsForPreview, selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spiner/with-spiner.component';
import CollectionOverview from './collection-overview.component';


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;

