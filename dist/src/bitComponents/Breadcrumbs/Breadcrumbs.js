"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CustomizedBreadcrumbs;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Breadcrumbs = _interopRequireDefault(require("@material-ui/core/Breadcrumbs"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _Home = _interopRequireDefault(require("@material-ui/icons/Home"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledBreadcrumb = (0, _styles.withStyles)(function (theme) {
  return {
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300]
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: (0, _styles.emphasize)(theme.palette.grey[300], 0.12)
      }
    }
  };
})(_Chip.default); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function CustomizedBreadcrumbs() {
  return _react.default.createElement(_Breadcrumbs.default, {
    "aria-label": "breadcrumb"
  }, _react.default.createElement(StyledBreadcrumb, {
    component: "a",
    href: "#",
    label: "Home",
    icon: _react.default.createElement(_Home.default, {
      fontSize: "small"
    }),
    onClick: handleClick
  }), _react.default.createElement(StyledBreadcrumb, {
    component: "a",
    href: "#",
    label: "Catalog",
    onClick: handleClick
  }), _react.default.createElement(StyledBreadcrumb, {
    label: "Accessories",
    deleteIcon: _react.default.createElement(_ExpandMore.default, null),
    onClick: handleClick,
    onDelete: handleClick
  }));
}

//# sourceMappingURL=Breadcrumbs.js.map