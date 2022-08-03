import styles from './App.module.css'
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Aside from './components/Aside/Aside';
import MainContent from './components/Main/MainContent/MainContent';


function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
					<Route path="/planner/*" element={<><Aside/><Main><MainContent/></Main></>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
