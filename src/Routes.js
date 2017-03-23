import React from 'react'

//Routes
import NotFound from './components/shared/NotFound'
import App from './components/App';
import LoginTransition from './components/shared/LoginTransition';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />  
        <Route path="/auth" exact component={LoginTransition} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes