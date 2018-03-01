'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var lodash = require('lodash');

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};









var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  0% {\n    background-position: 50% 0\n  }\n  100% {\n    background-position: -50% 0\n  }\n'], ['\n  0% {\n    background-position: 50% 0\n  }\n  100% {\n    background-position: -50% 0\n  }\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  border-radius: 50%;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear 0s infinite forwards ', ';\n'], ['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  border-radius: 50%;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear 0s infinite forwards ', ';\n']);

// Animation
var flash = styled.keyframes(_templateObject);

// Circle wrapper
var Wrapper = styled__default.div(_templateObject2, function (props) {
  return props.radius;
}, function (props) {
  return props.radius;
}, function (props) {
  return props.radius;
}, function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      colorStop = _ref.colorStop;
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 18%, ' + backgroundColor + ' 33%)';
}, flash);

/**
 * Circle is a *primitive* component of app shell placeholder.
 * @class Circle
 * @extends {Component}
 */

var Circle = function (_Component) {
  inherits(Circle, _Component);

  function Circle() {
    classCallCheck(this, Circle);
    return possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
  }

  createClass(Circle, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(Wrapper, this.props);
    }
  }]);
  return Circle;
}(React.Component);

Circle.propTypes = {
  /** Background color of circle. */
  backgroundColor: PropTypes.string,
  /** Color stop value of linear gradient. */
  colorStop: PropTypes.string,
  /** Radius of circle (in px). */
  radius: PropTypes.number
};
Circle.defaultProps = {
  backgroundColor: '#eee',
  colorStop: '#ddd',
  radius: 64
};

var _templateObject$1 = taggedTemplateLiteral(['\n  0% {\n    background-position: 50% 0;\n  }\n  100% {\n    background-position: -50% 0;\n  }\n'], ['\n  0% {\n    background-position: 50% 0;\n  }\n  100% {\n    background-position: -50% 0;\n  }\n']);
var _templateObject2$1 = taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear 0s infinite forwards normal ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear 0s infinite forwards normal ', ';\n']);

// Animation
var flash$1 = styled.keyframes(_templateObject$1);

// Rectangle wrapper
var Wrapper$1 = styled__default.div(_templateObject2$1, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      colorStop = _ref.colorStop;
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 18%, ' + backgroundColor + ' 33%)';
}, flash$1);

/**
 * Rectangle is a *primitive* component of app shell placeholder.
 * @class Rectangle
 * @extends {Component}
 */

var Rectangle = function (_Component) {
  inherits(Rectangle, _Component);

  function Rectangle() {
    classCallCheck(this, Rectangle);
    return possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).apply(this, arguments));
  }

  createClass(Rectangle, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(Wrapper$1, this.props);
    }
  }]);
  return Rectangle;
}(React.Component);

Rectangle.propTypes = {
  /** Background color of rectangle. */
  backgroundColor: PropTypes.string,
  /** Color stop value of linear gradient. */
  colorStop: PropTypes.string,
  /** Height of rectangle. */
  height: PropTypes.string,
  /** Width of rectangle. */
  width: PropTypes.string
};
Rectangle.defaultProps = {
  backgroundColor: '#eee',
  colorStop: '#ddd',
  height: '14px',
  width: '100%'
};

var _templateObject$2 = taggedTemplateLiteral(['\n  0% {\n    background-position: 50% 0\n  }\n  100% {\n    background-position: -50% 0\n  }\n'], ['\n  0% {\n    background-position: 50% 0\n  }\n  100% {\n    background-position: -50% 0\n  }\n']);
var _templateObject2$2 = taggedTemplateLiteral(['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear 0s infinite forwards ', ';\n'], ['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear 0s infinite forwards ', ';\n']);

// Animation
var flash$2 = styled.keyframes(_templateObject$2);

