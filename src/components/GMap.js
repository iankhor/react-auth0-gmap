import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import GoogleMapReact from 'google-map-react'
import { NavLink } from 'react-router-dom'
import Marker from './Marker'
import JSONDebugger from './../utils/JSONDebugger'

const coordinates = {
    mainLat: -37.81,
    minLat: -37.812357,
    maxLat: -37.813456,
    mainLng: 144.95,
    minLng: 144.954377,
    maxLng: 144.957009
}

const randomNumberConfig = {
    start: 1,
    end: 10
}

const initCoordinates = [
    {lat: -37.812357, lng: 144.954377, key: "1"},
    {lat: -37.812357, lng: 144.954377, key: "2"},
    {lat: -37.812357, lng: 144.954377, key: "3"},
    {lat: -37.812357, lng: 144.954377, key: "4"},
    {lat: -37.812357, lng: 144.954377, key: "5"},
    {lat: -37.812357, lng: 144.957009, key: "6"},
    {lat: -37.813456, lng: 144.957009, key: "7"},
    {lat: -37.813456, lng: 144.957009, key: "8"},
    {lat: -37.813456, lng: 144.957009, key: "9"},
    {lat: -37.813456, lng: 144.957009, key: "10"}
]

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
        // setInterval(() => {this.randomNumber()},1000)
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
       
                        { initCoordinates.map( coordinates => {
                            return <Marker lat={coordinates.lat} lng={coordinates.lng} text={''} key={coordinates.key} /> 
                            })
                        }

                    </GoogleMapReact>
                </Row>
                <p> Random Number : {this.state.randomNumber} </p>
                {/*<JSONDebugger json={coordinates}/>*/}
            </Container>
        )
    }
}

export default GMap

