import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { chain, random, times } from 'lodash';

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

var _templateObject = taggedTemplateLiteral(['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n'], ['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  border-radius: 50%;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n'], ['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  border-radius: 50%;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n']);

// Animation
var flash = keyframes(_templateObject);

// Circle wrapper
var Wrapper = styled.div(_templateObject2, function (props) {
  return props.radius;
}, function (props) {
  return props.radius;
}, function (props) {
  return props.radius;
}, function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      colorStop = _ref.colorStop;
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 32%, ' + backgroundColor + ' 48%)';
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
      return React.createElement(Wrapper, this.props);
    }
  }]);
  return Circle;
}(Component);

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

var _templateObject$1 = taggedTemplateLiteral(['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n'], ['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n']);
var _templateObject2$1 = taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n']);

// Animation
var flash$1 = keyframes(_templateObject$1);

// Rectangle wrapper
var Wrapper$1 = styled.div(_templateObject2$1, function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      colorStop = _ref.colorStop;
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 32%, ' + backgroundColor + ' 48%)';
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
      return React.createElement(Wrapper$1, this.props);
    }
  }]);
  return Rectangle;
}(Component);

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

var _templateObject$2 = taggedTemplateLiteral(['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n'], ['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n']);
var _templateObject2$2 = taggedTemplateLiteral(['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n'], ['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n']);

// Animation
var flash$2 = keyframes(_templateObject$2);

// Square wrapper
var Wrapper$2 = styled.div(_templateObject2$2, function (props) {
  return props.length;
}, function (props) {
  return props.length;
}, function (props) {
  return props.length;
}, function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      colorStop = _ref.colorStop;
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 32%, ' + backgroundColor + ' 48%)';
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
      return React.createElement(Wrapper$2, this.props);
    }
  }]);
  return Square;
}(Component);

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
      return React.createElement(Rectangle, this.props);
    }
  }]);
  return Text;
}(Component);

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
var Wrapper$3 = styled.div(_templateObject$3);

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


      return React.createElement(
        Wrapper$3,
        null,
        chain(times(row, function () {
          return random(90, 100);
        })).map(function (item, index) {
          return React.createElement(Text, _extends({ key: index, width: item + '%' }, rest));
        }).value()
      );
    }
  }]);
  return Paragraph;
}(Component);

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
var Wrapper$4 = styled.div(_templateObject$4);

// Circle wrapper
var CircleWrapper = styled(Circle)(_templateObject2$3);

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


      return React.createElement(
        Wrapper$4,
        null,
        React.createElement(CircleWrapper, _extends({}, rest, { radius: radius })),
        React.createElement(Paragraph, _extends({}, rest, { height: height, row: row }))
      );
    }
  }]);
  return Post;
}(Component);

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

var img = new Image();img.src = 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41eiIvPgo8L3N2Zz4=';

var _templateObject$5 = taggedTemplateLiteral([''], ['']);
var _templateObject2$4 = taggedTemplateLiteral(['\n  margin-bottom: 16px;\n'], ['\n  margin-bottom: 16px;\n']);
var _templateObject3 = taggedTemplateLiteral(['\n  margin-bottom: 16px;\n  text-align: center;\n'], ['\n  margin-bottom: 16px;\n  text-align: center;\n']);
var _templateObject4 = taggedTemplateLiteral(['\n  width: 96px;\n  height: 96px;\n'], ['\n  width: 96px;\n  height: 96px;\n']);
var _templateObject5 = taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

// Building blocks for Blog
// Blog wrapper
var Wrapper$5 = styled.div(_templateObject$5);

// Text wrapper
var StyledText = styled(Text)(_templateObject2$4);

// Blog image wrapper
var ImageWrapper = styled.div(_templateObject3);

// Blog image
var Image$1 = styled.img(_templateObject4);

// Article
var Article = styled.article(_templateObject5);

// Empty paragraph
var EmptyParagraph = styled.p(_templateObject$5);

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


      return React.createElement(
        Wrapper$5,
        null,
        React.createElement(StyledText, _extends({}, rest, { height: titleHeight, width: titleWidth })),
        React.createElement(
          ImageWrapper,
          null,
          React.createElement(Image$1, { src: img })
        ),
        React.createElement(
          Article,
          null,
          React.createElement(Paragraph, _extends({}, rest, { height: height, row: row })),
          React.createElement(EmptyParagraph, null),
          React.createElement(Paragraph, _extends({}, rest, { height: height, row: row }))
        )
      );
    }
  }]);
  return Blog;
}(Component);

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

export { Circle, Rectangle, Square, Text, Post, Paragraph, Blog };
