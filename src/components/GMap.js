import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import GoogleMapReact from 'google-map-react'
import { NavLink } from 'react-router-dom'
import Marker from './Marker'
import JSONDebugger from './../utils/JSONDebugger'

const coordinates = {
    mainLat: -37.81,
    minLat: -37.812469,
    maxLat: -37.814192,
    mainLng: 144.95,
    minLng: 144.954068,
    maxLng: 144.957499
}

const randomNumberConfig = {
    start: 1,
    end: 10
}

const initCoordinates = {
    cood_1: {lat: -37.812469, lng: 144.954068},
    cood_2: {lat: -37.812469, lng: 144.954068},
    cood_3: {lat: -37.812469, lng: 144.954068},
    cood_4: {lat: -37.812469, lng: 144.954068},
    cood_5: {lat: -37.812469, lng: 144.954068},
    cood_6: {lat: -37.812469, lng: 144.954068},
    cood_7: {lat: -37.812469, lng: 144.954068},
    cood_8: {lat: -37.812469, lng: 144.954068},
    cood_9: {lat: -37.812469, lng: 144.954068},
    cood_10: {lat: -37.812469, lng: 144.954068}
}

class GMap extends Component {
    constructor(props){
        super(props)

        this.state = {
            randomNumber: 0
        }
        
    }

    static defaultProps = {
        center: {lat: -37.812973, lng: 144.955637},
        zoom: 18
    }

    componentDidMount(){
        setInterval(() => {this.randomNumber()},1000)
    }

    randomNumber = () => {
        this.setState( { randomNumber: Math.floor(randomNumberConfig.start + Math.random() * randomNumberConfig.end)   } )
    }

    render(){
        return(
            <Container className="generic-center">
                <Row>   
                    <Col>
                        <h1>This is the Treasure Map</h1>
                        <p><NavLink to="/">Go Home</NavLink></p>
                    </Col> 
                </Row>   
                <Row className="gmap">
                    <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
       
                        <Marker lat={-37.812973} lng={144.955637} text={''} />
                        <Marker lat={-37.812893} lng={144.956198} text={''} />
                        <Marker lat={-37.812893} lng={144.956298} text={''} />

                    </GoogleMapReact>
                </Row>
                <p> Random Number : {this.state.randomNumber} </p>
                <JSONDebugger json={coordinates}/>
            </Container>
        )
    }
}

export default GMap

