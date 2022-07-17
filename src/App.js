import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
        <Aside />
        <Main />
    </div>
  );
}

export default App;
