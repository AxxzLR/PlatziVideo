import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Layout from '../components/Layout'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'
import Player from '../containers/Player'

const App = () => (

    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/player/:id" component={Player} />
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App