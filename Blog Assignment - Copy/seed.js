const mongoose = require("mongoose");
const Blog = require("./models/blog");

const blogs = [
  {
    name: "Hauz Khas Social",

    img: "../src/Hauz-khas-social.jpg",

    desc: `They have earned their place as one of the best cafes in Hauz Khas owing to their world-class acts, super consistent quality, tempting cocktails, fabulous music, and the most wonderful ambiance that will make you wanna stay here forever`,

    location: "9-A & 12, Hauz Khas Village, New Delhi",

    highlights:
      "Live Music, Live Sports Screening, Outdoor Seating, Cuisines – Continental, American, Asian, North Indian",

    cost: "1,300",
    time: "11 AM to1 AM",
  },
  {
    name: "Diggin,Chanakyapuri ",
    img: "/src/Diggin.jpg",
    desc: `A gorgeous space with well-manicured french windows, lush green gardens, fancy colorful bird cages, and soothing vibes, Diggin is one of the most romantic cafes in Delhi that has taken the insta-worthy tag to a whole new level`,
    location:
      "11, Santushti Shopping Complex, Race Course Road, Chanakyapuri, New Delhi",
    highlights:
      "Outdoor Seating, Natural Surroundings, Fairy Lights, Peaceful, Cuisine – Italian, Continental",
    cost: "1,400",
    time: "11:30 AM to 10 PM",
  },
  {
    name: "Xero Degrees ",
    img: "/src/xero-degree.jfif",
    desc: `This small and one of the cheapest cafes in Delhi is located in Connaught Place and is a great place to hang out with friends. The cafe serves delicious dishes that you can enjoy during your visit. The cafe is a small and cozy place with beautiful interiors.`,
    location: " L-23/9, Middle Circle, Connaught Place, New Delhi.",
    highlights: "Cozy interiors and delicious food",
    cost: "INR 750",
    time: "12:30 PM to 11:00 PM",
  },
  {
    name: "Imperfecto",
    img: "/src/Imperfecto-Hauz-Khas.jpg",
    desc: `Imperfecto is among
     the best offbeat cafes in South Delhi that attract passersby with its unique looks and its offbeat sense of character and style. It’s the perfect dining spot for lovebirds as well as your gang of friends.Imperfecto is the best rooftop cafe in Delhi for all who looking for much more than just good food.`,
    location: "1-A/1, Hauz Khas Village, New Delhi",
    highlights:
      "Full Bar, Live Music, DJ, Cuisine – Mediterranean, Italian, Continental, Spanish, North Indian",
    cost: "1800",
    time: " 12 Noon to 1 AM",
  },
  {
    name: "Cafeteria & Co.",
    img: "/src/cafeteria-&-co.jpg",
    desc: ` Cafeteria & Co would have topped it. Don’t go by their looks. This cafe will go as easy on your wallet as appealing it is to your eyes and taste buds. Cafeteria and Co. are known as one of the best cheap cafes in Delhi thanks to their warm vibes, inviting ambiance, superb food, star-shaped burgers, Hexza Pizzas, Tiramisu Shakes, Beyonce Burgers, Peri-Peri Chicken….well, you got the point! It’s the best place for the broke and hungry.`,
    location: "G 14, Hudson Lane, Vijay Nagar, New Delhi",
    highlights:
      "Live Sports Screening, Kid Friendly, Comfortable Seating, Cuisines – Continental, Mexican, Fast Food",
    cost: "900",
    time: "11:30 AM to 11 PM",
  },
  {
    name: "United Coffee House",
    img: "/src/United-Coffee-House.jpg",
    desc: `Having served Delhiites with the finest coffee for nearly 60 years, United Coffee House knows exactly which taste-notes to touch in the art of coffee making. But coffee isn’t their only signature item. One of the best cafes in Delhi, United Coffee House offers guests multiple cuisines like North Indian, Asian, Continental, Mediterranean, and European`,
    location: "E-15, Connaught Place, New Delhi",
    highlights:
      "Full Bar, Serves Jain Food, Vintage Decor, Coffee Quality, Cuisines – North Indian, European, Asian, Mediterranean",
    cost: "2,500",
    time: "9:30 AM to Midnight",
  },
];

const seedDB = async () => {
  await Blog.insertMany(blogs);
  console.log("DB seeded");
};

module.exports = seedDB;
