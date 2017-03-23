import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import GoogleMapReact from 'google-map-react'
import { NavLink } from 'react-router-dom'
import Marker from './Marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GMap extends Component {

  static defaultProps = {
    center: {lat: -37.812973, lng: 144.955637},
    zoom: 18
  };

    render(){
        return(
            <Container className="generic-center">
                <Row>   
                    <Col>
                        <h1>This is a GMap page</h1>
                        <p><NavLink to="/">Go Home</NavLink></p>

                    </Col> 
                </Row>   
                <Row className="gmap">
                    <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
       
                        <Marker lat={65.955413} lng={30.337844} text={'ASDASDAWSD'} />

                    </GoogleMapReact>

                </Row>
            </Container>
        )
    }
}

export default GMap

