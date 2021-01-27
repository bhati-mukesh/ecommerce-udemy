import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import "./ShopPage.scss";
import CollectionPage from "../collection/CollectionPage";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from "react-redux";
import { updateCollection } from "../../redux/shop/ShopAction";


class ShopePage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionMap)

    })
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
    updateCollections : collectionMap => dispatch(updateCollection(collectionMap))
})

export default connect(null,mapDispatchToProps)(ShopePage);