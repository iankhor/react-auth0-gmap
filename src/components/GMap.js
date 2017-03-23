import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import GoogleMapReact from 'google-map-react'
import { NavLink } from 'react-router-dom'
import Marker from './Marker'
import JSONDebugger from './../utils/JSONDebugger'

const coordinatesConfig = {
    mainLat: -37.81,
    minLat: 2357,
    maxLat: 3456,
    mainLng: 144.95,
    minLng: 4377,
    maxLng: 7009
}

const randomNumberConfig = {
    start: 1,
    end: 10
}

let initCoordinates = [
    {lat: -37.812357, lng: 144.954377, key: "1"},
    {lat: -37.812357, lng: 144.954377, key: "2"},
    {lat: -37.812310, lng: 144.954287, key: "3"},
    {lat: -37.812357, lng: 144.954377, key: "4"},
    {lat: -37.812347, lng: 144.954377, key: "5"},
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
            randomNumber: 0,
            coordinates: initCoordinates
        }
        
    }

    static defaultProps = {
        center: {lat: -37.812973, lng: 144.955637},
        zoom: 18
    }

    componentDidMount(){
        setInterval(() => {this.randomizeCoordinate( this.getRandomCoordinate() )},1000)
    }

    getRandomCoordinate =  () => {
        const index = Math.floor(Math.random() * (randomNumberConfig.end - randomNumberConfig.start + 1) + randomNumberConfig.start)
        const lat = coordinatesConfig.mainLat + 
                    Math.floor(Math.random() * (coordinatesConfig.maxLat- coordinatesConfig.minLat + 1) + coordinatesConfig.minLat) / 1000000
        const lng = coordinatesConfig.mainLng + 
                    Math.floor(Math.random() * (coordinatesConfig.maxLng- coordinatesConfig.minLng + 1) + coordinatesConfig.minLng) / 1000000
        
        return { index, lat, lng }
    }

    randomizeCoordinate = ( {index, lat, lng} ) => {
        // console.log('key', index )
        // console.log('lat', lat.toFixed(6))
        // console.log('lng', lng.toFixed(6))
        // console.log('lat', this.state.coordinates[index].lat)
        // console.log('lng', this.state.coordinates[index].lng)

        let updatedCoordinates = [...this.state.coordinates]
        updatedCoordinates[index].lat = lat.toFixed(6)
        updatedCoordinates[index].lng = lng.toFixed(6)
        this.setState( { coordinates: updatedCoordinates })
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
                {<JSONDebugger json={ {...this.state.coordinates} }/>}
            </Container>
        )
    }
}

export default GMap

