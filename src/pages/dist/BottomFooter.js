"use strict";
exports.__esModule = true;
exports.BottomFooter = void 0;
var react_1 = require("react");
var logo_img_png_1 = require("uswds/src/img/logo-img.png");
var react_uswds_1 = require("@trussworks/react-uswds");
/** FOOTER */
var react_uswds_2 = require("@trussworks/react-uswds");
var react_uswds_3 = require("@trussworks/react-uswds");
var react_uswds_4 = require("@trussworks/react-uswds");
var react_uswds_5 = require("@trussworks/react-uswds");
var react_uswds_6 = require("@trussworks/react-uswds");
exports.BottomFooter = function () {
    var returnToTop = (react_1["default"].createElement(react_uswds_1.GridContainer, { className: "usa-footer__return-to-top" },
        react_1["default"].createElement("a", { href: "#" }, "Return to top")));
    var footerPrimary = (react_1["default"].createElement(react_uswds_4.FooterNav, { "aria-label": "Footer navigation", size: "medium", links: Array(5).fill(react_1["default"].createElement("a", { href: "javascript:void(0)", className: "usa-footer__primary-link" }, "Primary link")) }));
    var footerSecondary = (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_uswds_1.Grid, { row: true, gap: true },
            react_1["default"].createElement(react_uswds_5.Logo, { medium: true, image: react_1["default"].createElement("img", { className: "usa-footer__logo-img", src: logo_img_png_1["default"], alt: "" }), heading: react_1["default"].createElement("p", { className: "usa-footer__logo-heading" }, "FEMA") }),
            react_1["default"].createElement(react_uswds_1.Grid, { className: "usa-footer__contact-links", mobileLg: { col: 6 } },
                react_1["default"].createElement(react_uswds_6.SocialLinks, { links: [
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
                react_1["default"].createElement(react_uswds_2.Address, { medium: true, items: [
                        react_1["default"].createElement("a", { key: "telephone", href: "tel:1-800-555-5555" }, "(800) CALL-GOVT"),
                        react_1["default"].createElement("a", { key: "email", href: "mailto:info@agency.gov" }, "info@agency.gov"),
                    ] })))));
    return (react_1["default"].createElement(react_uswds_3.Footer, { returnToTop: returnToTop, primary: footerPrimary, secondary: footerSecondary }));
};
