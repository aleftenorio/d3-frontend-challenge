import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard'
import Country from './pages/country'

export default function Routes(theme) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <Dashboard theme={theme}> </Dashboard>}/>ß
                <Route path="/country/:namecountry" render={(props) => <Country {...props} theme={theme}> </Country>}/>
            </Switch>
        </BrowserRouter>
    )
}