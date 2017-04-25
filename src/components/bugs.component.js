import React, { Component } from 'react'
import bodymovin from 'bodymovin';


export default class Bugs extends Component {


  componentDidMount(){

    this.anim = bodymovin.loadAnimation({
      container: this.element,
      renderer: 'svg',
      loop: this.props.loop,
      autoplay: true,
      animationData: this.props.data
    });

  }

  componentWillReceiveProps({data, loop}){
    this.anim.destroy();
    this.anim = bodymovin.loadAnimation({
      container: this.element,
      renderer: 'svg',
      loop,
      autoplay: true,
      animationData: data
    });
  }


  render() {
    return <div style={{height: '100vh', width: '100vw'}} ref={ elem => { this.element = elem; } }></div>;
  }

}

