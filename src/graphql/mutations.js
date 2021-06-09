/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConsumable = /* GraphQL */ `
  mutation CreateConsumable(
    $deviceId: ID!
    $deviceType: DeviceType!
    $startDate: AWSDateTime!
    $consumableType: ConsumableType!
  ) {
    createConsumable(
      deviceId: $deviceId
      deviceType: $deviceType
      startDate: $startDate
      consumableType: $consumableType
    ) {
      consumableId
      deviceId
      startDate
      consumableType
      totalSessionCount
      totalSessionDurationSeconds
      state
    }
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
    $configType: String
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
      configType: $configType
    )
  }
`;
export const cancelJob = /* GraphQL */ `
  mutation CancelJob($input: CancelJobInput!) {
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
export const createReplenishment = /* GraphQL */ `
  mutation CreateReplenishment(
    $refreshToken: String!
    $clientId: String!
    $serialNumber: String!
    $replenishmentType: ReplenishmentType
  ) {
    createReplenishment(
      refreshToken: $refreshToken
      clientId: $clientId
      serialNumber: $serialNumber
      replenishmentType: $replenishmentType
    ) {
      replenishmentId
      replenishmentType
      nextOrderDate
      status
      productId
      quantity
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice($deviceId: ID!, $deviceType: DeviceType!) {
    deleteDevice(deviceId: $deviceId, deviceType: $deviceType)
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession($sessionId: String!) {
    deleteSession(sessionId: $sessionId)
  }
`;
export const deleteSubscription = /* GraphQL */ `
  mutation DeleteSubscription($subscriptionId: ID!) {
    deleteSubscription(subscriptionId: $subscriptionId)
  }
`;
export const deleteReplenishment = /* GraphQL */ `
  mutation DeleteReplenishment($replenishmentId: ID!) {
    deleteReplenishment(replenishmentId: $replenishmentId)
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser {
    deleteUser
  }
`;
export const placeOrder = /* GraphQL */ `
  mutation PlaceOrder($replenishmentId: ID!) {
    placeOrder(replenishmentId: $replenishmentId) {
      orderId
      status
    }
  }
`;
export const updateConsumable = /* GraphQL */ `
  mutation UpdateConsumable(
    $consumableId: ID!
    $startDate: AWSDateTime
    $consumableType: ConsumableType
    $state: ConsumableState
    $totalSessionCount: Int
    $totalSessionDurationSeconds: Int
  ) {
    updateConsumable(
      consumableId: $consumableId
      startDate: $startDate
      consumableType: $consumableType
      state: $state
      totalSessionCount: $totalSessionCount
      totalSessionDurationSeconds: $totalSessionDurationSeconds
    ) {
      consumableId
      deviceId
      startDate
      consumableType
      totalSessionCount
      totalSessionDurationSeconds
      state
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice($input: UpdateDeviceInput) {
    updateDevice(input: $input) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput) {
    updateUser(input: $input) {
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
      termsAndConditions
      timezone
      subscriptions {
        subscriptionId
        subscriptionType
        nextOrderDate
        status
        productId
      }
      replenishmentServices {
        replenishmentId
        replenishmentType
        nextOrderDate
        status
        productId
        quantity
      }
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $sessionId: ID!
    $deviceId: ID
    $deviceType: DeviceType
    $parentDeviceId: ID
    $parentDeviceType: DeviceType
  ) {
    updateSession(
      sessionId: $sessionId
      deviceId: $deviceId
      deviceType: $deviceType
      parentDeviceId: $parentDeviceId
      parentDeviceType: $parentDeviceType
    ) {
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
export const updateBrushingSession = /* GraphQL */ `
  mutation UpdateBrushingSession($input: UpdateSessionInput!) {
    updateBrushingSession(input: $input) {
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
export const sessionStream = /* GraphQL */ `
  mutation SessionStream($sessionId: ID!, $consumerId: ID!) {
    sessionStream(sessionId: $sessionId, consumerId: $consumerId) {
      sessionId
      consumerId
    }
  }
`;
