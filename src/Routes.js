import { Switch, Route, Redirect } from 'react-router-dom'

import DiversityPage from './containers/diversity'
import FAQPage from './containers/faq'
import LandingPage from './containers/landing-page'

function Routes() {
  return (
    <Switch>
      <Route path="/upa">
        <LandingPage />
      </Route>
      <Route path="/faq">
        <FAQPage />
      </Route>
      <Route path="/diversidade">
        <DiversityPage />
      </Route>
      <Route path="/upa">
        <Redirect to="/upa" />
      </Route>
    </Switch>
  )
}

export default Routes
