"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.EditForm = void 0;
var react_uswds_1 = require("@trussworks/react-uswds");
var react_uswds_2 = require("@trussworks/react-uswds");
require("@trussworks/react-uswds/lib/uswds.css");
require("@trussworks/react-uswds/lib/index.css");
var react_1 = require("react");
var div1style = {
    width: '600',
    display: 'inline-block',
    marginTop: '5px',
    height: 'auto'
};
var textInputstyle = {
    width: '250px',
    display: 'inline-block',
    marginTop: '3px',
    height: '20px'
};
var leftGridSize = 8;
var rightGridSize = 4;
exports.EditForm = function (_a) {
    var number = _a.id, Address = _a.Address, State = _a.State, email = _a.email, ZIP = _a.ZIP, ApplicantName = _a.ApplicantName, status = _a.status, onSubmit = _a.onSubmit, formProps = __rest(_a, ["id", "Address", "State", "email", "ZIP", "ApplicantName", "status", "onSubmit"]);
    var _b = react_1.useState(status), statusData = _b[0], setStatus = _b[1];
    var _c = react_1.useState(ApplicantName), appName = _c[0], setAppName = _c[1];
    react_1.useEffect(function () {
        console.log("use effect " + ApplicantName + ": " + status);
        setStatus(status);
        setAppName(ApplicantName);
    }, [ApplicantName, status]);
    return react_1["default"].createElement("div", { style: div1style },
        react_1["default"].createElement("form", { onSubmit: onSubmit },
            react_1["default"].createElement(react_uswds_1.GridContainer, { containerSize: "mobile" },
                react_1["default"].createElement(react_uswds_1.Grid, { row: true },
                    react_1["default"].createElement(react_uswds_1.Grid, { col: leftGridSize }, "Applicant Name:"),
                    react_1["default"].createElement(react_uswds_1.Grid, { col: rightGridSize },
                        react_1["default"].createElement(react_uswds_1.TextInput, { style: textInputstyle, id: 'appName', value: appName, placeholder: 'Applicant name', onChange: function (e) { return setAppName(e.target.value); }, type: 'text', name: 'appName', autoCapitalize: 'off', autoCorrect: 'off' }))),
                react_1["default"].createElement(react_uswds_1.Grid, { row: true },
                    react_1["default"].createElement(react_uswds_1.Grid, { col: leftGridSize }, "Status:"),
                    react_1["default"].createElement(react_uswds_1.Grid, { col: rightGridSize },
                        react_1["default"].createElement("input", { type: 'checkbox', id: "status", checked: statusData, onChange: function (e) { return setStatus(e.target.checked); }, name: "status", title: 'abc' }))),
                react_1["default"].createElement(react_uswds_1.Grid, { row: true },
                    react_1["default"].createElement(react_uswds_1.Grid, { col: 12 },
                        react_1["default"].createElement(react_uswds_2.Button, { type: 'submit' }, "Submit"))))));
};
