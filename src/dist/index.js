"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
var App_1 = require("./App");
var store_1 = require("./redux/store");
react_dom_1["default"].render(React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(App_1.App, null)), document.getElementById('root'));
