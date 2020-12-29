import React from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignUp
} from '@aws-amplify/ui-react';
import '../App.css';

export default class AuthScreen extends React.Component {
    render() {
      return (
        <AmplifyAuthenticator>
          <AmplifySignUp
            slot="sign-up"
            formFields={[
              { type: "username" },
              { type: "password" },
              { type: "email" }
            ]}
          />
        </AmplifyAuthenticator>
      );
    }
}
