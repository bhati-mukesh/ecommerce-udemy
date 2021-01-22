import React from 'react';  
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import './ShopPage.scss'
import CollectionPage from '../collection/CollectionPage'


const ShopePage = ({ match }) => {
    console.log("shop page");
    console.log(match)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default  ShopePage;