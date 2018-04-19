import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';
import SignIn from '../components/SignIn/SignIn';

const app = new Clarifai.App({
  apiKey: 'cc8c9bad87f04bb6adaaed2c050b7511'
 });


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box:{},
      route: 'signin'
    }
  }


  calculatFaceLocation = (data)=>{
    const clarifaiFace = data.output[0].data.region[0].region_info.bounding_box;
    const image = document.getElementById('imageinput');
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input}) ;
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(
    function(response) {
      // do something with response
      // console.log(response);
      this.calculatFaceLocation(response);
    },
    function(err) {
      // there was an error
      // console.log(err);
    }
  );
  }

  onRouteChange = (route)=>{
    this.setState({route: route});
  }
  render() {
    return (
      <div className="App">

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
        <Navigation onRouteChange={this.onRouteChange}/>
        {
          this.state.route === 'signin' 
          ? <SignIn onRouteChange={ this.onRouteChange } /> 
          : <div>
          <Logo />          
          <Rank />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl} />
          </div>
        }
      </div>
    );
  }
}

export default App;
