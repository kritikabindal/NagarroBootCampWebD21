const mongoose = require("mongoose");
const Product = require("./models/product");

const products = [
  {
    name: "Iphone",
    img:
      "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 100000,
    desc: "lorem text",
  },
  {
    name: "MacbookAir",
    img:
      "https://images.unsplash.com/photo-1493020258366-be3ead1b3027?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 14000,
    desc: "lorem text",
  },
  {
    name: "watches",
    img:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 123000,
    desc: "lorem text",
  },
  {
    name: "HeadPhones",
    img:
      "https://images.unsplash.com/photo-1599669454699-248893623440?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 100000,
    desc: "lorem text",
  },
  {
    name: "Drone",
    img:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 100000,
    desc: "lorem text",
  },
  {
    name: "shoes",
    img:
      "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 100000,
    desc: "lorem text",
  },
];

const seedDB = async () => {
  await Product.insertMany(products);
  console.log("DB Seeded");
};

module.exports = seedDB;
