import React, { Component } from 'react';

import { DirectLine } from 'botframework-directlinejs';
import ReactWebChat from 'botframework-webchat';


class CharBot extends Component {
  constructor() {
    super();
    this.state = {};
    const echoBotKey = 'mszOYMt2gCk.0du-QdeGG1mDlHgpR33pO8z92YWgP5Eg4btzmnQLqNY';
    //const BaseBotKey = 'Q1h7uPzEu3I.0uvcX9Lpjg_Xc74xvm9IqDvWsRR-ZO14Mi1vHAqFiR0';
    this.directLine = new DirectLine({ token: echoBotKey });

  }
  render() {
    return (
      <div className="CharBot" style={
        {
          minWidth: '400px',
          width: '100%',
          height: '580px',
        }
      } >
        {/*<iframe title="聊天機器人測試" src='https://webchat.botframework.com/embed/NodejsEchoBotTest?s=mszOYMt2gCk.0du-QdeGG1mDlHgpR33pO8z92YWgP5Eg4btzmnQLqNY' style={
          {
            minWidth: '400px',
            width: '100%',
            height: '500px'
          }
        }></iframe>*/}
        <ReactWebChat directLine={this.directLine} userID="YOUR_USER_ID" />
      </div>
    );
  }
}

//console.log(ReactWebChat);

export default CharBot;
