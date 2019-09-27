import React, {Component} from 'react';
import Survivor from '../components/Survivor';

class MainPanel extends Component {
  render() {
    return (
      <div>
        <span>Main Panel</span>
        <p>Hamburger menu to open close side nav panel</p>
        <Survivor></Survivor>
      </div>
    );
  }
}

export default MainPanel;