import React from 'react';
import styles from './Main.module.css';
import MainContent from './MainContent/MainContent';
import ContextWrapper from './MainContent/Calendar/Context/ContextWrapper';
import styled from 'styled-components';

const MainContainer = styled.div`
	display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 80%;
    height: 100vh;
    background-color: white;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export default function Main() {
  return (
    <ContextWrapper>
      <MainContainer>
        <MainContent />
      </MainContainer>
    </ContextWrapper>
  );
}
