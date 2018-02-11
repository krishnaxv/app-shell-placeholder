import React from 'react';
import styled from 'styled-components';

import Circle from '../Circle';
import Rectangle from '../Rectangle';

const Wrapper = styled.div`
  display: flex;
`;

const CircleWrapper = styled(Circle)`
  margin-right: 16px;
`;

const RectangleWrapper = styled.div`
  width: 100%;

  > div {
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Post = props => (
  <Wrapper>
    <CircleWrapper />
    <RectangleWrapper>
      <Rectangle width={70} unit="%" />
      <Rectangle width={90} unit="%" />
      <Rectangle />
      <Rectangle width={50} unit="%" />
      <Rectangle width={70} unit="%" />
    </RectangleWrapper>
  </Wrapper>
);

export default Post;
