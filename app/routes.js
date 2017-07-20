import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './view/home.js'

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  </BrowserRouter>
)

export default routes