/*
<div id="parent">
    <div id="child1">
    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    </div>
    <div id="child2">
    <h1>This is a Heading 1</h1>
    <h2>This is a Heading 2</h2>
    </div>
</div>


*/




const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", { id: "Heading 1" }, "This is a Heading 1"),
        React.createElement("h2", { id: "Heading 2" }, "This is a Heading 2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "Heading 1" }, "This is a Heading 1"),
        React.createElement("h2", { id: "Heading 2" }, "This is a Heading 2")
    ]),
]);



console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);