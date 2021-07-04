import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Routes from './Routes';
import AppBar from './components/AppBar';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
