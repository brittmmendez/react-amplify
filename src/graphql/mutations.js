/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const claimDevice = /* GraphQL */ `
  mutation ClaimDevice($deviceId: ID!, $deviceType: DeviceType!) {
    claimDevice(deviceId: $deviceId, deviceType: $deviceType) {
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
export const rejectCartridgeEject = /* GraphQL */ `
  mutation RejectCartridgeEject($sessionId: ID!) {
    rejectCartridgeEject(sessionId: $sessionId)
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice($deviceId: ID!, $deviceType: DeviceType!) {
    createDevice(deviceId: $deviceId, deviceType: $deviceType) {
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
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $deviceId: ID!
    $deviceType: DeviceType!
    $operation: TaskType!
    $fileName: String
    $fileSize: String
    $force: Boolean
    $md5: String
    $target: String
    $version: String
  ) {
    createJob(
      deviceId: $deviceId
      deviceType: $deviceType
      operation: $operation
      fileName: $fileName
      fileSize: $fileSize
      force: $force
      md5: $md5
      target: $target
      version: $version
    )
  }
`;
export const cancelJob = /* GraphQL */ `
  mutation CancelJob($input: CancelJobInput) {
    cancelJob(input: $input)
  }
`;
export const createSession = /* GraphQL */ `
  mutation CreateSession($input: CreateSessionInput!) {
    createSession(input: $input) {
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
export const createSubscription = /* GraphQL */ `
  mutation CreateSubscription(
    $refreshToken: String!
    $clientId: String!
    $subscriptionType: SubscriptionType
  ) {
    createSubscription(
      refreshToken: $refreshToken
      clientId: $clientId
      subscriptionType: $subscriptionType
    ) {
      subscriptionId
      subscriptionType
      nextOrderDate
      status
      productId
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice($deviceId: ID!, $deviceType: DeviceType!) {
    deleteDevice(deviceId: $deviceId, deviceType: $deviceType)
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession($sessionId: ID!) {
    deleteSession(sessionId: $sessionId)
  }
`;
export const deleteSubscription = /* GraphQL */ `
  mutation DeleteSubscription($subscriptionId: ID!) {
    deleteSubscription(subscriptionId: $subscriptionId)
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser {
    deleteUser
  }
`;
export const placeOrder = /* GraphQL */ `
  mutation PlaceOrder($subscriptionId: ID!) {
    placeOrder(subscriptionId: $subscriptionId) {
      orderId
      status
    }
  }
`;
export const unclaimDevice = /* GraphQL */ `
  mutation UnclaimDevice($deviceId: ID!, $deviceType: DeviceType!) {
    unclaimDevice(deviceId: $deviceId, deviceType: $deviceType)
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice($input: UpdateDeviceInput) {
    updateDevice(input: $input) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
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
export const sessionStream = /* GraphQL */ `
  mutation SessionStream($sessionId: ID!, $consumerId: ID!) {
    sessionStream(sessionId: $sessionId, consumerId: $consumerId) {
      sessionId
      consumerId
    }
  }
`;
