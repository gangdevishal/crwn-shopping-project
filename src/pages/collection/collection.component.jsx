import React from "react";
import { connect } from "react-redux";
import CollectionItems from "../../components/collection-items/collection-item.component";
import { selectShopItemCollectionCategory } from "../../redux/shop-item-collection/shop-item-collection.selector";
import "./collection.style.scss";
import { CollectionPageContainer, ItemsContainer, TitleContainer } from "./collection.styles";
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  // console.log(match.params.categoryId);
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
      {
        items.map(item => <CollectionItems key={item.id} item={item} />)
      }
      </ItemsContainer>
    </CollectionPageContainer>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectShopItemCollectionCategory(
    ownProps.match.params.collectionId
  )(state),
});
export default connect(mapStateToProps)(CollectionPage);
