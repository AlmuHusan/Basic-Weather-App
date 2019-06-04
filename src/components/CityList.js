import React from 'react';
import { statement } from '@babel/template';
import {Link} from 'react-router-dom';
import './compStyle.css';
import TopMenu from "./TopMenu";
let json = require('./city-list.json');
console.log(json);


class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: undefined ,
      list:undefined,
    } ;
  }
  componentDidMount=()=>{
    this.setState({loaded:'true',list:this.retCity()});
  }
  retCity= ()=>{
    let foo=[];
    for(let i=0;i<json.length/1000;i++){
      let city=(<div style={{textAlign:'center', color:'(0,0,0)'}}><a key={i} >City: {json[i].name},{json[i].country} ID: {json[i].id} </a><br/></div>);
      foo.push(city);
    }
    return foo;
  }

  render(){
  return (
    <div>
    <div className="topMenu">
      Cities and their IDs
    </div>
    <Link to="/">
    <a style={{ fontSize: "30px",position: "absolute",left:"0px",top:"22px",color:"white"}}>Go Back</a>
    </Link>
    {this.state.loaded ? <div>{this.state.list}</div>:<h1/>}
  </div> 
  
  );
}
}
export default CityList;