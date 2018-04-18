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

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("cc8c9bad87f04bb6adaaed2c050b7511", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>

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
