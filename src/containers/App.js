import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} />

        <Particles className='particales'
          params={{

            particles: {


              number: {
                value: 100
          
              }
            }
          }}
          style={{
            width: '100%',
            backgroundImage: `` 
          }}
        />


      </div>
    );
  }
}

export default App;
