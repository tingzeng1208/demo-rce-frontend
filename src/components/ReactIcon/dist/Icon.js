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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.IconBeddingSvg = exports.IconAccessibilityNew = exports.ReactMakeIcon = exports.CustomIconProps = exports.CustomIcon = void 0;
var classnames_1 = require("classnames");
var react_1 = require("react");
var accessible_forward_svg_1 = require("../../../node_modules/uswds/dist/img/usa-icons/accessible_forward.svg");
var bedding_svg_1 = require("uswds/dist/img/usa-icons/bedding.svg");
// export const ReactMakeIcon =({
//   component: string,
//   props: Iconprops
// }): JSX.Element  =>{
//     // return <testIcon />
//     // return <div />
//     return <component />
//   }
var CustomIcon = /** @class */ (function (_super) {
    __extends(CustomIcon, _super);
    function CustomIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomIcon.prototype.render = function () {
        return React.createElement("img", { src: accessible_forward_svg_1["default"] });
    };
    return CustomIcon;
}(react_1.Component));
exports.CustomIcon = CustomIcon;
var CustomIconProps = /** @class */ (function (_super) {
    __extends(CustomIconProps, _super);
    function CustomIconProps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomIconProps.prototype.render = function () {
        var _a;
        var _b = this.props, size = _b.size, className = _b.className, _c = _b.focusable, focusable = _c === void 0 ? false : _c, _d = _b.role, role = _d === void 0 ? 'img' : _d, iconProps = __rest(_b, ["size", "className", "focusable", "role"]);
        var fixSize = size === undefined ? 4 : size;
        var classes = classnames_1["default"]('usa-icon', (_a = {},
            _a["usa-icon--size-" + fixSize] = fixSize !== undefined,
            _a), className);
        var finalProps = __assign({ className: classes, focusable: focusable,
            role: role }, iconProps);
        return React.createElement("img", __assign({ src: this.props.src }, finalProps));
    };
    return CustomIconProps;
}(react_1.Component));
exports.CustomIconProps = CustomIconProps;
function ReactMakeIcon(source) {
    return function (props) {
        var _a;
        var size = props.size, className = props.className, _b = props.focusable, focusable = _b === void 0 ? false : _b, _c = props.role, role = _c === void 0 ? 'img' : _c, iconProps = __rest(props, ["size", "className", "focusable", "role"]);
        var fixSize = size === undefined ? 4 : size;
        var classes = classnames_1["default"]('usa-icon', (_a = {},
            _a["usa-icon--size-" + fixSize] = fixSize !== undefined,
            _a), className);
        var finalProps = __assign({ className: classes, focusable: focusable,
            role: role }, iconProps);
        return React.createElement("img", __assign({ src: source }, finalProps));
    };
}
exports.ReactMakeIcon = ReactMakeIcon;
exports.IconAccessibilityNew = ReactMakeIcon(accessible_forward_svg_1["default"]);
exports.IconBeddingSvg = ReactMakeIcon(bedding_svg_1["default"]);
