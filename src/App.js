import React, { useEffect, useState } from 'react'
import './App.css';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'

import { createDevice } from './graphql/mutations'
import { devices } from './graphql/queries'

import awsConfig from "./aws-config"
Amplify.configure(awsConfig)

const App = () => {
  // async componentDidMount() {
  //   const config = await awsConfig()
  //   Amplify.configure(config)
  // }
  const [devicesState, setDevices] = useState([])

  useEffect(() => {
    fetchDevices()
  }, [])

  async function fetchDevices() {
    try {
      const devicesData = await API.graphql(graphqlOperation(devices))
      setDevices(devicesData.data.devices)
    } catch (err) { console.log('error fetching devices') }
  }

    return (
      <div className="App" style={styles.container}>
          <h2>Welcome to your {awsConfig.brandName} Account Dashboard</h2>
          <AmplifyAuthenticator>
            {
              devicesState.map((device, index) => (
                <div key={device.thingName} style={styles.todo}>
                  <p style={styles.todoName} >{device.thingName}</p>
                </div>
              ))
            }
          </AmplifyAuthenticator>
      </div>
    );
}

const styles = {
  container: { width: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}


export default App
