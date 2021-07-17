import { Fragment } from 'react'

import LandingSection from './LandingSection'
import ScheduleSection from './ScheduleSection'
import SponsorsSection from './SponsorsSection'
import YoutubeLinksSection from './YoutubeLinksSection'
function LandingPage() {
  return (
    <Fragment>
      <LandingSection />
      <hr />
      <YoutubeLinksSection />
      <hr />

      <ScheduleSection />
      <hr />
      <SponsorsSection />
    </Fragment>
  )
}

export default LandingPage
