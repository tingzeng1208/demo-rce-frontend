"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_router_dom_1 = require("react-router-dom");
var Starting_1 = require("./pages/Starting");
var TopHeader_1 = require("./pages/TopHeader");
var Application_1 = require("./pages/Application");
var BottomFooter_1 = require("./pages/BottomFooter");
exports.App = function () {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(TopHeader_1.TopHeader, null),
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Starting_1.StartingPage, null) }),
            React.createElement(react_router_dom_1.Route, { path: "/sample-application", element: React.createElement(Application_1.Application, null) })),
        React.createElement(BottomFooter_1.BottomFooter, null)));
};
exports["default"] = exports.App;
