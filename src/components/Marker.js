import React, { Component } from 'react'

// initially any map object has left top corner at lat lng coordinates
// it's on you to set object origin to 0,0 coordinates
// to handle that in CSS class 'markers'
// currently there is a slight offset

export default class Marker extends Component {

  render() {
    return (
       <div className="markers">
          {this.props.text}
       </div>
    );
  }
}