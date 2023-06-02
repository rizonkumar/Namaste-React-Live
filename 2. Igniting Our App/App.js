/**
 * 
 * HMR => Hot Module Replacement, this mean parcel will track of each of all the files
 *        which we are updating like index, style, js 
 * 
 * HMR know from File Watcher Algorithm, parcel use this which is written in C++
 * Parcel does all this and its has all those package
 * 
 * BUNDLING
 * MINIFY
 * Cleaning our code 
 * Dev adb Production Build
 * Super fast build algorithm
 * Image Optimization
 * Caching while development builds
 * Compression
 * Compatble with the older version of the brower
 * HTTPs on Dev to do this npx parcel index.html --https
 * ports number
 * Consistent Hashing Algorithm
 * Zero Config
 * 
 * All this are Transitive Dependencies.
 */

import React from "react";
import ReactDOM from "react-dom/client";

// createElement takes 3 parameters 1st is the tag, 2nd is obj & 3rd is the content
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1 for parcel",
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  // in array
  [heading, heading2]
)

console.log(heading);
// Now you need to put this into the root line#10.
// In react you need to tell this is the root element (this is the place you need to run).
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root element
// learn about aync and defer.
root.render(container);