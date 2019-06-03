import React from 'react';


function WeatherContainer({temp,cond,imgLink,date}) {
    
        const Fahrenheit=Math.round(((parseFloat(temp)-273.15)*(9/5)+32)*100)/100;
        date=date.slice(0,10);
        return (
            <div className="ui container" style={{margin:'auto',textAlign:'center', fontSize:'20px'}}>
               <h1>{date}</h1>
               
               <a>Temperature: {Fahrenheit} F</a><br/>
               <img src={imgLink} style={{width:'250px',height:'250px'}}></img><br/>
               <a>Condition: {cond}</a>
               
            </div>
        );
}

export default WeatherContainer;
