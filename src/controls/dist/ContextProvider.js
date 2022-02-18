"use strict";
exports.__esModule = true;
exports.ContextProvider = exports.UserContext = void 0;
var react_1 = require("react");
var react_2 = require("react");
var UserContext = react_2["default"].createContext({});
exports.UserContext = UserContext;
var ContextProvider = function (props) {
    var _a = react_1.useState(''), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState('main'), currentPage = _b[0], setCurrentPage = _b[1];
    // the state that we'll be storing the username into
    /* because we will be providing an object to the provider, it is better to put the value inside a useMemo so that the component will only re-render when there's a change in the value. */
    var savedValue = react_1.useMemo(function () { return ({ username: username, setUsername: setUsername }); }, [username]);
    return (react_2["default"].createElement(UserContext.Provider, { value: savedValue }, props.children));
};
exports.ContextProvider = ContextProvider;
