import React from "react";
import ReactDOM from "react-dom/client";
/**
 *
 * Header
 *  - Logo(Title)
 *  - Nav Items (rightside)
 *  - Cart
 *
 * Body
 *  - Search Bar
 *  - Restraunt List
 *    - Restaurant Card (many cards)
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 *
 * Footer
 *  - Links
 *  - Copyright (c)
 *
 */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    name: "Burger King",
    image:
      "https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.jpg?s=612x612&w=0&k=20&c=K0DxyiChLwewXcCy8aLjjOqkc8QXPgQMAW-vwRCzqG4=",
    cusines: ["Burger", "American"],
    rating: "4.2",
  },
  {
    name: "KFC",
    image:
      "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00000974.jpg?ver=27.36",
    cusines: ["KFC Burger"],
    rating: "4.5",
  },
];

// Bulding the Restro Cards
const RestaurantCard = ({ image, name, cusines, rating }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} />
      <h3>{cusines.join(",")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

// props => properties
const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    // We need one root so we are using the React.Fragment
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
