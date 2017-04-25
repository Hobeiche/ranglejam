import React, { Component } from 'react';
import axios from 'axios';

import keydown from 'react-keydown';


import Bugs from './components/bugs.component';

class App extends Component {

  state = {
    bugsData: null
  };

  componentDidMount(){
    axios.get('bugsdribble/data.json')
      .then(res => {
        this.setState({bugsData: res.data});
      })
  }


  @keydown('space')
  switchToRun() {
    axios.get('bugsrunning/data.json')
      .then(res => {
        this.setState({bugsData: res.data});
      })
  }


  @keydown('enter')
  switchToDribble() {
    axios.get('bugsdribble/data.json')
      .then(res => {
        this.setState({bugsData: res.data});
      })
  }

  render() {
    return <div>
      {this.state.bugsData ? <Bugs data={this.state.bugsData} /> : 'Loading...'}
      </div>;
  }
}

export default App;
