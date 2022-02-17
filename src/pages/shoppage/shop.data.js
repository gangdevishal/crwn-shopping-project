const SHOP_DATA = {
  winterwear: {
    id: 2,
    title: "Winterwear",
    routeName: "winterwear",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/man-hiking_315YIFMDFP.jpg",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/beautiful-beauty_8SM5T92EN3.jpg",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl:
          "https://www.lifeofpix.com/wp-content/uploads/2021/08/DSC8051-Edit-1600x2000.jpg",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl:
          "https://www.lifeofpix.com/wp-content/uploads/2022/02/Explorer-1600x2400.jpg",
        price: 160,
      },
    ],
  },
  men: {
    id: 3,
    title: "Men",
    routeName: "men",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/hipster-man_BQ2BN69HGT.jpg",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/man-hipster_HKTKMOVXNO.jpg",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/people-man_AWMCBCI13Z.jpg ",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/senior-running_KVQQJKRXZW.jpg",
        price: 165,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/woman-fashion_D5ZWQMEFTK.jpg",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/woman-model_U1HIWXOJQA.jpg",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/woman-model_CRHFNXOZMG.jpg",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/woman-drinking_UEQ0178WUT.jpg",
        price: 80,
      },
    ],
  },
  beauty_health: {
    id: 5,
    title: "Beauty-Health",
    routeName: "beauty-health",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/male-fitness_QA6YPROFCI.jpg",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/push-ups_T5A9WUVBFD.jpg",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/woman-skin_JMJN2LDGRY.jpg",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/woman-bathtub_CUGFVFAI24.jpg",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/woman-bathtub_OVT7H2HWGY.jpg",
        price: 40,
      },
    ],
  },
  kids: {
    id: 6,
    title: "Kids",
    routeName: "kids",
    items: [
      {
        id: 36,
        name: "Camo Down Vest",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/people-kids_NY963ZH6T2.jpg",
        price: 325,
      },
      {
        id: 37,
        name: "Floral T-shirt",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/kids-playing_MQJR2N5ZH2.jpg",
        price: 20,
      },
      {
        id: 38,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/family-playing_U4V7JRTEYU.jpg",
        price: 25,
      },
      {
        id: 39,
        name: "Pink T-shirt",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/sunlight-sunshine_XDNPCSL1U2.jpg",
        price: 25,
      },
    ],
  },
  begs_bootwear: {
    id: 7,
    title: "Begs-Footwear",
    routeName: "begs-bootwear",
    items: [
      {
        id: 42,
        name: "Camo Down Vest",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/red-heels_OTIRIRP4UR.jpg",
        price: 325,
      },
      {
        id: 43,
        name: "Floral T-shirt",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/architecture-building_JU5FPXT73T.jpg",
        price: 20,
      },
      {
        id: 44,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/footwear-shoe_RUFNMXXX2F.jpg",
        price: 25,
      },
      {
        id: 45,
        name: "Pink T-shirt",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/people-legs_M5ERMO26E9.jpg",
        price: 25,
      },
    ],
  },
  jewellery: {
    id: 8,
    title: "Jewellery",
    routeName: "jewellery",
    items: [
      {
        id: 48,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 49,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 50,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 51,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 52,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 53,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
  electronics: {
    id: 9,
    title: "Electronics",
    routeName: "electronics",
    items: [
      {
        id: 54,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 55,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 56,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 57,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 58,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 59,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
  sports_fitness: {
    id: 10,
    title: "Sports-Fitness",
    routeName: "sports-fitness",
    items: [
      {
        id: 60,
        name: "Camo Down Vest",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/girl-gym_00RNNUWGLM.jpg",
        price: 325,
      },
      {
        id: 61,
        name: "Floral T-shirt",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/weights-dumbbells_QP7WI19WFG.jpg",
        price: 20,
      },
      {
        id: 62,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/gym-interior_LNCLN1NE6K.jpg",
        price: 25,
      },
      {
        id: 63,
        name: "Pink T-shirt",
        imageUrl:
          "https://cdn.stocksnap.io/img-thumbs/960w/man-workout_KZROPA98J8.jpg",
        price: 25,
      },
    ],
  },
  food_drinks: {
    id: 11,
    title: "Food-Drinks",
    routeName: "Food-Drinks",
    items: [
      {
        id: 66,
        name: "Camo Down Vest",
        imageUrl:
          "https://www.lifeofpix.com/wp-content/uploads/2021/02/burger-1600x2112.jpg",
        price: 325,
      },
      {
        id: 67,
        name: "Floral T-shirt",
        imageUrl:
          "https://www.lifeofpix.com/wp-content/uploads/2021/02/IMG_7752-1600x2400.jpg",
        price: 20,
      },
      {
        id: 68,
        name: "Black & White Longsleeve",
        imageUrl:
          "https://www.lifeofpix.com/wp-content/uploads/2018/10/5-1600x2133.jpg",
        price: 25,
      },
      {
        id: 69,
        name: "Pink T-shirt",
        imageUrl:
          "https://www.lifeofpix.com/wp-content/uploads/2018/06/p-316-pai3857-eye-2-1600x1067.jpg",
        price: 25,
      },
    ],
  },
};

export default SHOP_DATA;