// Square wrapper
var Wrapper$2 = styled__default.div(_templateObject2$2, function (props) {
  return props.length;
}, function (props) {
  return props.length;
}, function (props) {
  return props.length;
}, function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      colorStop = _ref.colorStop;
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 18%, ' + backgroundColor + ' 33%)';
}, flash$2);

/**
 * Square is a *primitive* component of app shell placeholder.
 * @class Square
 * @extends {Component}
 */

var Square = function (_Component) {
  inherits(Square, _Component);

  function Square() {
    classCallCheck(this, Square);
    return possibleConstructorReturn(this, (Square.__proto__ || Object.getPrototypeOf(Square)).apply(this, arguments));
  }

  createClass(Square, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(Wrapper$2, this.props);
    }
  }]);
  return Square;
}(React.Component);

Square.propTypes = {
  /** Background color of square. */
  backgroundColor: PropTypes.string,
  /** Color stop value of linear gradient. */
  colorStop: PropTypes.string,
  /** Length of side of square (in px). */
  length: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Square.defaultProps = {
  backgroundColor: '#eee',
  colorStop: '#ddd',
  length: 64
};

// Primitive building block for Text
/**
 * Text is a *derived* component of app shell placeholder.
 * @class Text
 * @extends {Component}
 */

var Text = function (_Component) {
  inherits(Text, _Component);

  function Text() {
    classCallCheck(this, Text);
    return possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  createClass(Text, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(Rectangle, this.props);
    }
  }]);
  return Text;
}(React.Component);

Text.propTypes = {
  /** Background color of text block. */
  backgroundColor: PropTypes.string,
  /** Color stop value of linear gradient. */
  colorStop: PropTypes.string,
  /** Height of text block. */
  height: PropTypes.string,
  /** Width of text block. */
  width: PropTypes.string
};
Text.defaultProps = {
  backgroundColor: '#eee',
  colorStop: '#ddd',
  height: '14px',
  width: '100%'
};

var _templateObject$3 = taggedTemplateLiteral(['\n  width: 100%;\n\n  > div {\n    margin-bottom: 4px;\n  }\n'], ['\n  width: 100%;\n\n  > div {\n    margin-bottom: 4px;\n  }\n']);

// Primitive building block for Paragraph
// Paragraph wrapper
var Wrapper$3 = styled__default.div(_templateObject$3);

/**
 * Paragraph is a *derived* component of app shell placeholder.
 * @class Paragraph
 * @extends {Component}
 */

var Paragraph = function (_Component) {
  inherits(Paragraph, _Component);

  function Paragraph() {
    classCallCheck(this, Paragraph);
    return possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
  }

  createClass(Paragraph, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          row = _props.row,
          rest = objectWithoutProperties(_props, ['row']);


      return React__default.createElement(
        Wrapper$3,
        null,
        lodash.chain(lodash.times(row, function () {
          return lodash.random(90, 100);
        })).map(function (item, index) {
          return React__default.createElement(Text, _extends({ key: index, width: item + '%' }, rest));
        }).value()
      );
    }
  }]);
  return Paragraph;
}(React.Component);

Paragraph.propTypes = {
  /** Background color of paragraph's row. */
  backgroundColor: PropTypes.string,
  /** Color stop value of linear gradient. */
  colorStop: PropTypes.string,
  /** Height of paragraph's row. */
  height: PropTypes.string,
  /** Row count of paragraph. */
  row: PropTypes.number
};
Paragraph.defaultProps = {
  backgroundColor: '#eee',
  colorStop: '#ddd',
  height: '14px',
  row: 10
};

var _templateObject$4 = taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']);
var _templateObject2$3 = taggedTemplateLiteral(['\n  margin-right: 16px;\n'], ['\n  margin-right: 16px;\n']);

// Building blocks for Post
// Post wrapper
var Wrapper$4 = styled__default.div(_templateObject$4);

// Circle wrapper
var CircleWrapper = styled__default(Circle)(_templateObject2$3);

/**
 * Post is a *derived* component of app shell placeholder.
 * @class Post
 * @extends {Component}
 */

