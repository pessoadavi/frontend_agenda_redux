import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Agenda from '../agenda/Agenda'
import About from '../about/About'


const Routes = (props) => {
    return ( 
        <Router history={hashHistory}>
            <Route path='/agendas' component={Agenda}/>
            <Route path='/about' component={About}/>
            <Redirect path='*' to='/agendas'/>
        </Router>
     );
}
 
export default Routes ;