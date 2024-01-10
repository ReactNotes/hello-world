import React from "react";
import ReactDom from "react-dom";
import "./style.css"

const Hello = () => {
  let a = 10;
  return (
    <div className="hello">
      <h1>Hello World, {a}</h1>
      <p>{2 + 3 + 4 + 5 + 6}</p>
      <p> how are uh! </p>
    </div>
  );
};
ReactDom.render(<Hello />, document.getElementById("root"));
