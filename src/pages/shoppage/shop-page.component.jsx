import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  convertCollectionsSnapshotsToMap,
  fireStore,
} from "../../firebase/firebase.util";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop-item-collection/shop-item-collection.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = fireStore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotsToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectiosMap) =>
    dispatch(updateCollections(collectiosMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
