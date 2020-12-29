import React from 'react';
import { I18n } from "aws-amplify";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { dictionary } from './I18n/amplify/index';
import AuthScreen from './screen/AuthScreen';
import ReportListScreen from './screen/ReportListScreen';
import './App.css';

I18n.putVocabularies(dictionary);
I18n.setLanguage("ja");

function App() {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
        setAuthState(nextAuthState);
        setUser(authData)
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <ReportListScreen user={user} />
  ) : (
    <AuthScreen />
  );
}

export default App;
