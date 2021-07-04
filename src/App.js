import './App.css';

import AppBar from './components/AppBar';
import LandingSection from './containers/landing-page/LandingSection';
import ScheduleSection from './containers/landing-page/ScheduleSection';
import SponsorsSection from './containers/landing-page/SponsorsSection';

function App() {
  return (
    <div className="App">
      <AppBar />
      <LandingSection />
      <ScheduleSection />
      <SponsorsSection />
    </div>
  );
}

export default App;
