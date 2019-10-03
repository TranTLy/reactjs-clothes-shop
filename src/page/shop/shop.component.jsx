import React, { Component } from 'react';
import './shop.component.scss';
import SHOP_DATA from './shop.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';


class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div>
                {this.state.collections.map(({ id, ...others }) => (
                    <CollectionPreview key={id} {...others} />
                ))
                }
            </div>
        );
    }
}

export default Shop;