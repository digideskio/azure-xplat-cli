// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e55e7c87-7bdc-445b-8213-56cdfca27374',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'fc53715f-c87b-43fc-9876-78ef5139cf26',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"dd051226-f582-4e32-aa05-d54f8cc2e444\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"dd051226-f582-4e32-aa05-d54f8cc2e444\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65010,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9b634a19-e299-4793-bc9a-f2c814076b1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '4585e768-1498-4e2a-8dc4-053df9b19f94',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T122918Z:4585e768-1498-4e2a-8dc4-053df9b19f94',
  date: 'Tue, 18 Apr 2017 12:29:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"dd051226-f582-4e32-aa05-d54f8cc2e444\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"dd051226-f582-4e32-aa05-d54f8cc2e444\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"bgpSettings\": {\r\n      \"asn\": 65010,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1777',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9b634a19-e299-4793-bc9a-f2c814076b1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '4585e768-1498-4e2a-8dc4-053df9b19f94',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T122918Z:4585e768-1498-4e2a-8dc4-053df9b19f94',
  date: 'Tue, 18 Apr 2017 12:29:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"24460d18-481b-4224-b2b6-e391fa97842c\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"24460d18-481b-4224-b2b6-e391fa97842c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2027',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd5b1c87a-db3c-4567-82ac-44049cdc6639',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd756296e-ff12-4ee3-9b7f-3ec446bc99ff',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T122919Z:d756296e-ff12-4ee3-9b7f-3ec446bc99ff',
  date: 'Tue, 18 Apr 2017 12:29:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"24460d18-481b-4224-b2b6-e391fa97842c\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"24460d18-481b-4224-b2b6-e391fa97842c\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": []\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2027',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd5b1c87a-db3c-4567-82ac-44049cdc6639',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'd756296e-ff12-4ee3-9b7f-3ec446bc99ff',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T122919Z:d756296e-ff12-4ee3-9b7f-3ec446bc99ff',
  date: 'Tue, 18 Apr 2017 12:29:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5aae029c-eff0-4f1c-80a8-f306525697b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '77b01f3a-2d37-42b9-96a6-c3e85c27787a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T122949Z:77b01f3a-2d37-42b9-96a6-c3e85c27787a',
  date: 'Tue, 18 Apr 2017 12:29:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5aae029c-eff0-4f1c-80a8-f306525697b7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '77b01f3a-2d37-42b9-96a6-c3e85c27787a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T122949Z:77b01f3a-2d37-42b9-96a6-c3e85c27787a',
  date: 'Tue, 18 Apr 2017 12:29:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5b406c7d-e096-4d3d-baaf-7fb8a03546dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '9c0ae26f-3186-4ff6-8635-663d4dacda19',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123020Z:9c0ae26f-3186-4ff6-8635-663d4dacda19',
  date: 'Tue, 18 Apr 2017 12:30:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5b406c7d-e096-4d3d-baaf-7fb8a03546dc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '9c0ae26f-3186-4ff6-8635-663d4dacda19',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123020Z:9c0ae26f-3186-4ff6-8635-663d4dacda19',
  date: 'Tue, 18 Apr 2017 12:30:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '491f33de-17ef-48d9-8c21-df45a223dd0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'ee3cf182-4f94-4dd7-8968-10280d792d17',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123050Z:ee3cf182-4f94-4dd7-8968-10280d792d17',
  date: 'Tue, 18 Apr 2017 12:30:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '491f33de-17ef-48d9-8c21-df45a223dd0f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': 'ee3cf182-4f94-4dd7-8968-10280d792d17',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123050Z:ee3cf182-4f94-4dd7-8968-10280d792d17',
  date: 'Tue, 18 Apr 2017 12:30:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5b4feaa3-6b27-40e8-90d8-96c0e5b20a7a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '56ee03ed-f055-4981-8702-ff6cde026c64',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123121Z:56ee03ed-f055-4981-8702-ff6cde026c64',
  date: 'Tue, 18 Apr 2017 12:31:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '5b4feaa3-6b27-40e8-90d8-96c0e5b20a7a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '56ee03ed-f055-4981-8702-ff6cde026c64',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123121Z:56ee03ed-f055-4981-8702-ff6cde026c64',
  date: 'Tue, 18 Apr 2017 12:31:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6978e60e-5056-431e-9172-94b75b43dd44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '89b85a5c-2467-44f3-a24f-410461aa4eb9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123152Z:89b85a5c-2467-44f3-a24f-410461aa4eb9',
  date: 'Tue, 18 Apr 2017 12:31:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6978e60e-5056-431e-9172-94b75b43dd44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '89b85a5c-2467-44f3-a24f-410461aa4eb9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123152Z:89b85a5c-2467-44f3-a24f-410461aa4eb9',
  date: 'Tue, 18 Apr 2017 12:31:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd9240b67-1b10-40a9-9227-efd4620e7497',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ba4abca4-223e-46af-b783-0666ce3517e8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123222Z:ba4abca4-223e-46af-b783-0666ce3517e8',
  date: 'Tue, 18 Apr 2017 12:32:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'd9240b67-1b10-40a9-9227-efd4620e7497',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ba4abca4-223e-46af-b783-0666ce3517e8',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123222Z:ba4abca4-223e-46af-b783-0666ce3517e8',
  date: 'Tue, 18 Apr 2017 12:32:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '61ec6b45-46f2-4211-940d-62667d24580f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'f959cfcf-fd80-4f88-9c6f-e154958d6610',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123253Z:f959cfcf-fd80-4f88-9c6f-e154958d6610',
  date: 'Tue, 18 Apr 2017 12:32:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '61ec6b45-46f2-4211-940d-62667d24580f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': 'f959cfcf-fd80-4f88-9c6f-e154958d6610',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123253Z:f959cfcf-fd80-4f88-9c6f-e154958d6610',
  date: 'Tue, 18 Apr 2017 12:32:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3e9d1246-7c99-436b-9d6f-891b674d11c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3af6ab69-8761-4b58-bfd9-0a0eb8e5f5d4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123323Z:3af6ab69-8761-4b58-bfd9-0a0eb8e5f5d4',
  date: 'Tue, 18 Apr 2017 12:33:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '3e9d1246-7c99-436b-9d6f-891b674d11c4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3af6ab69-8761-4b58-bfd9-0a0eb8e5f5d4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123323Z:3af6ab69-8761-4b58-bfd9-0a0eb8e5f5d4',
  date: 'Tue, 18 Apr 2017 12:33:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '1de95046-b221-4473-a61f-b639694fd81e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '0700f1f7-8238-4bc1-895c-68eb1141c829',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123354Z:0700f1f7-8238-4bc1-895c-68eb1141c829',
  date: 'Tue, 18 Apr 2017 12:33:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"InProgress\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '30',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '1de95046-b221-4473-a61f-b639694fd81e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '0700f1f7-8238-4bc1-895c-68eb1141c829',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123354Z:0700f1f7-8238-4bc1-895c-68eb1141c829',
  date: 'Tue, 18 Apr 2017 12:33:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '13e8fcd2-1628-46fb-af27-ac74a5319249',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '9d26abb6-10c7-4f66-ad04-a7dd6ef92e61',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123424Z:9d26abb6-10c7-4f66-ad04-a7dd6ef92e61',
  date: 'Tue, 18 Apr 2017 12:34:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/d5b1c87a-db3c-4567-82ac-44049cdc6639?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '13e8fcd2-1628-46fb-af27-ac74a5319249',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '9d26abb6-10c7-4f66-ad04-a7dd6ef92e61',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123424Z:9d26abb6-10c7-4f66-ad04-a7dd6ef92e61',
  date: 'Tue, 18 Apr 2017 12:34:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"b1acbfaa-c932-4188-803c-3d30888f12e0\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"b1acbfaa-c932-4188-803c-3d30888f12e0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2204',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a78ba4c3-d56d-43cb-9c9e-5383ae89f327',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'aba857c4-9a48-4375-91dd-3744ec1ed812',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123425Z:aba857c4-9a48-4375-91dd-3744ec1ed812',
  date: 'Tue, 18 Apr 2017 12:34:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"b1acbfaa-c932-4188-803c-3d30888f12e0\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"b1acbfaa-c932-4188-803c-3d30888f12e0\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2204',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a78ba4c3-d56d-43cb-9c9e-5383ae89f327',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'aba857c4-9a48-4375-91dd-3744ec1ed812',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T123425Z:aba857c4-9a48-4375-91dd-3744ec1ed812',
  date: 'Tue, 18 Apr 2017 12:34:24 GMT',
  connection: 'close' });
 return result; }]];
