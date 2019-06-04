import React from 'react';
import App from './components/App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import CityList from './components/CityList';

class Start extends React.Component{
render(){
    return(
<Router>
<Route path='/' exact component={App}/>
 <Route path='/CityList' exact component={CityList}/>
 </Router>
    );
}
}
export default Start;