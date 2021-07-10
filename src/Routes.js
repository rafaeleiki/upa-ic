import { Switch, Route } from 'react-router-dom'

import FAQPage from "./containers/faq";
import LandingPage from './containers/landing-page';

function Routes() {
    return (
        <Switch>
            <Route path="/faq"><FAQPage /></Route>
            <Route path="/"><LandingPage /></Route>
        </Switch>
    );
}

export default Routes
