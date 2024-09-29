import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {id: "heading"}, "Hello World! From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);

const nestedElements = [React.createElement("div", {id: "Parent1"}, 
                        React.createElement("div", {id: "child1"}, 
                            [React.createElement("h2", {}, "I am grand child 1, From Parent 1"), React.createElement("h2", {}, "I am grand child 2, From Parent 1")]
                        )
                    ),  React.createElement("div", {id: "Parent2"}, 
                        React.createElement("div", {id: "child2"}, 
                            [React.createElement("h2", {}, "I am grand child 1, From Parent 2"), React.createElement("h2", {}, "I am grand child 2, From Parent 2")]
                        )
                    )]

root.render(nestedElements);