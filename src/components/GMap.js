import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import GoogleMapReact from 'google-map-react'
import { NavLink } from 'react-router-dom'
import Marker from './Marker'
import JSONDebugger from './../utils/JSONDebugger'
import { getRandomCoordinate, initCoordinates } from './../utils/MarkerRandomizer'

class GMap extends Component {
    constructor(props){
        super(props)
        this.state = { coordinates: initCoordinates  }
    }

    static defaultProps = {
        center: {lat: -37.812973, lng: 144.955637},
        zoom: 18
    }

    componentDidMount(){
        setInterval(() => {this.randomizeCoordinate( getRandomCoordinate() )}, 400)
    }

    randomizeCoordinate = ( {index, lat, lng} ) => {
        let updatedCoordinates = [...this.state.coordinates]
        updatedCoordinates[index -1].lat = lat.toFixed(6)
        updatedCoordinates[index -1].lng = lng.toFixed(6)
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
                {<JSONDebugger json={ {...this.state.coordinates} }/>}
            </Container>
        )
    }
}

export default GMap

