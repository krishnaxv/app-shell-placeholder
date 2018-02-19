import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Building blocks for Blog
import Text from '../Text';
import Square from '../Square';
import Paragraph from '../Paragraph';

// Blog wrapper
const Wrapper = styled.div``;

// Text wrapper
const StyledText = styled(Text)`
  margin-bottom: 16px;
`;

// Blog image wrapper
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

// Article
const Article = styled.article`
  width: 100%;
`;

// Empty paragraph
const EmptyParagraph = styled.p``;

/**
 * Blog is a *derived* component of app shell placeholder.
 * @class Blog
 * @extends {Component}
 */
class Blog extends Component {
  static propTypes = {
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

  static defaultProps = {
    backgroundColor: '#eee',
    colorStop: '#ddd',
    height: '14px',
    row: 10,
    titleHeight: '24px',
    titleWidth: '70%'
  };

  render() {
    const { height, row, titleHeight, titleWidth, ...rest } = this.props;

    return (
      <Wrapper>
        <StyledText {...rest} height={titleHeight} width={titleWidth} />
        <ImageWrapper>
          <Square {...rest} length={128} />
        </ImageWrapper>
        <Article>
          <Paragraph {...rest} height={height} row={row} />
          <EmptyParagraph />
          <Paragraph {...rest} height={height} row={row} />
        </Article>
      </Wrapper>
    );
  }
}

export default Blog;
