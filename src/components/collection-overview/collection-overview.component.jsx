import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview, selectShopItemCollection } from "../../redux/shop-item-collection/shop-item-collection.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.style.scss";
    
const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionPreview }) => (
        <CollectionPreview key={id} {...otherCollectionPreview} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
