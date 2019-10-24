import './collection.style.scss';
import { connect } from 'react-redux';
import { selectCollection, selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
import { compose } from 'redux';
import Collection from './collection.component';
import WithSpinner from '../../components/with-spiner/with-spiner.component';

const mapStateToProps = (state, ownProps) => {
    return ({
        collection: selectCollection(ownProps.match.params.collectionId)(state),
        isLoading: !selectIsCollectionLoaded(state)
    })
};

const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);

export default CollectionContainer;