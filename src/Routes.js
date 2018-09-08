import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import App from './App'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeContainer} />
    </Switch>
)

export default Routes;