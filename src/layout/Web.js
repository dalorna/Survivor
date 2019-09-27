import React, { Component } from 'react';
import MainPanel from './MainPanel';
import './Web.css';

class Web extends Component {
  render() {
    return (
      <div className="web-background">
        <div>
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className="left-panel">
          <span>left side navigation</span>
        </div>
        <div className="right-panel">
          <MainPanel></MainPanel>
        </div>
      </div>
    );
  }
}

export default Web
