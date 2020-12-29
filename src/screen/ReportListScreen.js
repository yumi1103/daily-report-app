import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  AmplifySignOut,
} from '@aws-amplify/ui-react';

export default class ReportListScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { user } = this.props;

    return(
      <div className="App">
        <p>こんにちは！ {user.username}</p>
        <AmplifySignOut />
      </div>
    );
  }
}