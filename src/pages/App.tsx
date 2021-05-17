import React from 'react'
import { Switch, Route } from "react-router-dom"
import  Dashboard from './Dashboard'
import  Overview from './Overview'
import  NotFound from './NotFound'
import { RootProps } from '../types/common'
import { History } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import Login from './Login'

const App: React.FC<RootProps> = ({ history }: { history: History }) => {
    return (
        <>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/" component={Login} />
                <Route component={Dashboard}/>
            </Switch>
        </ConnectedRouter>
        </>

    )
}

export default App