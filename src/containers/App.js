import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />

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
