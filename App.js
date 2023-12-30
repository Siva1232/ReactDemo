
/*
<div id="root">
<div id="parent">
    <div id="child1">
            <h1>h1 tag from child 1</h1>
            <h2>h2 tag from child 1</h1>

</div>
    <div id="child2">
            <h1>h1 tag from child 2</h1>
            <h2>h2 tag from child 2</h1>

</div>
</div>

</div>


*/
const heading = React.createElement("div", { id:"Parent"}, 
React.createElement("div", { id:"child"},
[React.createElement("h1", {},"h1 tag from child"),
React.createElement("h2", {},"h2 tag from child"),

]

));






console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);


