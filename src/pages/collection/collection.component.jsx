import React from "react";
import { connect } from "react-redux";
import CollectionItems from "../../components/collection-items/collection-item.component";
import { selectShopItemCollectionCategory } from "../../redux/shop-item-collection/shop-item-collection.selector";
import "./collection.style.scss";
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  // console.log(match.params.categoryId);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
      {
        items.map(item => <CollectionItems key={item.id} item={item} />)
      }
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectShopItemCollectionCategory(
    ownProps.match.params.collectionId
  )(state),
});
export default connect(mapStateToProps)(CollectionPage);
