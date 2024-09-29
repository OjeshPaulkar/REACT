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

const jsxHeading = <h1 id="heading">Hello React From JSX</h1>;

setTimeout(() => root.render(nestedElements), 2000);
setTimeout(() => root.render(jsxHeading), 5000);

/* 
React.createElement() -> React Element -> JS Object -> ReactDom when render this object on browser -> it is rendered as html
JSX -> Babel(Transpiler) converts it to React Eelement (Object) -> Gets Rendered as Html on Browser
HSX is Not Html, It is Html like Syntax

React Components
    1. Class Components - Old way of Writing React Code
    2. Functional Components - New way of writing React Code

    Functional Components - React functional components are nothing but normal JS functions which are returning some 
    piece of JSX code
    Fuctional Componets should always be declared with CapitalCasing

    #Component Composition
    -> This is putting one react component inside another react component
*/

const HeadingComponent = () => <h1 className="heading">Hello React With Functional Component</h1>;
root.render(<HeadingComponent />);

