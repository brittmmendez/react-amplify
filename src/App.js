import React, { Component } from 'react';
import './App.css';
// Configure Amplify on the client so that we can use it to interact with our backend services.
import Amplify from "aws-amplify";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'


class App extends Component {

  async componentDidMount() {
    const discoveryAPIbrandCredentials = {
      client_id: "jLvFVkBKWyTxzFyHBkCzkfDUPZtQbVinekLeChtb",
      locale: 'US',
      secret: "rcNMabfuMaLhWSwmTdKDvjJBNthuYhWTazCSAZFCBSgNhiunrzAwkUmVrqctsTAHdbwRfcejZHhXjyfr"
    }

    const base64 = btoa(discoveryAPIbrandCredentials.client_id + ":" + discoveryAPIbrandCredentials.secret)
    const res = await fetch(`https://sd.alchemy.codes/api/v2/config?locale=${discoveryAPIbrandCredentials.locale}`, {
      method: 'GET',
      headers: { authorization: `Basic ${base64}` }
    });
    const data = await res.json();

    const AWSConfig = {
      aws_appsync_region: data.region,
      aws_appsync_graphqlEndpoint: data.apiUrl,
      aws_user_pools_id: data.userPoolId,
      aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
      aws_user_pools_web_client_id: data.webClientId,
      aws_cognito_identity_pool_id: data.identityPoolId,
      aws_cognito_region: data.region,
    }

    Amplify.configure(AWSConfig);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AmplifyAuthenticator>
            <p>hello</p>
          </AmplifyAuthenticator>
        </header>
      </div>
    );
  }
}

export default App
