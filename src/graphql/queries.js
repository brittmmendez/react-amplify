/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const devices = /* GraphQL */ `
  query Devices {
    devices {
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
export const device = /* GraphQL */ `
  query Device($deviceId: String!) {
    device(deviceId: $deviceId) {
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
export const replenishmentToken = /* GraphQL */ `
  query ReplenishmentToken($replenishmentId: ID!) {
    replenishmentToken(replenishmentId: $replenishmentId)
  }
`;
export const sessions = /* GraphQL */ `
  query Sessions(
    $start: AWSDateTime
    $end: AWSDateTime
    $filter: TableSessionFilterInput
    $limit: Int
    $orderBySessionStartTime: Sort
    $nextToken: String
  ) {
    sessions(
      start: $start
      end: $end
      filter: $filter
      limit: $limit
      orderBySessionStartTime: $orderBySessionStartTime
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
      nextToken
    }
  }
`;
export const user = /* GraphQL */ `
  query User {
    user {
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
export const consumables = /* GraphQL */ `
  query Consumables(
    $filter: TableConsumableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    consumables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        consumableId
        deviceId
        startDate
        consumableType
        totalSessionCount
        totalSessionDurationSeconds
        state
      }
      nextToken
    }
  }
`;
