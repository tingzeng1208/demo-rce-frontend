"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Application = exports._App = exports.rightGridSize = exports.midGridSize = exports.leftGridSize = exports.url = void 0;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var actions_1 = require("../actions");
var ApiSync_1 = require("../API-service/ApiSync");
var ApplicationInfo_1 = require("../components/ApplicationInfo/ApplicationInfo");
var ViewBox_1 = require("../components/ViewBox/ViewBox");
var FormView_1 = require("../components/FormView/FormView");
var EditBox_1 = require("../components/EditBox/EditBox");
var react_uswds_1 = require("@trussworks/react-uswds");
require("@trussworks/react-uswds/lib/uswds.css");
require("@trussworks/react-uswds/lib/index.css");
var SideNav_1 = require("../components/SideNav/SideNav");
var GridContainer_1 = require("../components/grid/GridContainer/GridContainer");
var Grid_1 = require("../components/grid/Grid/Grid");
exports.url = 'http://localhost:5001/applications';
exports.leftGridSize = 5;
exports.midGridSize = 1;
exports.rightGridSize = 6;
var mockSubmit = function () { };
var div1style = {
    width: '800px',
    display: 'inline-block',
    margin: '40px, 40px, 35px, 10px',
    height: 'auto'
};
var div2style = {
    width: '1200px',
    display: 'inline-block',
    height: 'auto'
};
var _App = /** @class */ (function (_super) {
    __extends(_App, _super);
    function _App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showingNew: false,
            showingDetail: false,
            showingEdit: false,
            appNameData: '',
            statusData: true,
            currentId: -1
        };
        _this.apiSync = new ApiSync_1.ApiSync(exports.url);
        _this.displayElements = [];
        _this.buttonClick = function () {
            _this.props.fetchApplications(exports.url);
        };
        _this.newClick = function () {
            var showingNew = _this.state.showingNew;
            _this.setState({ showingNew: !showingNew });
        };
        _this.onDeleteClick = function (id) {
            if (!id)
                return;
            _this.props.deleteApplications(id);
            _this.apiSync["delete"](id).then(function (response) {
                console.log("successfully delete " + id);
                console.log(response);
            })["catch"](function (event) {
                console.log("error at deleting id: " + id);
                console.log(event);
            });
        };
        _this.onViewClick = function (id) {
            var showingDetail = _this.state.showingDetail;
            _this.setState({ showingDetail: !showingDetail, currentId: id });
        };
        _this.onEditClick = function (id) {
            var showingEdit = _this.state.showingEdit;
            console.log("current id = " + id);
            _this.setState({ showingEdit: !showingEdit, currentId: id });
            var application = _this.props.applications.find(function (a) { return a.id === id; });
            console.log('onEditClick');
            console.log(application);
            if (application !== undefined) {
                _this.setStateFor(application);
            }
        };
        _this.EditClick = function () {
            var showingEdit = _this.state.showingEdit;
            _this.setState({ showingEdit: !showingEdit });
        };
        _this.onNewSubmit = function (e) {
            e.preventDefault();
            var target = e.target;
            console.log(e.target);
            var appName = target.appName.value; // typechecks!
            var status = target.status.checked; // typechecks!  
            var application = {
                Address: '123 main st',
                State: 'virginia',
                email: 'test@test.com',
                ZIP: 22030,
                ApplicantName: appName,
                status: status
            };
            console.log(application);
            _this.props.addAApplication(application);
            console.log(_this.props.applications);
            _this.apiSync.save(application).then(function (response) {
                console.log("save success for " + application + " with response " + response.data);
                application.id = response.data.id;
            })["catch"](function () {
                console.log("save error for application " + application);
            });
            _this.displayElements.push(react_1["default"].createElement("tr", null,
                react_1["default"].createElement("td", null, application.ApplicantName),
                react_1["default"].createElement("td", null, application.status ? "Active" : "Inactive"),
                react_1["default"].createElement("td", null,
                    react_1["default"].createElement("button", { onClick: function () { return _this.onDeleteClick(application.id); } }, "del"),
                    react_1["default"].createElement("button", { onClick: function () { return _this.onViewClick(application.id); } }, "View")),
                " "));
            _this.newClick();
        };
        _this.onEditSubmit = function (e) {
            e.preventDefault();
            console.log("Edit form object");
            console.log(e);
            var target = e.target;
            console.log(e.target);
            var appName = target.appName.value; // typechecks!
            var status = target.status.checked; // typechecks! 
            var application = _this.props.applications.find(function (a) { return a.id === _this.state.currentId; });
            if (application !== undefined) {
                application.ApplicantName = appName;
                application.status = status;
                console.log("edit application id: " + application.id);
                _this.apiSync.save(application).then(function (response) {
                    console.log("edit success for " + application + " with response " + response.data);
                    application.id = response.data.id;
                })["catch"](function () {
                    console.log("edit error for application " + application);
                });
            }
            _this.props.deleteApplications(-1);
            _this.EditClick();
        };
        _this.setStateFor = function (application) {
            _this.setState({ appNameData: application.ApplicantName });
            _this.setState({ statusData: application.status });
        };
        _this.onStatusChange = function (e) {
            console.log("changed status to " + e.target.checked);
            _this.setState({ statusData: e.target.checked });
        };
        _this.onAppNameChange = function (e) {
            console.log("changed app name to " + e.target.value);
            _this.setState({ appNameData: e.target.value });
        };
        return _this;
    }
    _App.prototype.renderList = function () {
        var _this = this;
        if (this.props && this.props.applications) {
            this.displayElements = this.props.applications.map(function (applications) {
                return react_1["default"].createElement(ApplicationInfo_1.ApplicationInfo, { ApplicantName: applications.ApplicantName, status: applications.status, delAction: function () { return _this.onDeleteClick(applications.id); }, viewAction: function () { return _this.onViewClick(applications.id); }, editAction: function () { return _this.onEditClick(applications.id); } });
            });
            if (this.displayElements.length > 0) {
                this.displayElements.unshift(react_1["default"].createElement(Grid_1.Grid, { row: true },
                    react_1["default"].createElement(Grid_1.Grid, { col: exports.leftGridSize }, "Applicant Name:"),
                    react_1["default"].createElement(Grid_1.Grid, { col: exports.midGridSize }, "Status"),
                    react_1["default"].createElement(Grid_1.Grid, { col: exports.rightGridSize }, "Action")));
            }
            return this.displayElements;
        }
        else {
            return [];
        }
    };
    _App.prototype.renderView = function () {
        var _this = this;
        if (!this.props || !this.props.applications) {
            return react_1["default"].createElement("div", null);
        }
        var application = this.props.applications.find(function (a) { return a.id === _this.state.currentId; });
        if (application !== undefined) {
            return react_1["default"].createElement(ViewBox_1.ViewBox, { id: application.id, ApplicantName: application.ApplicantName, Address: application.Address, email: application.email, State: application.State, ZIP: application.ZIP, status: application.status });
        }
        else {
            return react_1["default"].createElement("div", null);
        }
    };
    _App.prototype.renderEdit = function () {
        var _this = this;
        if (!this.props || !this.props.applications) {
            return react_1["default"].createElement("div", null);
        }
        var application = this.props.applications.find(function (a) { return a.id === _this.state.currentId; });
        console.log("render edit for id = " + this.state.currentId);
        console.log(application);
        if (application !== undefined) {
            console.log("state applicant name is " + this.state.appNameData + " and status is " + this.state.statusData);
            return react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", null, "Application Information:"),
                react_1["default"].createElement(EditBox_1.EditForm, { ApplicantName: this.state.appNameData, Address: application.Address, email: application.email, State: application.State, ZIP: application.ZIP, status: this.state.statusData, onSubmit: this.onEditSubmit, children: '' }));
        }
        else {
            return react_1["default"].createElement("div", null);
        }
    };
    _App.prototype.render = function () {
        var showingNew = this.state.showingNew;
        var showingDetail = this.state.showingDetail;
        var showingEdit = this.state.showingEdit;
        var menuItems = [
            react_1["default"].createElement("a", { href: "../", key: "Main" }, "Main Page"),
            react_1["default"].createElement("a", { href: ".", key: "Sample application", className: "usa-current" }, "Sample Application"),
            react_1["default"].createElement("a", { href: "#three", key: "three" }, "Application two"),
        ];
        return react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(GridContainer_1.GridContainer, null,
                react_1["default"].createElement(Grid_1.Grid, { row: true },
                    react_1["default"].createElement(Grid_1.Grid, { col: 2 },
                        react_1["default"].createElement(SideNav_1.SideNav, { items: menuItems })),
                    react_1["default"].createElement(Grid_1.Grid, { col: 10 },
                        react_1["default"].createElement(react_uswds_1.Header, { basic: true },
                            react_1["default"].createElement("div", { className: "usa-nav-container", style: div2style },
                                react_1["default"].createElement("div", { className: "usa-navbar" },
                                    react_1["default"].createElement(react_uswds_1.Title, null, "Sample Application"),
                                    react_1["default"].createElement(react_uswds_1.NavMenuButton, { label: "Menu" })))),
                        react_1["default"].createElement("table", null,
                            react_1["default"].createElement("tr", null,
                                react_1["default"].createElement("td", null,
                                    react_1["default"].createElement("div", { style: div1style },
                                        react_1["default"].createElement("button", { onClick: this.buttonClick }, "Get list"),
                                        "\u00A0\u00A0",
                                        react_1["default"].createElement("button", { onClick: this.newClick }, "New"),
                                        react_1["default"].createElement("div", { style: { display: (showingNew ? 'block' : 'none') } },
                                            react_1["default"].createElement(FormView_1.Formbox, { onSubmit: this.onNewSubmit, children: '' })),
                                        react_1["default"].createElement("div", { style: div1style }, this.renderList()))),
                                react_1["default"].createElement("td", { style: { verticalAlign: 'top' } },
                                    react_1["default"].createElement("div", { style: { display: (showingDetail ? 'inline-block' : 'none'), width: '160',
                                            height: 'auto',
                                            alignSelf: 'left', alignContent: 'left' } }, this.renderView()),
                                    react_1["default"].createElement("div", { style: { display: (showingEdit ? 'inline-block' : 'none'), width: '200',
                                            height: 'auto',
                                            alignSelf: 'left', alignContent: 'left' } }, this.renderEdit()))))))));
    };
    return _App;
}(react_1["default"].Component));
exports._App = _App;
var mapStateToProps = function (state) {
    return {
        applications: state.applications
    };
};
var urlString = 'http:\\localhost:5001';
exports.Application = react_redux_1.connect(mapStateToProps, { fetchApplications: actions_1.fetchApplications, deleteApplications: actions_1.deleteApplications, addAApplication: actions_1.addAApplication, editAApplication: actions_1.editAApplication, urlString: urlString })(_App);
