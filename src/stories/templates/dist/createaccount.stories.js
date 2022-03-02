"use strict";
exports.__esModule = true;
exports.CreateAccount = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = require("react");
var react_uswds_1 = require("@trussworks/react-uswds");
var logo_img_png_1 = require("uswds/src/img/logo-img.png");
var circle_gray_20_svg_1 = require("uswds/src/img/circle-gray-20.svg");
exports["default"] = {
    title: 'Page Templates/Authentication Pages',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: "\n    Page templates\n    "
            }
        }
    }
};
var returnToTop = (react_1["default"].createElement(react_uswds_1.GridContainer, { className: "usa-footer__return-to-top" },
    react_1["default"].createElement("a", { href: "#" }, "Return to top")));
var footerPrimary = (react_1["default"].createElement(react_uswds_1.FooterNav, { "aria-label": "Footer navigation", size: "medium", links: Array(5).fill(react_1["default"].createElement("a", { href: "javascript:void(0);", className: "usa-footer__primary-link" }, "Primary link")) }));
var footerSecondary = (react_1["default"].createElement(react_1["default"].Fragment, null,
    react_1["default"].createElement(react_uswds_1.Grid, { row: true, gap: true },
        react_1["default"].createElement(react_uswds_1.Logo, { medium: true, image: react_1["default"].createElement("img", { className: "usa-footer__logo-img", src: logo_img_png_1["default"], alt: "" }), heading: react_1["default"].createElement("p", { className: "usa-footer__logo-heading" }, "Name of Agency") }),
        react_1["default"].createElement(react_uswds_1.Grid, { className: "usa-footer__contact-links", mobileLg: { col: 6 } },
            react_1["default"].createElement(react_uswds_1.SocialLinks, { links: [
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
            react_1["default"].createElement(react_uswds_1.Address, { medium: true, items: [
                    react_1["default"].createElement("a", { key: "telephone", href: "tel:1-800-555-5555" }, "(800) CALL-GOVT"),
                    react_1["default"].createElement("a", { key: "email", href: "mailto:info@agency.gov" }, "info@agency.gov"),
                ] })))));
var checkboxLabel = (react_1["default"].createElement(react_1["default"].Fragment, null,
    "I agree to the ",
    react_1["default"].createElement("a", { href: "javascript:void(0);" }, "terms and conditions"),
    ".",
    ' ',
    react_1["default"].createElement("abbr", { title: "required", className: "usa-hint usa-hint--required" }, "*")));
var identifierLinksText = [
    'About <Parent shortname>',
    'Accessibility support',
    'FOIA requests',
    'No FEAR Act data',
    'Office of the Inspector General',
    'Performance reports',
    'Privacy policy',
];
var mockSubmit = function () {
    /* Blank function for mocking form submission */
};
exports.CreateAccount = function () {
    var _a = react_1["default"].useState(false), showPassword = _a[0], setShowPassword = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("a", { className: "usa-skipnav", href: "#main-content" }, "Skip to main content"),
        react_1["default"].createElement(react_uswds_1.GovBanner, null),
        react_1["default"].createElement(react_uswds_1.Header, { extended: true },
            react_1["default"].createElement("div", { className: "usa-navbar" },
                react_1["default"].createElement(react_uswds_1.Title, { id: "extended-logo" },
                    react_1["default"].createElement("a", { href: "/", title: "Home", "aria-label": "Home" }, "Project title")))),
        react_1["default"].createElement("main", { id: "main-content" },
            react_1["default"].createElement("div", { className: "bg-base-lightest" },
                react_1["default"].createElement(react_uswds_1.GridContainer, { className: "usa-section" },
                    react_1["default"].createElement(react_uswds_1.Grid, { row: true, className: "margin-x-neg-205 flex-justify-center" },
                        react_1["default"].createElement(react_uswds_1.Grid, { col: 12, mobileLg: { col: 10 }, tablet: { col: 8 }, desktop: { col: 6 }, className: "padding-x-205 margin-bottom-4" },
                            react_1["default"].createElement("h1", { className: "desktop:display-none font-sans-lg margin-bottom-4 tablet:margin-top-neg-3" }, "A tagline that explains the benefit of creating an account."),
                            react_1["default"].createElement("div", { className: "bg-white padding-y-3 padding-x-5 border border-base-lighter" },
                                react_1["default"].createElement("h1", { className: "margin-bottom-0" }, "Create account"),
                                react_1["default"].createElement(react_uswds_1.Form, { onSubmit: mockSubmit },
                                    react_1["default"].createElement(react_uswds_1.Fieldset, { legend: "Get started with an account." },
                                        react_1["default"].createElement("p", null,
                                            react_1["default"].createElement("abbr", { title: "required", className: "usa-hint usa-hint--required" }, "*"),
                                            ' ',
                                            "indicates a required field."),
                                        react_1["default"].createElement(react_uswds_1.Label, { htmlFor: "email" },
                                            "Email address",
                                            ' ',
                                            react_1["default"].createElement("abbr", { title: "required", className: "usa-label--required" }, "*")),
                                        react_1["default"].createElement(react_uswds_1.TextInput, { id: "email", name: "email", type: "email", autoCapitalize: "off", autoCorrect: "off", required: true }),
                                        react_1["default"].createElement(react_uswds_1.Label, { htmlFor: "password-create-account" },
                                            "Create password",
                                            ' ',
                                            react_1["default"].createElement("abbr", { title: "required", className: "usa-label--required" }, "*")),
                                        react_1["default"].createElement(react_uswds_1.TextInput, { id: "password-create-account", name: "password", type: showPassword ? 'text' : 'password', autoCapitalize: "off", autoCorrect: "off", required: true }),
                                        react_1["default"].createElement("p", { className: "usa-form__note" },
                                            react_1["default"].createElement("a", { title: "Show password", href: "javascript:void(0);", className: "usa-show-password", "aria-controls": "password-create-account password-create-account-confirm", onClick: function () {
                                                    return setShowPassword(function (showPassword) { return !showPassword; });
                                                } }, showPassword ? 'Hide password' : 'Show password')),
                                        react_1["default"].createElement(react_uswds_1.Label, { htmlFor: "password-create-account-confirm" },
                                            "Re-type password",
                                            ' ',
                                            react_1["default"].createElement("abbr", { title: "required", className: "usa-label--required" }, "*")),
                                        react_1["default"].createElement(react_uswds_1.TextInput, { id: "password-create-account-confirm", name: "password-confirm", type: showPassword ? 'text' : 'password', autoCapitalize: "off", autoCorrect: "off", required: true }),
                                        react_1["default"].createElement(react_uswds_1.Checkbox, { id: "terms-and-conditions", name: "terms-and-conditions", className: "margin-y-3", required: true, label: checkboxLabel }),
                                        react_1["default"].createElement(react_uswds_1.Button, { type: "submit" }, "Create account")))),
                            react_1["default"].createElement("p", { className: "text-center" },
                                "Already have an account?",
                                ' ',
                                react_1["default"].createElement(react_uswds_1.Link, { href: "javascript:void(0);" }, "Sign in"),
                                ".")),
                        react_1["default"].createElement(react_uswds_1.Grid, { col: 12, mobileLg: { col: 10 }, tablet: { col: 8 }, desktop: { col: 6 }, className: "padding-x-205" },
                            react_1["default"].createElement("div", { className: "border-top border-base-lighter padding-top-4 desktop:border-0 desktop:padding-top-0" },
                                react_1["default"].createElement("h2", { className: "display-none desktop:display-block" }, "A tagline that explains the benefit of creating an account."),
                                react_1["default"].createElement("div", { className: "usa-prose" },
                                    react_1["default"].createElement("p", null, "Here\u2019s space for a longer description to introduce 3-5 easily scannable bullet points. Note that on mobile, this text block will bump below the Create Account form."),
                                    react_1["default"].createElement("section", { className: "usa-graphic-list" },
                                        react_1["default"].createElement("div", { className: "usa-graphic-list__row" }, Array.from(Array(3), function (_, idx) { return (react_1["default"].createElement("div", { className: "usa-media-block margin-y-2", key: idx },
                                            react_1["default"].createElement("img", { className: "usa-media-block__img height-7 width-7", src: circle_gray_20_svg_1["default"], alt: "Alt text" }),
                                            react_1["default"].createElement("div", { className: "usa-media-block__body" },
                                                react_1["default"].createElement("p", null,
                                                    react_1["default"].createElement("strong", null,
                                                        "Value proposition ",
                                                        idx + 1,
                                                        ":"),
                                                    ' ',
                                                    "Vivamus nec velit sed leo scelerisque laoreet vestibulum.")))); })))),
                                react_1["default"].createElement("div", { className: "border-top border-base-lighter margin-top-3 padding-top-1" },
                                    react_1["default"].createElement("h2", null, "Are you a federal employee?"),
                                    react_1["default"].createElement("div", { className: "usa-prose" },
                                        react_1["default"].createElement("p", null, "If you are a federal employee or [other secondary user], please use [secondary Single Sign On (SSO)]."),
                                        react_1["default"].createElement("p", null,
                                            react_1["default"].createElement(react_uswds_1.Button, { type: "button", outline: true }, "Launch secondary SSO")))))))))),
        react_1["default"].createElement(react_uswds_1.Footer, { returnToTop: returnToTop, primary: footerPrimary, secondary: footerSecondary }),
        react_1["default"].createElement(react_uswds_1.Identifier, null,
            react_1["default"].createElement(react_uswds_1.IdentifierMasthead, { "aria-label": "Agency identifier" },
                react_1["default"].createElement(react_uswds_1.IdentifierLogos, null,
                    react_1["default"].createElement(react_uswds_1.IdentifierLogo, { href: "#" },
                        react_1["default"].createElement("img", { className: "usa-identifier__logo-img", src: circle_gray_20_svg_1["default"], alt: "<Parent agency> logo" }))),
                react_1["default"].createElement(react_uswds_1.IdentifierIdentity, { domain: "domain.gov" },
                    "An official website of the ",
                    react_1["default"].createElement(react_uswds_1.Link, { href: "#" }, "<Parent agency>"))),
            react_1["default"].createElement(react_uswds_1.IdentifierLinks, { navProps: { 'aria-label': 'Important links' } }, identifierLinksText.map(function (text, idx) { return (react_1["default"].createElement(react_uswds_1.IdentifierLinkItem, { key: idx },
                react_1["default"].createElement(react_uswds_1.IdentifierLink, { href: "#" }, text))); })),
            react_1["default"].createElement(react_uswds_1.IdentifierGov, { "aria-label": "U.S. government information and services" },
                react_1["default"].createElement("div", { className: "usa-identifier__usagov-description" }, "Looking for U.S. government information and services?"),
                "\u00A0",
                react_1["default"].createElement(react_uswds_1.Link, { href: "https://www.usa.gov/", className: "usa-link" }, "Visit USA.gov")))));
};
