import { Fragment } from "react";

import LandingSection from './LandingSection';
import ScheduleSection from './ScheduleSection';
import SponsorsSection from './SponsorsSection';

function LandingPage() {
  return (
    <Fragment>
      <LandingSection />
      <ScheduleSection />
      <SponsorsSection />
    </Fragment>
  );
}

export default LandingPage;
