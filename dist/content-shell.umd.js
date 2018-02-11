(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('styled-components'), require('lodash')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'styled-components', 'lodash'], factory) :
	(factory((global['content-shell'] = {}),global.React,global.PropTypes,global.styled,global.lodash));
}(this, (function (exports,React,PropTypes,styled,lodash) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
var styled__default = 'default' in styled ? styled['default'] : styled;

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
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 32%, ' + backgroundColor + ' 48%)';
}, flash);

/**
 * Circle is a *primitive* component of content shell.
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
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Circle.defaultProps = {
  backgroundColor: '#eee',
  colorStop: '#ddd',
  radius: 64
};

var _templateObject$1 = taggedTemplateLiteral(['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n'], ['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n']);
var _templateObject2$1 = taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n'], ['\n  width: ', ';\n  height: ', ';\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n']);

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
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 32%, ' + backgroundColor + ' 48%)';
}, flash$1);

/**
 * Rectangle is a *primitive* component of content shell.
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

var _templateObject$2 = taggedTemplateLiteral(['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n'], ['\n  0% {\n    background-position: 20% 0\n  }\n  100% {\n    background-position: -100% 0\n  }\n']);
var _templateObject2$2 = taggedTemplateLiteral(['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n'], ['\n  width: ', 'px;\n  min-width: ', 'px;\n  height: ', 'px;\n  background: ', ';\n  background-size: 1000% 100%;\n  animation: 1s linear infinite forwards ', ';\n']);

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
  return 'linear-gradient(to right, ' + backgroundColor + ' 8%, ' + colorStop + ' 32%, ' + backgroundColor + ' 48%)';
}, flash$2);

/**
 * Square is a *primitive* component of content shell.
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

var _templateObject$3 = taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']);
var _templateObject2$3 = taggedTemplateLiteral(['\n  margin-right: 16px;\n'], ['\n  margin-right: 16px;\n']);
var _templateObject3 = taggedTemplateLiteral(['\n  width: 100%;\n\n  > div {\n    margin-bottom: 4px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n'], ['\n  width: 100%;\n\n  > div {\n    margin-bottom: 4px;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n']);

var Wrapper$3 = styled__default.div(_templateObject$3);

var CircleWrapper = styled__default(Circle)(_templateObject2$3);

var RectangleWrapper = styled__default.div(_templateObject3);

var Post = function Post(props) {
  return React__default.createElement(
    Wrapper$3,
    null,
    React__default.createElement(CircleWrapper, null),
    React__default.createElement(
      RectangleWrapper,
      null,
      React__default.createElement(Rectangle, { width: 70, unit: '%' }),
      React__default.createElement(Rectangle, { width: 90, unit: '%' }),
      React__default.createElement(Rectangle, null),
      React__default.createElement(Rectangle, { width: 50, unit: '%' }),
      React__default.createElement(Rectangle, { width: 70, unit: '%' })
    )
  );
};

var _templateObject$4 = taggedTemplateLiteral(['\n  > div {\n    margin-bottom: 4px;\n  }\n'], ['\n  > div {\n    margin-bottom: 4px;\n  }\n']);

var Wrapper$4 = styled__default.div(_templateObject$4);

var Paragraph = function Paragraph(props) {
  return React__default.createElement(
    Wrapper$4,
    null,
    lodash.map(lodash.times(10, function () {
      return lodash.random(90, 100);
    }), function (item, index) {
      return React__default.createElement(Rectangle, { key: index, width: item, unit: '%' });
    })
  );
};

var img = new Image();img.src = 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0yMSAxOVY1YzAtMS4xLS45LTItMi0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJ6TTguNSAxMy41bDIuNSAzLjAxTDE0LjUgMTJsNC41IDZINWwzLjUtNC41eiIvPgo8L3N2Zz4=';

var _templateObject$5 = taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n']);
var _templateObject2$4 = taggedTemplateLiteral([''], ['']);
var _templateObject3$1 = taggedTemplateLiteral(['\n  width: 64px;\n  height: 64px;\n  margin-bottom: 16px;\n'], ['\n  width: 64px;\n  height: 64px;\n  margin-bottom: 16px;\n']);
var _templateObject4 = taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']);

var Wrapper$5 = styled__default.div(_templateObject$5);

var EmptyParagraph = styled__default.p(_templateObject2$4);

var Image$1 = styled__default.img(_templateObject3$1);

var Article = styled__default.article(_templateObject4);

var Blog = function Blog(props) {
  return React__default.createElement(
    Wrapper$5,
    null,
    React__default.createElement(Image$1, { src: img }),
    React__default.createElement(
      Article,
      null,
      React__default.createElement(Paragraph, null),
      React__default.createElement(EmptyParagraph, null),
      React__default.createElement(Paragraph, null)
    )
  );
};

exports.Circle = Circle;
exports.Rectangle = Rectangle;
exports.Square = Square;
exports.Post = Post;
exports.Paragraph = Paragraph;
exports.Blog = Blog;

Object.defineProperty(exports, '__esModule', { value: true });

})));
