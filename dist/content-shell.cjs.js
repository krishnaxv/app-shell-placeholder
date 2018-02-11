'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  0% {\n    background-position: 20% 0\n  }\n\n  100% {\n    background-position: -100% 0\n  }\n'], ['\n  0% {\n    background-position: 20% 0\n  }\n\n  100% {\n    background-position: -100% 0\n  }\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  border-radius: 50%;\n  background: #eee;\n  background: linear-gradient(to right, #eee 8%, #ddd 32%, #eee 48%);\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n'], ['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  border-radius: 50%;\n  background: #eee;\n  background: linear-gradient(to right, #eee 8%, #ddd 32%, #eee 48%);\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n']);

var RADIUS = 64;

var flash = styled.keyframes(_templateObject);

var Wrapper = styled__default.div(_templateObject2, function (props) {
  return props.radius || RADIUS;
}, function (props) {
  return props.radius || RADIUS;
}, function (props) {
  return props.radius || RADIUS;
}, flash);

var Circle = function Circle(props) {
  return React.createElement(Wrapper, props);
};

var _templateObject$1 = taggedTemplateLiteral(['\n  0% {\n    background-position: 20% 0\n  }\n\n  100% {\n    background-position: -100% 0\n  }\n'], ['\n  0% {\n    background-position: 20% 0\n  }\n\n  100% {\n    background-position: -100% 0\n  }\n']);
var _templateObject2$1 = taggedTemplateLiteral(['\n  width: ', ';\n  height: ', 'px;\n  background: #eee;\n  background: linear-gradient(to right, #eee 8%, #ddd 32%, #eee 48%);\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n'], ['\n  width: ', ';\n  height: ', 'px;\n  background: #eee;\n  background: linear-gradient(to right, #eee 8%, #ddd 32%, #eee 48%);\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n']);

var HEIGHT = 14;
var WIDTH = '100%';
var UNIT = 'px';

var flash$1 = styled.keyframes(_templateObject$1);

var Wrapper$1 = styled__default.div(_templateObject2$1, function (props) {
  return '' + props.width + (props.unit || UNIT) || WIDTH;
}, function (props) {
  return props.height || HEIGHT;
}, flash$1);

var Rectangle = function Rectangle(props) {
  return React.createElement(Wrapper$1, props);
};

var _templateObject$2 = taggedTemplateLiteral(['\n  0% {\n    background-position: 20% 0\n  }\n\n  100% {\n    background-position: -100% 0\n  }\n'], ['\n  0% {\n    background-position: 20% 0\n  }\n\n  100% {\n    background-position: -100% 0\n  }\n']);
var _templateObject2$2 = taggedTemplateLiteral(['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  background: #eee;\n  background: linear-gradient(to right, #eee 8%, #ddd 32%, #eee 48%);\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n'], ['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  background: #eee;\n  background: linear-gradient(to right, #eee 8%, #ddd 32%, #eee 48%);\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n']);

var LENGTH = 64;

var flash$2 = styled.keyframes(_templateObject$2);

var Wrapper$2 = styled__default.div(_templateObject2$2, function (props) {
  return props.length || LENGTH;
}, function (props) {
  return props.length || LENGTH;
}, function (props) {
  return props.length || LENGTH;
}, flash$2);

var Square = function Square(props) {
  return React.createElement(Wrapper$2, props);
};

var _templateObject$3 = taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']);
var _templateObject2$3 = taggedTemplateLiteral(['\n  margin-right: 16px;\n'], ['\n  margin-right: 16px;\n']);
var _templateObject3 = taggedTemplateLiteral(['\n  width: 100%;\n\n  > div {\n    margin-bottom: 4px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n'], ['\n  width: 100%;\n\n  > div {\n    margin-bottom: 4px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n']);

var Wrapper$3 = styled__default.div(_templateObject$3);

var CircleWrapper = styled__default(Circle)(_templateObject2$3);

var RectangleWrapper = styled__default.div(_templateObject3);

var Post = function Post(props) {
  return React.createElement(
    Wrapper$3,
    null,
    React.createElement(CircleWrapper, null),
    React.createElement(
      RectangleWrapper,
      null,
      React.createElement(Rectangle, { width: 70, unit: '%' }),
      React.createElement(Rectangle, { width: 90, unit: '%' }),
      React.createElement(Rectangle, null),
      React.createElement(Rectangle, { width: 50, unit: '%' }),
      React.createElement(Rectangle, { width: 70, unit: '%' })
    )
  );
};

var img = new Image();img.src = 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41eiIvPgo8L3N2Zz4=';

var _templateObject$4 = taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n']);
var _templateObject2$4 = taggedTemplateLiteral(['\n  width: 64px;\n  height: 64px;\n  margin-bottom: 16px;\n'], ['\n  width: 64px;\n  height: 64px;\n  margin-bottom: 16px;\n']);
var _templateObject3$1 = taggedTemplateLiteral(['\n  width: 100%;\n\n  > div {\n    margin-bottom: 4px;\n  }\n'], ['\n  width: 100%;\n\n  > div {\n    margin-bottom: 4px;\n  }\n']);

var Wrapper$4 = styled__default.div(_templateObject$4);

var Image$1 = styled__default.img(_templateObject2$4);

var Article = styled__default.article(_templateObject3$1);

var Blog = function Blog(props) {
  return React.createElement(
    Wrapper$4,
    null,
    React.createElement(Image$1, { src: img }),
    React.createElement(
      Article,
      null,
      React.createElement(Rectangle, { width: 70, unit: '%' }),
      React.createElement(Rectangle, { width: 90, unit: '%' }),
      React.createElement(Rectangle, null),
      React.createElement(Rectangle, { width: 80, unit: '%' }),
      React.createElement(Rectangle, { width: 70, unit: '%' }),
      React.createElement(Rectangle, null),
      React.createElement(Rectangle, { width: 60, unit: '%' }),
      React.createElement(Rectangle, { width: 70, unit: '%' }),
      React.createElement(Rectangle, { width: 90, unit: '%' }),
      React.createElement(Rectangle, { width: 30, unit: '%' }),
      React.createElement(Rectangle, null),
      React.createElement(Rectangle, { width: 50, unit: '%' }),
      React.createElement(Rectangle, { width: 70, unit: '%' })
    )
  );
};

exports.Circle = Circle;
exports.Rectangle = Rectangle;
exports.Square = Square;
exports.Post = Post;
exports.Blog = Blog;
