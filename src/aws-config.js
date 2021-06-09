// import axios from 'axios';

// const discoveryAPIbrandCredentials = {
//     brandName: "Oral-B US",
//     client_id: "jLvFVkBKWyTxzFyHBkCzkfDUPZtQbVinekLeChtb",
//     locale: 'US',
//     secret: "rcNMabfuMaLhWSwmTdKDvjJBNthuYhWTazCSAZFCBSgNhiunrzAwkUmVrqctsTAHdbwRfcejZHhXjyfr"
// }  

// const awsConfig = async () => {
//   let data = {}
//   const base64 = btoa(discoveryAPIbrandCredentials.client_id + ":" + discoveryAPIbrandCredentials.secret)
//   try {
//     const response = await axios.get(`https://sd.alchemy.codes/api/v2/config?locale=${discoveryAPIbrandCredentials.locale}`, {
//     method: 'GET',
//     headers: { authorization: `Basic ${base64}` }
//     });
    
//     data = {
//       brandName: response.data.brandName,
//       aws_appsync_graphqlEndpoint:response.data.apiUrl,
//       aws_appsync_region: response.data.region,
//       aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",
//       aws_cognito_identity_pool_id:response.data.identityPoolId,
//       region: response.data.region,
//       aws_user_pools_id:response.data.userPoolId,
//       aws_user_pools_web_client_id: response.data.webClientId,
//     };
//   } catch (e) {
//     data = {
//       brandName: 'oralb',
//       aws_appsync_graphqlEndpoint: "https://cqmzvjhyfrfgtapw4ckjd7kg7a.appsync-api.us-east-1.amazonaws.com/graphql",
//       aws_appsync_region: "us-east-1",
//       aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",
//       aws_cognito_identity_pool_id: "us-east-1:f920fcdd-ce3a-49cd-a267-e16585ff55eb",
//       region: "us-east-1",
//       aws_user_pools_id: "us-east-1_E7a11Vigx",
//       aws_user_pools_web_client_id: "32d0jqj246rgfcbe5sv3lb5mse"
//     }
//   }
//   return data
// }

// export default awsConfig

const awsConfig = {
  brandName: 'gillette',
  aws_appsync_graphqlEndpoint: "https://kldwlpu3q5hmpp2itmhk4lfym4.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType:"AMAZON_COGNITO_USER_POOLS",
  aws_cognito_identity_pool_id: "us-east-1:26d44787-4844-443a-b53f-054cf1a66ca1",
  region: "us-east-1",
  aws_user_pools_id: "us-east-1_XciYc4P2t",
  aws_user_pools_web_client_id: "2lt522cv7f633deqgq68nuqg3b"
}

export default awsConfig