import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component
const Title = () => (
  <h1 id="title" key="h1">
    Namaste React
  </h1 >
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React Functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// to render the react component / functional component
root.render(HeaderComponent());