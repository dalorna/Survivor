import React, { Component } from 'react';
import Survivor from '../components/Survivor';
import './Web.css';

class Web extends Component {
  render() {
    return (
      <div className="web-background">
        <div>Nav Menu item</div>
        <div>
          <span>left side navigation</span>
        </div>
        <div>
          <Survivor />
        </div>
      </div>
    );
  }
}

export default Web
