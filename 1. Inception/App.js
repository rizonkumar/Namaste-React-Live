// createElement takes 3 parameters 1st is the tag, 2nd is obj & 3rd is the content
//heading 1 tag
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

//heading 2 tag
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);


// to write in div (it take array as it has two heading)
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  // in array as its children
  [heading, heading2]
)

console.log(heading);
// Now you need to put this into the root line#10.
// In react you need to tell this is the root element (this is the place you need to run)
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root element
// learn about aync and defer.
root.render(container);