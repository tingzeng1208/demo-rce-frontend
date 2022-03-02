"use strict";
exports.__esModule = true;
exports.StartingPage = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var logo_img_png_1 = require("uswds/src/img/logo-img.png");
var circle_124_png_1 = require("uswds/src/img/circle-124.png");
var react_uswds_1 = require("@trussworks/react-uswds");
var react_uswds_2 = require("@trussworks/react-uswds");
var react_uswds_3 = require("@trussworks/react-uswds");
/** FOOTER */
var react_uswds_4 = require("@trussworks/react-uswds");
var react_uswds_5 = require("@trussworks/react-uswds");
var react_uswds_6 = require("@trussworks/react-uswds");
var react_uswds_7 = require("@trussworks/react-uswds");
exports.StartingPage = function () {
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
            react_1["default"].createElement(react_uswds_3.NavDropDownButton, { menuId: "extended-nav-section-one", isOpen: navDropdownOpen[0], label: "Current section", onToggle: function () {
                    handleToggleNavDropdown(0);
                }, isCurrent: true }),
            react_1["default"].createElement(react_uswds_2.Menu, { id: "extended-nav-section-one", items: new Array(3).fill(react_1["default"].createElement("a", { href: "/sample-application" }, "Sample Application")), isOpen: navDropdownOpen[0] })),
        react_1["default"].createElement(react_1["default"].Fragment, { key: "primaryNav_1" },
            react_1["default"].createElement(react_uswds_3.NavDropDownButton, { menuId: "extended-nav-section-two", isOpen: navDropdownOpen[1], label: "Section", onToggle: function () {
                    handleToggleNavDropdown(1);
                } }),
            react_1["default"].createElement(react_uswds_2.Menu, { id: "extended-nav-section-two", items: new Array(3).fill(react_1["default"].createElement("a", { href: "#" }, "Navigation link")), isOpen: navDropdownOpen[1] })),
        react_1["default"].createElement("a", { key: "primaryNav_2", className: "usa-nav__link", href: "sample-application" },
            react_1["default"].createElement("span", null, "Sample Application")),
    ];
    var secondaryNavItems = [
        react_1["default"].createElement("a", { key: "secondaryNav_0", href: "" }, "Secondary link"),
        react_1["default"].createElement("a", { key: "secondaryNav_1", href: "" }, "Another secondary link"),
    ];
    var returnToTop = (react_1["default"].createElement(react_uswds_1.GridContainer, { className: "usa-footer__return-to-top" },
        react_1["default"].createElement("a", { href: "#" }, "Return to top")));
    var footerPrimary = (react_1["default"].createElement(react_uswds_5.FooterNav, { "aria-label": "Footer navigation", size: "medium", links: Array(5).fill(react_1["default"].createElement("a", { href: "javascript:void(0)", className: "usa-footer__primary-link" }, "Primary link")) }));
    var footerSecondary = (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_uswds_1.Grid, { row: true, gap: true },
            react_1["default"].createElement(react_uswds_6.Logo, { medium: true, image: react_1["default"].createElement("img", { className: "usa-footer__logo-img", src: logo_img_png_1["default"], alt: "" }), heading: react_1["default"].createElement("p", { className: "usa-footer__logo-heading" }, "FEMA") }),
            react_1["default"].createElement(react_uswds_1.Grid, { className: "usa-footer__contact-links", mobileLg: { col: 6 } },
                react_1["default"].createElement(react_uswds_7.SocialLinks, { links: [
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
                react_1["default"].createElement(react_uswds_4.Address, { medium: true, items: [
                        react_1["default"].createElement("a", { key: "telephone", href: "tel:1-800-555-5555" }, "(800) CALL-GOVT"),
                        react_1["default"].createElement("a", { key: "email", href: "mailto:info@agency.gov" }, "info@agency.gov"),
                    ] })))));
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("main", { id: "main-content" },
            react_1["default"].createElement("section", { className: "usa-hero", "aria-label": "Introduction" },
                react_1["default"].createElement(react_uswds_1.GridContainer, null,
                    react_1["default"].createElement("div", { className: "usa-hero__callout" },
                        react_1["default"].createElement("h1", { className: "usa-hero__heading" },
                            react_1["default"].createElement("span", { className: "usa-hero__heading--alt" }, "Hero callout:"),
                            "Bring attention to a project priority"),
                        react_1["default"].createElement("p", null, "Support the callout with some short explanatory text. You don\u2019t need more than a couple of sentences."),
                        react_1["default"].createElement("a", { className: "usa-button", href: "javascript:void(0)" }, "Call to action")))),
            react_1["default"].createElement("section", { className: "grid-container usa-section" },
                react_1["default"].createElement(react_uswds_1.Grid, { row: true, gap: true },
                    react_1["default"].createElement(react_uswds_1.Grid, { tablet: { col: 4 } },
                        react_1["default"].createElement("h2", { className: "font-heading-xl margin-top-0 tablet:margin-bottom-0" }, "A tagline highlights your approach")),
                    react_1["default"].createElement(react_uswds_1.Grid, { tablet: { col: 8 }, className: "usa-prose" },
                        react_1["default"].createElement("p", null, "The tagline should inspire confidence and interest, focusing on the value that your overall approach offers to your audience. Use a heading typeface and keep your tagline to just a few words, and don\u2019t confuse or mystify."),
                        react_1["default"].createElement("p", null, "Use the right side of the grid to explain the tagline a bit more. What are your goals? How do you do your work? Write in the present tense, and stay brief here. People who are interested can find details on internal pages.")))),
            react_1["default"].createElement("section", { className: "usa-graphic-list usa-section usa-section--dark" },
                react_1["default"].createElement(react_uswds_1.GridContainer, null,
                    react_1["default"].createElement(react_uswds_1.Grid, { row: true, gap: true, className: "usa-graphic-list__row" },
                        react_1["default"].createElement(react_uswds_1.Grid, { tablet: { col: true }, className: "usa-media-block" },
                            react_1["default"].createElement("img", { className: "usa-media-block__img", src: circle_124_png_1["default"], alt: "Alt text" }),
                            react_1["default"].createElement("div", { className: "usa-media-block__body" },
                                react_1["default"].createElement("h2", { className: "usa-graphic-list__heading" }, "Graphic headings can vary."),
                                react_1["default"].createElement("p", null, "Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight your values, specific program areas, or results."))),
                        react_1["default"].createElement(react_uswds_1.Grid, { tablet: { col: true }, className: "usa-media-block" },
                            react_1["default"].createElement("img", { className: "usa-media-block__img", src: circle_124_png_1["default"], alt: "Alt text" }),
                            react_1["default"].createElement("div", { className: "usa-media-block__body" },
                                react_1["default"].createElement("h2", { className: "usa-graphic-list__heading" }, "Stick to 6 or fewer words."),
                                react_1["default"].createElement("p", null, "Keep body text to about 30 words. They can be shorter, but try to be somewhat balanced across all four. It creates a clean appearance with good spacing.")))),
                    react_1["default"].createElement(react_uswds_1.Grid, { row: true, gap: true, className: "usa-graphic-list__row" },
                        react_1["default"].createElement(react_uswds_1.Grid, { tablet: { col: true }, className: "usa-media-block" },
                            react_1["default"].createElement("img", { className: "usa-media-block__img", src: circle_124_png_1["default"], alt: "Alt text" }),
                            react_1["default"].createElement("div", { className: "usa-media-block__body" },
                                react_1["default"].createElement("h2", { className: "usa-graphic-list__heading" }, "Never highlight anything without a goal."),
                                react_1["default"].createElement("p", null, "For anything you want to highlight here, understand what your users know now, and what activity or impression you want from them after they see it."))),
                        react_1["default"].createElement(react_uswds_1.Grid, { tablet: { col: true }, className: "usa-media-block" },
                            react_1["default"].createElement("img", { className: "usa-media-block__img", src: circle_124_png_1["default"], alt: "Alt text" }),
                            react_1["default"].createElement("div", { className: "usa-media-block__body" },
                                react_1["default"].createElement("h2", { className: "usa-graphic-list__heading" }, "Could also have 2 or 6."),
                                react_1["default"].createElement("p", null, "In addition to your goal, find out your users\u2019 goals. What do they want to know or do that supports your mission? Use these headings to show these.")))))),
            react_1["default"].createElement("section", { id: "test-section-id", className: "usa-section" },
                react_1["default"].createElement(react_uswds_1.GridContainer, null,
                    react_1["default"].createElement("h2", { className: "font-heading-xl margin-y-0" }, "Section heading"),
                    react_1["default"].createElement("p", { className: "usa-intro" }, "Everything up to this point should help people understand your agency or project: who you are, your goal or mission, and how you approach it. Use this section to encourage them to act. Describe why they should get in touch here, and use an active verb on the button below. \u201CGet in touch,\u201D \u201CLearn more,\u201D and so on."),
                    react_1["default"].createElement("a", { href: "#", className: "usa-button usa-button--big" }, "Call to action"))))));
};
