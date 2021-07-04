import {
    Switch,
    Route,
  } from "react-router-dom";

import LandingPage from './containers/landing-page';

function Routes() {
    return (
        <Switch>
            <Route path="/"><LandingPage /></Route>
        </Switch>
    );
}

export default Routes;
