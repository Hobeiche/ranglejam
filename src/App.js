import React, { Component } from 'react';
import axios from 'axios';

import keydown, {Keys} from 'react-keydown';



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


  @keydown(Keys.space)
  switchToRun() {
    axios.get('bugsrunning/data.json')
      .then(res => {
        this.setState({bugsData: res.data});
      })
  }


  @keydown(Keys.enter)
  switchToDribble() {
    axios.get('bugsdribble/data.json')
      .then(res => {
        this.setState({bugsData: res.data});
      })
  }

  @keydown('d')
  switchToDunk() {
    axios.get('bugsdunk/data.json')
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
