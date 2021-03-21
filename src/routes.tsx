import React, { ReactElement } from 'react'
import {
  MemoryRouter, Route,
  BrowserRouter as Router,

  Switch
} from 'react-router-dom'
import AuthVatidation from './Componets/AuthVatidation'
import Home from './Componets/Home'
import Login from './Componets/Login'




const Routes = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <MemoryRouter>
          <Route exact path={'/LOGIN'} component={Login} />
          <AuthVatidation>
          <Route exact path={'/HOME'} component={Home} />
          </AuthVatidation>
        </MemoryRouter>
      </Switch>
    </Router>
  )
}

export default Routes
