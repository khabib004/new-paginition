import React, { Component } from "react";
import "./loading.css";


export class ServerLoading extends Component {
  render() {
    return (
      <div className='container' >
        <div class="hourglassBackground">
          <div class="hourglassContainer">
            <div class="hourglassCurves"></div>
            <div class="hourglassCapTop"></div>
            <div class="hourglassGlassTop"></div>
            <div class="hourglassSand"></div>
            <div class="hourglassSandStream"></div>
            <div class="hourglassCapBottom"></div>
            <div class="hourglassGlass"></div>
          </div>
        </div>
      </div >

    )
  }
}

export default ServerLoading;
