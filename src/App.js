import React from 'react';
import TopMenu from './components/TopMenu';
import WeatherContainer from './components/WeatherContainer';
import './App.css';
import axios from 'axios';
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      loaded: undefined ,
      weather:undefined,
    } ;
  }

  componentDidMount= async()=>{
        const response= await axios.get("http://api.openweathermap.org/data/2.5/forecast?id=5150529&appid=82e0d8aed7dc21b28e07e22ce21a9b7a");
        console.log(response);
        const data=response.data.list;
        this.setState({loaded:true,weather:data});
        
  }

  render(){
    //this.state.loaded ? console.log(this.state.weather[0].coud.description):console.log('not loaded');
    
    return (
      <div className="App">
        {this.state.loaded ?
          <div>
          <TopMenu/>
            <div style={{display:'flex',justifyContent:'center'}}>
              <WeatherContainer
                temp={this.state.weather[0].main.temp}
                date={this.state.weather[0].dt_txt}
                cond={this.state.weather[0].weather[0].description}
                imgLink={`http://openweathermap.org/img/w/${this.state.weather[0].weather[0].icon}.png`}
                  >
              </WeatherContainer>
              <WeatherContainer
                temp={this.state.weather[7].main.temp}
                date={this.state.weather[7].dt_txt}
                cond={this.state.weather[7].weather[0].description}
                imgLink={`http://openweathermap.org/img/w/${this.state.weather[7].weather[0].icon}.png`}
                  >
              </WeatherContainer>
              <WeatherContainer
                temp={this.state.weather[15].main.temp}
                date={this.state.weather[15].dt_txt}
                cond={this.state.weather[15].weather[0].description}
                imgLink={`http://openweathermap.org/img/w/${this.state.weather[15].weather[0].icon}.png`}
                  >
              </WeatherContainer>
              <WeatherContainer
                temp={this.state.weather[23].main.temp}
                date={this.state.weather[23].dt_txt}
                cond={this.state.weather[23].weather[0].description}
                imgLink={`http://openweathermap.org/img/w/${this.state.weather[23].weather[0].icon}.png`}
                  >
              </WeatherContainer>
              <WeatherContainer
                temp={this.state.weather[31].main.temp}
                date={this.state.weather[31].dt_txt}
                cond={this.state.weather[31].weather[0].description}
                imgLink={`http://openweathermap.org/img/w/${this.state.weather[31].weather[0].icon}.png`}
                  >
              </WeatherContainer>
            </div>  
          </div>
          :<h1>Loading...</h1> 
        }
       </div>

    );
  }
}

export default App;
