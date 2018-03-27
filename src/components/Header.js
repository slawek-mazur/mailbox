//@flow

import React from "react";
import Ionicon from 'react-ionicons';
import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <div className="Title">
          <Ionicon icon="ios-mail-outline" fontSize="30px" color="#111"/>
          <label>Inbox</label>
        </div>
        <div className="Actions">
          <a title="Minimize" className="Minimize"> </a>
          <a title="Close" className="Close"><Ionicon icon="ios-close" fontSize="30px"/></a>
        </div>
      </div>
    )
  }
}

export default Header;