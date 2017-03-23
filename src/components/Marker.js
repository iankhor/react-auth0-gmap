import React, { Component } from 'react';

export default class Marker extends Component {

  render() {
    return (
       <div className="markers">
          {this.props.text}
       </div>
    );
  }
}