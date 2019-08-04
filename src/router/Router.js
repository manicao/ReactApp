import React,{Component} from 'react';
import { Router, Route } from 'react-router-dom';
import LoginPage from '../LoginPage';
import ListPage from '../ListPage';
import PrivateRoute from './PrivateRoute';
import {history} from '../utils/history';
import { connect } from 'react-redux'
import { actionAlert } from '../actions/actionAlert';
import { logout } from '../actions/actionsUser';

class Routers extends Component{

   constructor(props) {
      super(props)
      
      history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
      });
   }

  render() {

    return (
      <Router history={history}>
         <PrivateRoute exact path="/" component={ListPage} />
         <Route path="/login" component={LoginPage} />
      </Router>
    )
  } 
};


const actionCreators = {
    clearAlerts: actionAlert.clear,
    logout:logout
};

export default connect(undefined, actionCreators)(Routers);