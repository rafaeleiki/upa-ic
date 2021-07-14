import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'

import Routes from './Routes'
import AppBar from './components/AppBar'
import AppFooter from './components/AppFooter'

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <Routes />
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
