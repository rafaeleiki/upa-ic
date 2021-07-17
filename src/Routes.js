import { Switch, Route, Redirect } from 'react-router-dom'

import DiversityPage from './containers/diversity'
import FAQPage from './containers/faq'
import LandingPage from './containers/landing-page'

function Routes() {
  return (
    <Switch>
      <Route exact path="/upa">
        <LandingPage />
      </Route>
      <Route exact path="/upa/faq">
        <FAQPage />
      </Route>
      <Route exact path="/upa/diversidade">
        <DiversityPage />
      </Route>
    </Switch>
  )
}

export default Routes
