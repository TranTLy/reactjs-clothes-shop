import React from 'react';
import './collection-overview.style.scss';
import { CollectionPreview } from '../collection-preview/collection-preview.component';

const CollectionOverview = ({ collections }) => {
    // console.log("collection overview component");
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...others }) => (
                <CollectionPreview key={id} {...others} />
            ))
            }
        </div>
    )
}

export default CollectionOverview;

