import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import MainContent from './components/Main/MainContent/MainContent';
import styled from 'styled-components';

const AppContainer = styled.div`
	display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #edf0f7;

	@media (max-width: 768px) {
		flex-direction: column;
		font-size: 14px !important;
	}
`;

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
					<Route path="/planner/*" element={<><Aside/><Main><MainContent/></Main></>} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
