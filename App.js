// HTML Nested Structure
/*<div id="parent">
    <div id="child">
        <h1>I'm in the h1 tag</h1>
        <h2>I'm in the h2 tag</h2>
    </div>
    <div id="child1">
        <h1>I'm in the h1 tag</h1>
        <h2>I'm in the h2 tag</h2>
    </div>
</div> */
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm in the h1 tag"),
    React.createElement("h2", {}, "I'm in the h2 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm in the h1 tag"),
    React.createElement("h2", {}, "I'm in the h2 tag"),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react"
);
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
