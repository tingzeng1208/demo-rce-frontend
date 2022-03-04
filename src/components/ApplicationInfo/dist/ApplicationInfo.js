"use strict";
exports.__esModule = true;
exports.ApplicationInfo = void 0;
var react_uswds_1 = require("@trussworks/react-uswds");
require("@trussworks/react-uswds/lib/uswds.css");
require("@trussworks/react-uswds/lib/index.css");
var Application_1 = require("../../pages/Application");
var button1style = {
    width: '50px',
    display: 'inline-block',
    margin: '1px',
    height: '30px',
    fontSize: 'small',
    alignContent: 'left',
    alignItems: 'left',
    textAlign: 'left'
};
;
exports.ApplicationInfo = function (_a) {
    // return <table><tbody><tr role="contentinfo"><td>{ApplicantName} </td><td>{status? "Active": "Inactive"}</td><td>
    // <Button type="button" size='small' onClick={delAction}>Del</Button>
    // <Button type="button" size='small' onClick={viewAction}>View</Button>
    // <Button type="button" size='small' onClick={editAction}>Edit</Button></td>
    // </tr></tbody></table>;
    var id = _a.id, Address = _a.Address, State = _a.State, email = _a.email, ZIP = _a.ZIP, ApplicantName = _a.ApplicantName, status = _a.status, delAction = _a.delAction, viewAction = _a.viewAction, editAction = _a.editAction;
    return (React.createElement(react_uswds_1.GridContainer, null,
        React.createElement(react_uswds_1.Grid, { row: true },
            React.createElement(react_uswds_1.Grid, { col: Application_1.leftGridSize, role: "contentinfo" }, ApplicantName),
            React.createElement(react_uswds_1.Grid, { col: Application_1.midGridSize }, status ? "Active" : "Inactive"),
            React.createElement(react_uswds_1.Grid, { col: Application_1.rightGridSize },
                React.createElement(react_uswds_1.Button, { type: "button", size: 'small', onClick: delAction, style: button1style }, "Del"),
                React.createElement(react_uswds_1.Button, { type: "button", size: 'small', onClick: viewAction, style: button1style }, "View"),
                React.createElement(react_uswds_1.Button, { type: "button", size: 'small', onClick: editAction, style: button1style }, "Edit")))));
};
