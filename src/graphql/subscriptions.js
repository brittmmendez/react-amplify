/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createdDevice = /* GraphQL */ `
  subscription CreatedDevice {
    createdDevice {
      cert
      device {
        createdBy
        deviceId
        deviceType
        receivedTime
        stateId
        thingName
        traceId
        consumerId
        status
        brushHeadDate
        firmwareVersion
        logLevel
        macAddress
        name
        operatingSystem
        operatingSystemVersion
        parentDeviceId
        protocolVersion
        remainingBrushHeadDays
        ringColor
        rssi
        ssid
        voiceAssistantConfigured
      }
      privateKey
    }
  }
`;
export const createdSession = /* GraphQL */ `
  subscription CreatedSession {
    createdSession {
      deviceId
      deviceType
      receivedTime
      thingName
      traceId
      consumerId
      sessionId
      batteryLevel
      brushModel
      brushScore
      brushingDuration
      cleanTongue
      client
      clientVersion
      coveragePercentage
      flossTeeth
      gatewayModel
      gumBleeding
      handleSessionId
      onEventCount
      operatingSystem
      operatingSystemVersion
      parentDeviceId
      pressureDistribution
      pressureDuration
      pressureEventCount
      primaryBrushingMode
      rinseMouth
      sessionStartTime
      sessionType
      zonedBrushTime
      zonedPressureTime
    }
  }
`;
export const deletedDevice = /* GraphQL */ `
  subscription DeletedDevice {
    deletedDevice
  }
`;
export const deletedUser = /* GraphQL */ `
  subscription DeletedUser {
    deletedUser
  }
`;
export const updatedDevice = /* GraphQL */ `
  subscription UpdatedDevice {
    updatedDevice {
      consumables {
        consumableId
        deviceId
        startDate
        consumableType
        totalSessionCount
        totalSessionDurationSeconds
        state
      }
      createdBy
      deviceId
      deviceType
      receivedTime
      stateId
      thingName
      traceId
      consumerId
      status
      brushHeadDate
      firmwareVersion
      logLevel
      macAddress
      name
      operatingSystem
      operatingSystemVersion
      parentDeviceId
      protocolVersion
      remainingBrushHeadDays
      ringColor
      rssi
      ssid
      voiceAssistantConfigured
    }
  }
`;
export const sessionStream = /* GraphQL */ `
  subscription SessionStream {
    sessionStream {
      sessionId
      consumerId
    }
  }
`;
