import React, { Component } from 'react'
import JSONDebugger from '../utils/JSONDebugger'
import { Container,
         Row,
         Col,
         Button, 
         ButtonGroup } from 'reactstrap'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {  data: "dummy data 1" }
    }

    renderSignInUp = () => {
        return <Button color="primary" onClick={ this.props.auth.login }>Sign In / Sign Up</Button>
    }

    renderLogOut = () => {
        return (
            <div>
                <Row>
                    <Col>
                        <Button color="primary" onClick={ this.props.auth.logout}>Sign out</Button>
                    </Col>
                </Row>
            </div>
        )
    }

    render(){
        return(
            <Container>
                <div className="buttons">
                    <ButtonGroup vertical>
                        { this.props.isLoggedIn ? this.renderLogOut() : this.renderSignInUp() }
                    </ButtonGroup>
                </div> 
                { <JSONDebugger json={this.state} /> }
            </Container>
        )
    }
}

export default Home

