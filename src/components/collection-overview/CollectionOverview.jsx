import './CollectionOverview.scss'
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector'

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionProps })=>{
                    return (<CollectionPreview key={id} {...otherCollectionProps} />)
                })
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);