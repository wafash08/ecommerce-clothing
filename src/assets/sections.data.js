/* Used as starting data for Directory */
import hats from "./images/hats.png";
import jackets from "./images/jackets.png";
import sneakers from "./images/sneakers.png";
import womens from "./images/womens.png";
import mens from "./images/men.png";

const SECTIONS_DATA = [
  {
    title: "hats",
    // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    // imageUrl: "./images/hats.png",
    // local file in public/images/
    imageUrl: hats,
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    // imageUrl: "./images/jackets.png",
    // local file in public/images/
    imageUrl: jackets,
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    // imageUrl: "./images/sneakers.png",
    // local file in public/images/
    imageUrl: sneakers,
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    // imageUrl: "./images/womens.png",
    // local file in public/images/
    imageUrl: womens,
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    // imageUrl: "./images/men.png",
    // local file in public/images/
    imageUrl: mens,
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

export default SECTIONS_DATA;
