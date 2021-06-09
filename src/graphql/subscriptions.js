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
        baseConnectColor
        baseDockedColor
        baseDownloadColor
        baseFirmwareVersion
        baseReadyColor
        baseUploadColor
        batteryLevel
        cartridgeUse
        cellBand
        cellDetail
        cellStrength
        displayBrightness
        firmwareMode
        handleChargingColor
        handleDocked
        handleDockedColor
        handleDownloadColor
        handleFirmwareVersion
        handleId
        handleMode
        handlePressureHighColor
        handlePressureLowColor
        handlePressureMedColor
        heaterLevel
        lastCartridgeReplacement
        logLevel
        operatingSystem
        operatingSystemVersion
        memoryUsed
        pressureBaseline
        pressureHysteresis
        pressureThreshold1
        pressureThreshold2
        pressureThreshold2ModeHigh
        pressureThreshold2ModeLow
        pressureThreshold2ModeMedium
        pressureThresholdStroke
        rssi
        sensorRangeAcceleration
        sensorRangeGyro
        sensorRangeMag
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
      algoVersion
      cartridgeChange
      cartridgeChangeStatus
      cartridgeUse
      client
      clientVersion
      diagnosticResult
      errorCode
      errorMessage
      handleMode
      modelVersion
      operatingSystem
      operatingSystemVersion
      percentageOverThreshold
      percentageOverThresholdByStroke
      sessionDuration
      sessionStartTime
      sessionStrokes
      sessionStrokesDuration
      sessionStrokesStats
      sessionStrokeCount
      sessionType
      threshold1
      threshold2
      zonedPressureTime
      zonedRepeatTime
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
      createdBy
      deviceId
      deviceType
      receivedTime
      stateId
      thingName
      traceId
      consumerId
      status
      baseConnectColor
      baseDockedColor
      baseDownloadColor
      baseFirmwareVersion
      baseReadyColor
      baseUploadColor
      batteryLevel
      cartridgeUse
      cellBand
      cellDetail
      cellStrength
      displayBrightness
      firmwareMode
      handleChargingColor
      handleDocked
      handleDockedColor
      handleDownloadColor
      handleFirmwareVersion
      handleId
      handleMode
      handlePressureHighColor
      handlePressureLowColor
      handlePressureMedColor
      heaterLevel
      lastCartridgeReplacement
      logLevel
      operatingSystem
      operatingSystemVersion
      memoryUsed
      pressureBaseline
      pressureHysteresis
      pressureThreshold1
      pressureThreshold2
      pressureThreshold2ModeHigh
      pressureThreshold2ModeLow
      pressureThreshold2ModeMedium
      pressureThresholdStroke
      rssi
      sensorRangeAcceleration
      sensorRangeGyro
      sensorRangeMag
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
