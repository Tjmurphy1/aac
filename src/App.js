import React, { Component } from 'react';
import Nav from "./Components /Nav";
import Home from "./Components /Home"
import History from "./Components /History";
import Compression from "./Components /Compression";
import Similar from "./Components /Similar";
import SideBar from "./Components /SideBar";
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Route path="/aac" component={Home} />
            <Route path="/history" component={History} />
            <Route path="/compression" component={Compression} />
            <Route path="/similar" component={Similar} />
            <SideBar />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
