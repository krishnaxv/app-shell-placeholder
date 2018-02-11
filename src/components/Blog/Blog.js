import React from 'react';
import styled from 'styled-components';

import Paragraph from '../Paragraph';
import photoIcon from '../../assets/images/ic_photo_black_24px.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyParagraph = styled.p``;

const Image = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

const Article = styled.article`
  width: 100%;
`;

const Blog = props => (
  <Wrapper>
    <Image src={photoIcon} />
    <Article>
      <Paragraph />
      <EmptyParagraph />
      <Paragraph />
    </Article>
  </Wrapper>
);

export default Blog;
