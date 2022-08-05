import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnim = keyframes`
  0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: ${spinAnim} 1.2s linear infinite;
`;

export const Loader = () => {
  return (
    <>
      <Loading />
    </>
  );
};
