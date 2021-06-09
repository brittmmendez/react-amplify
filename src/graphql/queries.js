/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const devices = /* GraphQL */ `
  query Devices {
    devices {
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
export const device = /* GraphQL */ `
  query Device($deviceId: String!) {
    device(deviceId: $deviceId) {
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
export const deviceHistory = /* GraphQL */ `
  query DeviceHistory(
    $filter: TableDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    deviceHistory(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const logs = /* GraphQL */ `
  query Logs($filter: TableLogFilterInput, $limit: Int, $nextToken: String) {
    logs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        consumerId
        message
        receivedTime
        statusCode
        deviceId
      }
      nextToken
    }
  }
`;
export const pendingJobs = /* GraphQL */ `
  query PendingJobs($deviceId: String!, $deviceType: DeviceType!) {
    pendingJobs(deviceId: $deviceId, deviceType: $deviceType) {
      executionSummaries {
        status
      }
    }
  }
`;
export const allJobs = /* GraphQL */ `
  query AllJobs($deviceId: String!, $deviceType: DeviceType!) {
    allJobs(deviceId: $deviceId, deviceType: $deviceType) {
      executionSummaries {
        status
      }
    }
  }
`;
export const sessions = /* GraphQL */ `
  query Sessions(
    $start: AWSDateTime
    $end: AWSDateTime
    $filter: TableSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessions(
      start: $start
      end: $end
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const user = /* GraphQL */ `
  query User {
    user {
      cartridgeCount
      cartridgeLifeThresholds
      consumerId
      country
      createdAt
      doNotSell
      email
      familyName
      givenName
      marketingOptIn
      notificationPreferences
      phoneNumber
      subscriptions {
        subscriptionId
        subscriptionType
        nextOrderDate
        status
        productId
      }
      termsAndConditions
      timezone
      userSurvey
    }
  }
`;