var Post = function (_Component) {
  inherits(Post, _Component);

  function Post() {
    classCallCheck(this, Post);
    return possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).apply(this, arguments));
  }

  createClass(Post, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          radius = _props.radius,
          row = _props.row,
          rest = objectWithoutProperties(_props, ['height', 'radius', 'row']);


      return React__default.createElement(
        Wrapper$4,
        null,
        React__default.createElement(CircleWrapper, _extends({}, rest, { radius: radius })),
        React__default.createElement(Paragraph, _extends({}, rest, { height: height, row: row }))
      );
    }
  }]);
  return Post;
}(React.Component);

Post.propTypes = {
  /** Background color of Post. */
  backgroundColor: PropTypes.string,
  /** Color stop value of linear gradient. */
  colorStop: PropTypes.string,
  /** Height of Post's row. */
  height: PropTypes.string,
  /** Radius of avatar (in px). */
  radius: PropTypes.number,
  /** Row count of Post. */
  row: PropTypes.number
};
Post.defaultProps = {
  backgroundColor: '#eee',
  colorStop: '#ddd',
  height: '14px',
  radius: 64,
  row: 5
};

var _templateObject$5 = taggedTemplateLiteral([''], ['']);
var _templateObject2$4 = taggedTemplateLiteral(['\n  margin-bottom: 16px;\n'], ['\n  margin-bottom: 16px;\n']);
var _templateObject3 = taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n'], ['\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n']);
var _templateObject4 = taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

// Building blocks for Blog
// Blog wrapper
var Wrapper$5 = styled__default.div(_templateObject$5);

// Text wrapper
var StyledText = styled__default(Text)(_templateObject2$4);

// Blog image wrapper
var ImageWrapper = styled__default.div(_templateObject3);

// Article
var Article = styled__default.article(_templateObject4);

// Empty paragraph
var EmptyParagraph = styled__default.p(_templateObject$5);

/**
 * Blog is a *derived* component of app shell placeholder.
 * @class Blog
 * @extends {Component}
 */

var Blog = function (_Component) {
  inherits(Blog, _Component);

  function Blog() {
    classCallCheck(this, Blog);
    return possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
  }

  createClass(Blog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          height = _props.height,
          row = _props.row,
          titleHeight = _props.titleHeight,
          titleWidth = _props.titleWidth,
          rest = objectWithoutProperties(_props, ['height', 'row', 'titleHeight', 'titleWidth']);


      return React__default.createElement(
        Wrapper$5,
        null,
        React__default.createElement(StyledText, _extends({}, rest, { height: titleHeight, width: titleWidth })),
        React__default.createElement(
          ImageWrapper,
          null,
          React__default.createElement(Square, _extends({}, rest, { length: 128 }))
        ),
        React__default.createElement(
          Article,
          null,
          React__default.createElement(Paragraph, _extends({}, rest, { height: height, row: row })),
          React__default.createElement(EmptyParagraph, null),
          React__default.createElement(Paragraph, _extends({}, rest, { height: height, row: row }))
        )
      );
    }
  }]);
  return Blog;
}(React.Component);

Blog.propTypes = {
  /** Background color of title/paragraph's row. */
  backgroundColor: PropTypes.string,
  /** Color stop value of linear gradient. */
  colorStop: PropTypes.string,
  /** Height of paragraph's row. */
  height: PropTypes.string,
  /** Row count of a single paragraph. */
  row: PropTypes.number,
  /** Height of blog title. */
  titleHeight: PropTypes.string,
  /** Width of blog title. */
  titleWidth: PropTypes.string
};
Blog.defaultProps = {
  backgroundColor: '#eee',
  colorStop: '#ddd',
  height: '14px',
  row: 10,
  titleHeight: '24px',
  titleWidth: '70%'
};

exports.Circle = Circle;
exports.Rectangle = Rectangle;
exports.Square = Square;
exports.Text = Text;
exports.Post = Post;
exports.Paragraph = Paragraph;
exports.Blog = Blog;
