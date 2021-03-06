import React, { Component } from 'react'
import logo from '../../assets/img/logo.svg'
import '../css/style.css'
import Home from './Home'
import { auth } from './../utils/init'
import { Container, Row, Col} from 'reactstrap'

class App extends Component {
  constructor(props){
      super(props)

      this.state = {
          isLoggedIn: auth.loggedIn(),
      }
  }

  render() {
    return (
        <Container className="App">
            <Row>
              <Col>
                <img src={logo} className="App-header App-logo" alt="logo" />
                <h2>React + Auth0 + Google Maps</h2>
              </Col>
            </Row>

            <Row>
              <Col>
                  <Home 
                    auth={auth}
                    isLoggedIn={ this.state.isLoggedIn }
                    token={auth.getToken()}
                  />
              </Col>
            </Row>
            <Row>
              <Col>
                  {this.props.children}
              </Col>
            </Row>
        </Container>
    )
  }
}

export default App
