import React, { Component } from 'react';
import './Survivor.css'


class Survivor extends Component {
  doWork = (e) => {
    alert('hello World')
  };
  render() {
    return (
      <div className="survivor-background">
        <span>Survivor Dashboard</span>
        <button onClick={(e) => this.doWork(e)}>Click Me</button>
      </div>
    );
  };
}

export default Survivor;
