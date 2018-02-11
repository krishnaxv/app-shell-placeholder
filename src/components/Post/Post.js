import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Building blocks for Post
import Circle from '../Circle';
import Paragraph from '../Paragraph';

// Post wrapper
const Wrapper = styled.div`
  display: flex;
`;

// Circle wrapper
const CircleWrapper = styled(Circle)`
  margin-right: 16px;
`;

/**
 * Post is a *derived* component of app shell placeholder.
 * @class Post
 * @extends {Component}
 */
class Post extends Component {
  static propTypes = {
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

  static defaultProps = {
    backgroundColor: '#eee',
    colorStop: '#ddd',
    height: '14px',
    radius: 64,
    row: 5
  };

  render() {
    const { height, radius, row, ...rest } = this.props;

    return (
      <Wrapper>
        <CircleWrapper {...rest} radius={radius} />
        <Paragraph {...rest} height={height} row={row} />
      </Wrapper>
    );
  }
}

export default Post;
