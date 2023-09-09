import React, { Component } from 'react'

import "./loading.css";

export class Loading extends Component {
  render() {
    return (
      <div className='container'>
        <div class="loader"></div>
      </div>
    )
  }
}

export default Loading