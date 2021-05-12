import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Configure Amplify on the client so that we can use it to interact with our backend services.
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

// // switch awsExports on line 44 with setDiscoveryConfig if you only want to connect to discovery api
// async setDiscoveryConfig() {
//   const discoveryAPIbrandCredentials = {
//     brandName: "Oral-B US",
//     client_id: "jLvFVkBKWyTxzFyHBkCzkfDUPZtQbVinekLeChtb",
//     locale: 'US',
//     secret: "rcNMabfuMaLhWSwmTdKDvjJBNthuYhWTazCSAZFCBSgNhiunrzAwkUmVrqctsTAHdbwRfcejZHhXjyfr"
//   }

//   // make fetch request to discovery api with client_id and secret
//   const base64 = btoa(discoveryAPIbrandCredentials.client_id + ":" + discoveryAPIbrandCredentials.secret)
//   const res = await fetch(`https://sd.alchemy.codes/api/v2/config?locale=${discoveryAPIbrandCredentials.locale}`, {
//     method: 'GET',
//     headers: { authorization: `Basic ${base64}` }
//   });
//   const data = await res.json();

//   // set our current config based on results we get back from discovery api
//   const discoveryConfig = {
//     brandName: data.brandName,
//     aws_appsync_graphqlEndpoint: data.apiUrl,
//     aws_appsync_region: data.region,
//     aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
//     aws_cognito_identity_pool_id: data.identityPoolId,
//     region: data.region,
//     aws_user_pools_id: data.userPoolId,
//     aws_user_pools_web_client_id: data.webClientId,
//   }

//   return discoveryConfig
// },

Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
