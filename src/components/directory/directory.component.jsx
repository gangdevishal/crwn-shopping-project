import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
class DirectoryMenu extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "kurti-suit",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/kurti-suit",
        },
        {
          title: "westernwear",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/girl-woman_Y8OHDLLUN1.jpg",
          id: 2,
          linkUrl: "shop/westernwear",
        },
        {
          title: "men",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/man-sunglasses_UBLCZML3J9.jpg",
          id: 3,
          linkUrl: "shop/men",
        },
        {
          title: "womens",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/woman-bathtub_1JUPEERTF9.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "beauty-health",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/wellness-cosmetics_G1GDELKCV6.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/beauty-health",
        },
        {
          title: "kids",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/family-playing_BKDISWTOCH.jpg",
          id: 6,
          linkUrl: "shop/kids",
        },
        {
          title: "begs-footwear",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/shoe-footwear_DUQNFOC83Q.jpg",
          id: 7,
          linkUrl: "shop/begs-footwear",
        },
        {
          title: "jewellery",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/urban-woman_U5KTWPUJXK.jpg",
          id: 8,
          linkUrl: "shop/jewellery",
        },
        {
          title: "electronics",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/computer-keyboard_IHIHTFK8YH.jpg",
          size: "large",
          id: 9,
          linkUrl: "shop/electronics",
        },
        {
          title: "sports-fitness",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/girl-woman_XBU0JECP7E.jpg",
          size: "large",
          id: 10,
          linkUrl: "shop/sports-fitness",
        },
        {
          title: "food-drinks",
          imageUrl:
            "https://cdn.stocksnap.io/img-thumbs/960w/breakfast-eggs_BYXMHHNV5X.jpg",
          id: 11,
          linkUrl: "shop/food-drinks",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, linkUrl, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default DirectoryMenu;
