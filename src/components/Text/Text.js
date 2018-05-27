import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Primitive building block for Text
import Rectangle from '../Rectangle';

/**
 * Text is a *derived* component of app shell placeholder.
 * @class Text
 * @extends {Component}
 */
class Text extends Component {
  static propTypes = {
    /** Background animation. */
    animation: PropTypes.bool,
    /** Background color of text block. */
    backgroundColor: PropTypes.string,
    /** Color stop value of linear gradient. */
    colorStop: PropTypes.string,
    /** Height of text block. */
    height: PropTypes.string,
    /** Width of text block. */
    width: PropTypes.string
  };

  static defaultProps = {
    animation: true,
    backgroundColor: '#eee',
    colorStop: '#ddd',
    height: '14px',
    width: '100%'
  };

  render() {
    return <Rectangle {...this.props} />;
  }
}

export default Text;
