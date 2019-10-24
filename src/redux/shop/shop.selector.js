import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []);

export const selectCollection = collectionURLParam => {
    // console.log("on select collection");
    return createSelector(
        [selectCollections],
        collections => collections ? collections[collectionURLParam] : []
    )
}

export const selectIsCollectionFetching = createSelector([selectShop], shop => shop.isFetching);
export const selectIsCollectionLoaded = createSelector([selectShop], shop => !!shop.collections);

