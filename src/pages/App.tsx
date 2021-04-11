import React from 'react'
import { Switch, Route } from "react-router-dom"
import  Home from './Home'
import  Overview from './Overview'
import  NotFound from './NotFound'
import { RootProps } from '../types/common'
import { History } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import Header from '../components/Header'

const App: React.FC<RootProps> = ({ history }: { history: History }) => {
    return (
        <>
        <Header />
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound}/>
            </Switch>
        </ConnectedRouter>
        </>

    )
}

export default App