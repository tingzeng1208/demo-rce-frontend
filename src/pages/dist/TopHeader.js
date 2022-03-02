"use strict";
exports.__esModule = true;
exports.TopHeader = void 0;
var react_1 = require("react");
var react_uswds_1 = require("@trussworks/react-uswds");
/** HEADER */
var react_uswds_2 = require("@trussworks/react-uswds");
var react_uswds_3 = require("@trussworks/react-uswds");
var react_uswds_4 = require("@trussworks/react-uswds");
var react_uswds_5 = require("@trussworks/react-uswds");
var react_uswds_6 = require("@trussworks/react-uswds");
var react_uswds_7 = require("@trussworks/react-uswds");
var react_uswds_8 = require("@trussworks/react-uswds");
exports.TopHeader = function () {
    var _a = react_1.useState(false), mobileNavOpen = _a[0], setMobileNavOpen = _a[1];
    var _b = react_1.useState([false, false]), navDropdownOpen = _b[0], setNavDropdownOpen = _b[1];
    var handleToggleNavDropdown = function (index) {
        setNavDropdownOpen(function (prevNavDropdownOpen) {
            var newOpenState = Array(prevNavDropdownOpen.length).fill(false);
            // disable eslint-disable-next-line security/detect-object-injection
            newOpenState[index] = !prevNavDropdownOpen[index];
            return newOpenState;
        });
    };
    var toggleMobileNav = function () {
        setMobileNavOpen(function (prevOpen) { return !prevOpen; });
    };
    var handleSearch = function () {
        /* */
    };
    var primaryNavItems = [
        react_1["default"].createElement(react_1["default"].Fragment, { key: "primaryNav_0" },
            react_1["default"].createElement(react_uswds_7.NavDropDownButton, { menuId: "extended-nav-section-one", isOpen: navDropdownOpen[0], label: "Current section", onToggle: function () {
                    handleToggleNavDropdown(0);
                }, isCurrent: true }),
            react_1["default"].createElement(react_uswds_5.Menu, { id: "extended-nav-section-one", items: new Array(3).fill(react_1["default"].createElement("a", { href: "/sample-application" }, "Sample Application")), isOpen: navDropdownOpen[0] })),
        react_1["default"].createElement(react_1["default"].Fragment, { key: "primaryNav_1" },
            react_1["default"].createElement(react_uswds_7.NavDropDownButton, { menuId: "extended-nav-section-two", isOpen: navDropdownOpen[1], label: "Section", onToggle: function () {
                    handleToggleNavDropdown(1);
                } }),
            react_1["default"].createElement(react_uswds_5.Menu, { id: "extended-nav-section-two", items: new Array(3).fill(react_1["default"].createElement("a", { href: "#" }, "Navigation link")), isOpen: navDropdownOpen[1] })),
        react_1["default"].createElement("a", { key: "primaryNav_2", className: "usa-nav__link", href: "sample-application" },
            react_1["default"].createElement("span", null, "Sample Application")),
    ];
    var secondaryNavItems = [
        react_1["default"].createElement("a", { key: "secondaryNav_0", href: "" }, "Secondary link"),
        react_1["default"].createElement("a", { key: "secondaryNav_1", href: "" }, "Another secondary link"),
    ];
    var returnToTop = (react_1["default"].createElement(react_uswds_1.GridContainer, { className: "usa-footer__return-to-top" },
        react_1["default"].createElement("a", { href: "#" }, "Return to top")));
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("a", { className: "usa-skipnav", href: "#main-content" }, "Return to Main"),
        react_1["default"].createElement(react_uswds_1.GovBanner, null),
        react_1["default"].createElement("div", { className: "usa-overlay " + (mobileNavOpen ? 'is-visible' : '') }),
        react_1["default"].createElement(react_uswds_2.Header, { extended: true },
            react_1["default"].createElement("div", { className: "usa-navbar" },
                react_1["default"].createElement(react_uswds_3.Title, { id: "extended-logo" },
                    react_1["default"].createElement("a", { href: "/", title: "Home", "aria-label": "Home" }, "Recovery Cloud Environment")),
                react_1["default"].createElement(react_uswds_6.NavMenuButton, { label: "Menu", onClick: toggleMobileNav, className: "usa-menu-btn" })),
            react_1["default"].createElement(react_uswds_8.ExtendedNav, { "aria-label": "Primary navigation", primaryItems: primaryNavItems, secondaryItems: secondaryNavItems, onToggleMobileNav: toggleMobileNav, mobileExpanded: mobileNavOpen },
                react_1["default"].createElement(react_uswds_4.Search, { size: "small", onSubmit: handleSearch })))));
};
