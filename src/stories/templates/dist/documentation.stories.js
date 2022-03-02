"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.DocumentationPage = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var logo_img_png_1 = require("uswds/src/img/logo-img.png");
var react_uswds_1 = require("@trussworks/react-uswds");
/** HEADER */
var react_uswds_2 = require("@trussworks/react-uswds");
var react_uswds_3 = require("@trussworks/react-uswds");
var react_uswds_4 = require("@trussworks/react-uswds");
var react_uswds_5 = require("@trussworks/react-uswds");
var react_uswds_6 = require("@trussworks/react-uswds");
var react_uswds_7 = require("@trussworks/react-uswds");
var react_uswds_8 = require("@trussworks/react-uswds");
/** FOOTER */
var react_uswds_9 = require("@trussworks/react-uswds");
var react_uswds_10 = require("@trussworks/react-uswds");
var react_uswds_11 = require("@trussworks/react-uswds");
var react_uswds_12 = require("@trussworks/react-uswds");
var react_uswds_13 = require("@trussworks/react-uswds");
var react_uswds_14 = require("@trussworks/react-uswds");
exports["default"] = {
    title: 'Page Templates/Documentation Page',
    parameters: {
        docs: {
            description: {
                component: "\nPage templates\n"
            }
        }
    }
};
exports.DocumentationPage = function () {
    var _a = react_1.useState(false), mobileNavOpen = _a[0], setMobileNavOpen = _a[1];
    var _b = react_1.useState([false, false]), navDropdownOpen = _b[0], setNavDropdownOpen = _b[1];
    var handleToggleNavDropdown = function (index) {
        setNavDropdownOpen(function (prevNavDropdownOpen) {
            var newOpenState = Array(prevNavDropdownOpen.length).fill(false);
            // dsiable eslint-disable-next-line security/detect-object-injection
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
            react_1["default"].createElement(react_uswds_5.Menu, { id: "extended-nav-section-one", items: new Array(3).fill(react_1["default"].createElement("a", { href: "#" }, "Navigation link")), isOpen: navDropdownOpen[0] })),
        react_1["default"].createElement(react_1["default"].Fragment, { key: "primaryNav_1" },
            react_1["default"].createElement(react_uswds_7.NavDropDownButton, { menuId: "extended-nav-section-two", isOpen: navDropdownOpen[1], label: "Section", onToggle: function () {
                    handleToggleNavDropdown(1);
                } }),
            react_1["default"].createElement(react_uswds_5.Menu, { id: "extended-nav-section-two", items: new Array(3).fill(react_1["default"].createElement("a", { href: "#" }, "Navigation link")), isOpen: navDropdownOpen[1] })),
        react_1["default"].createElement("a", { key: "primaryNav_2", className: "usa-nav__link", href: "javascript:void(0)" },
            react_1["default"].createElement("span", null, "Simple link")),
    ];
    var sideNavItems = [
        react_1["default"].createElement("a", { key: "sidenav_0", href: "" }, "Parent link"),
        react_1["default"].createElement(react_1["default"].Fragment, { key: "sidenav_1" },
            react_1["default"].createElement("a", { href: "", className: "usa-current" }, "Current page"),
            react_1["default"].createElement(react_uswds_14.SideNav, { isSubnav: true, items: __spreadArrays(Array(1).fill(react_1["default"].createElement("a", { href: "" }, "Child link")), [
                    react_1["default"].createElement(react_1["default"].Fragment, { key: "sidenav_1_1" },
                        react_1["default"].createElement("a", { href: "", className: "usa-current" }, "Child link"),
                        react_1["default"].createElement(react_uswds_14.SideNav, { isSubnav: true, items: __spreadArrays(Array(2).fill(react_1["default"].createElement("a", { href: "" }, "Grandchild link")), [
                                react_1["default"].createElement("a", { href: "", key: "sidenav_1_2", className: "usa-current" }, "Grandchild link"),
                                react_1["default"].createElement("a", { href: "", key: "sidenav_1_3" }, "Grandchild link"),
                            ]) }))
                ], Array(3).fill(react_1["default"].createElement("a", { href: "" }, "Child link"))) })),
        react_1["default"].createElement("a", { key: "sidenav_2", href: "" }, "Parent link"),
    ];
    var returnToTop = (react_1["default"].createElement(react_uswds_1.GridContainer, { className: "usa-footer__return-to-top" },
        react_1["default"].createElement("a", { href: "#" }, "Return to top")));
    var footerPrimary = (react_1["default"].createElement(react_uswds_11.FooterNav, { "aria-label": "Footer navigation", size: "medium", links: Array(5).fill(react_1["default"].createElement("a", { href: "javascript:void(0)", className: "usa-footer__primary-link" }, "Primary link")) }));
    var footerSecondary = (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_uswds_1.Grid, { row: true, gap: true },
            react_1["default"].createElement(react_uswds_12.Logo, { medium: true, image: react_1["default"].createElement("img", { className: "usa-footer__logo-img", src: logo_img_png_1["default"], alt: "" }), heading: react_1["default"].createElement("p", { className: "usa-footer__logo-heading" }, "Name of Agency") }),
            react_1["default"].createElement(react_uswds_1.Grid, { className: "usa-footer__contact-links", mobileLg: { col: 6 } },
                react_1["default"].createElement(react_uswds_13.SocialLinks, { links: [
                        react_1["default"].createElement("a", { key: "facebook", className: "usa-social-link usa-social-link--facebook", href: "javascript:void(0);" },
                            react_1["default"].createElement("span", null, "Facebook")),
                        react_1["default"].createElement("a", { key: "twitter", className: "usa-social-link usa-social-link--twitter", href: "javascript:void(0);" },
                            react_1["default"].createElement("span", null, "Twitter")),
                        react_1["default"].createElement("a", { key: "youtube", className: "usa-social-link usa-social-link--youtube", href: "javascript:void(0);" },
                            react_1["default"].createElement("span", null, "YouTube")),
                        react_1["default"].createElement("a", { key: "instagram", className: "usa-social-link usa-social-link--instagram", href: "#" },
                            react_1["default"].createElement("span", null, "Instagram")),
                        react_1["default"].createElement("a", { key: "rss", className: "usa-social-link usa-social-link--rss", href: "javascript:void(0);" },
                            react_1["default"].createElement("span", null, "RSS")),
                    ] }),
                react_1["default"].createElement("h3", { className: "usa-footer__contact-heading" }, "Agency Contact Center"),
                react_1["default"].createElement(react_uswds_9.Address, { medium: true, items: [
                        react_1["default"].createElement("a", { key: "telephone", href: "tel:1-800-555-5555" }, "(800) CALL-GOVT"),
                        react_1["default"].createElement("a", { key: "email", href: "mailto:info@agency.gov" }, "info@agency.gov"),
                    ] })))));
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("a", { className: "usa-skipnav", href: "#main-content" }, "Skip to main content"),
        react_1["default"].createElement(react_uswds_1.GovBanner, null),
        react_1["default"].createElement("div", { className: "usa-overlay " + (mobileNavOpen ? 'is-visible' : '') }),
        react_1["default"].createElement(react_uswds_2.Header, { basic: true },
            react_1["default"].createElement("div", { className: "usa-nav-container" },
                react_1["default"].createElement("div", { className: "usa-navbar" },
                    react_1["default"].createElement(react_uswds_3.Title, { id: "basic-logo" },
                        react_1["default"].createElement("a", { href: "/", title: "Home", "aria-label": "Home" }, "Project title")),
                    react_1["default"].createElement(react_uswds_6.NavMenuButton, { label: "Menu", onClick: toggleMobileNav, className: "usa-menu-btn" })),
                react_1["default"].createElement(react_uswds_8.PrimaryNav, { "aria-label": "Primary navigation", items: primaryNavItems, onToggleMobileNav: toggleMobileNav, mobileExpanded: mobileNavOpen },
                    react_1["default"].createElement(react_uswds_4.Search, { size: "small", onSubmit: handleSearch })))),
        react_1["default"].createElement("div", { className: "usa-section" },
            react_1["default"].createElement(react_uswds_1.GridContainer, null,
                react_1["default"].createElement(react_uswds_1.Grid, { row: true, gap: true },
                    react_1["default"].createElement(react_uswds_1.Grid, { className: "usa-layout-docs__sidenav", desktop: { col: 3 } },
                        react_1["default"].createElement("nav", { "aria-label": "Secondary navigation" },
                            react_1["default"].createElement(react_uswds_14.SideNav, { items: sideNavItems }))),
                    react_1["default"].createElement("main", { className: "usa-layout-docs__main desktop:grid-col-9 usa-prose usa-layout-docs", id: "main-content" },
                        react_1["default"].createElement("h1", null, "Page heading (h1)"),
                        react_1["default"].createElement("p", { className: "usa-intro" }, "The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct."),
                        react_1["default"].createElement("h2", { id: "section-heading-h2" }, "Section heading (h2)"),
                        react_1["default"].createElement("p", null, "These headings introduce, respectively, sections and subsections within your body copy. As you create these headings, follow the same guidelines that you use when writing section headings: Be succinct, descriptive, and precise."),
                        react_1["default"].createElement("h3", { id: "section-heading-h3" }, "Subsection heading (h3)"),
                        react_1["default"].createElement("p", null, "The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it\u2019s a good practice to follow the inverted pyramid structure when writing copy: Begin with the information that\u2019s most important to your users and then present information of less importance."),
                        react_1["default"].createElement("p", null, "Keep each section and subsection focused - a good approach is to include one theme (topic) per section."),
                        react_1["default"].createElement("h4", { id: "section-heading-h4" }, "Subsection heading (h4)"),
                        react_1["default"].createElement("p", null, "Use the side navigation menu to help your users quickly skip to different sections of your page. The menu is best suited to displaying a hierarchy with one to three levels and, as we mentioned, to display the sub-navigation of a given page."),
                        react_1["default"].createElement("p", null, "Read the full documentatino on our side navigation on the component page."))))),
        react_1["default"].createElement(react_uswds_10.Footer, { returnToTop: returnToTop, primary: footerPrimary, secondary: footerSecondary })));
};
