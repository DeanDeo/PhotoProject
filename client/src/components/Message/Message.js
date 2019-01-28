//Our Message Will contain two properties: UserName and a Message.

import React, {Component} from 'react';
import './Message.css';
export default class Message extends Component {
  render() {
    return (
      <div className="message">
                <span className="message__author">
                    {this.props.message.userName}:
                </span>
        {this.props.message.message}
      </div>
      //This Message will be rendered for each record in the Database.
    )
  }
}