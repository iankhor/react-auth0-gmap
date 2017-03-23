import React from 'react'

//Common components
import NotFound from './components/shared/NotFound'
import AuthError from './components/shared/AuthError';
import LoginTransition from './components/shared/LoginTransition';

//Standalone components
import App from './components/App';
import Public from './components/Public';
import Private from './components/Private';
import GMap from './components/GMap';

//React-router 
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//Init components
import { auth } from './utils/init'

//Private Routes
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} 
    render={props => (
              auth.loggedIn() ? 
                React.createElement(component, props) : 
                <Redirect 
                  to={{ pathname: '/auth/error',
                        state: { from: props.location }
                     }}
                />
            )
          }
  />
)

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />  
        <Route path="/auth" exact component={LoginTransition} />  
        <Route path="/public" exact component={Public} />  
        <Route path="/auth/error" exact component={AuthError} />  
        <PrivateRoute path="/gmap" exact component={GMap} />  
        <PrivateRoute path="/private" exact component={Private} />  
        <Route component={NotFound} />  
      </Switch>
    </BrowserRouter>
  )
}

export default Routes