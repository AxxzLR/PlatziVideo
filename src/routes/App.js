import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Layout from '../components/Layout'
import Register from '../containers/Register'
import NotFound from '../containers/NotFound'

const App = () => (

    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Register" component={Register} />
                <Route component={NotFound}></Route>
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App