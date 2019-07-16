import React from 'react';
import TopMenu from './TopMenu';
import WeatherContainer from './WeatherContainer';
import axios from 'axios';
import {Link} from 'react-router-dom';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      loaded: undefined ,
      weather:undefined,
      cityID:"4517009",
      city:undefined,
    } ;
  }
//5150529
  componentDidMount= async()=>{
        this.fetchData();
  }
  fetchData =async()=>{
    const response= await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${this.state.cityID}&appid=8444a6c59c19a84fc0151e985030dd68`);
    console.log(response.data.city.name);
    const data=response.data.list;
    this.setState({loaded:true,weather:data, city:response.data.city.name});
    console.log(this.state.city);
    return response;
  }

  makeWeathers = () => {
    let foo = [];
       for(let i=0;i<=40;i+=7){
              let bar = <WeatherContainer key={i}
                temp={this.state.weather[i].main.temp}
                date={this.state.weather[i].dt_txt}
                cond={this.state.weather[i].weather[0].description}
                imgLink={`http://openweathermap.org/img/w/${this.state.weather[i].weather[0].icon}.png`}
                />
              foo.push(bar);
        }
        return foo;
  }

  onInputChange=(event)=>{
    this.setState({cityID:event.target.value});
  }
  onFormSubmit=(event)=>{
    event.preventDefault();
    this.fetchData();
  }
  render(){
    //this.state.loaded ? console.log(this.state.weather[0].coud.description):console.log('not loaded');
    
    return (
      <div>
      
        {this.state.loaded ?
          <div>
              <div className="topMenu">
              Weather in {this.state.city}
              <div style={{ position: "absolute",right:"375px",top:"2px"}}>Enter City ID:</div>
              <form onSubmit={this.onFormSubmit} >
              <input name="id" type="text" value={this.state.cityID} onChange={this.onInputChange} className="right"></input>
              </form>
          </div>
          <Link to="/CityList" >
             <a style={{ fontSize: "30px",position: "absolute",left:"0px",top:"22px",color:"white"}}>Click Here for a list of City IDs</a>
          </Link>
            <div style={{display:'flex',justifyContent:'center'}}>
            {this.makeWeathers()}
            </div>  
          </div>
          :<h1>Loading...</h1> 
        }
        
        
       </div>

    );
  }
}

export default App;
