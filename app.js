const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"1st paragraph"),React.createElement("h2",{},"2nd paragraph")]));
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);
