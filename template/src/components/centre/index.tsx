import React from 'react';
import styled from 'styled-components/native';

/**
 * Centre wraps the child component exactly in the middle of screen
 */

export const Centre: React.FC = props => {
  return <CentreContainer>{props.children}</CentreContainer>;
};

const CentreContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
