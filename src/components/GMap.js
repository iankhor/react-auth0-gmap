import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class GMap extends Component {
    render(){
        return(
            <Container className="generic-center">
                <Row>   
                    <Col>
                        <h1>This is a GMap page</h1>
                    </Col> 
                </Row>   
            </Container>
        )
    }
}

export default GMap

