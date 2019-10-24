import React from 'react';
import './collection.style.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const Collection = ({ collection: { title, items } }) => {
    console.log("on collection component: ", title)
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Collection;