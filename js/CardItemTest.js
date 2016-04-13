var CardItem = require('./CardItem');
var React = require('react');
var ReactDOM = require('react-dom');

var r = new XMLHttpRequest();

r.open("GET", "/json/items.json");
r.onload = function () {
    if (r.status == 200) {
        var sets = JSON.parse(r.responseText);
        console.log("set", sets[0]);
        var items = sets[0].cards;
        ReactDOM.render(<CardItem item={items[1]}/>, document.getElementById('content'));
    }
};
r.send();