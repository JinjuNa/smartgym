import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Join from "./pages/Join";
import System from "./pages/System";
import Program from "./pages/Program";
import Center from "./pages/Center";
import Franchise from "./pages/Franchise";
import Footer from "./pages/Footer";
import data from "./why.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      item : data
    }
  };

  render(){
    return (
      <div>
      <Router>
          <Switch>
            <Route exact path="/" render = {props=>{return (<Home item={this.state.item}/>)}}/>
            <Route path="/join" component={Join} />
            <Route path="/system" component={System} />
            <Route path="/program" component={Program} />
            <Route path="/center" component={Center} />
            <Route path="/franchise" component={Franchise} />
          </Switch>
      </Router>
      <Footer />
      </div>
    );
  }  
}
  

export default App;
