import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from './Shop.data'
import './ShopPage.scss'

const ShopePage = () => {
    const [collections,setCollections] = useState(SHOP_DATA)
    console.log("shop data",collections)
    return (
        <div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps })=>{
                    return (<CollectionPreview key={id} {...otherCollectionProps} />)
                })
            }
        </div>
    );
};

export default ShopePage;