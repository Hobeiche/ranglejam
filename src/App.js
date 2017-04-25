import React, { Component } from 'react';
import axios from 'axios';

import keydown, {Keys} from 'react-keydown';



import Bugs from './components/bugs.component';

class App extends Component {

  state = {
    bugsData: null,
    shouldLoop: true,
    isRunning: false,
  };


  setData(bugsData, optionalData){
    this.setState({bugsData, ...optionalData});
  }

  componentDidMount(){
    axios.get('bugsdribble/data.json')
      .then(res => this.setData(res.data))
  }


  @keydown(Keys.space)
  toggleRun() {
    axios.get(this.state.isRunning ? 'bugsdribble/data.json' : 'bugsrunning/data.json')
      .then(res => this.setData(res.data, {isRunning: !this.state.isRunning}))
  }

  @keydown('d')
  switchToDunk() {
    axios.get('bugsdunk/data.json')
      .then(res => this.setData(res.data, {shouldLoop: false}))
  }

  render() {
    return <div>
      {this.state.bugsData ? <Bugs data={this.state.bugsData} loop={this.state.shouldLoop} /> : 'Loading...'}
      </div>;
  }
}

export default App;
