// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '00ea9464-da52-4b1d-8b61-f96d4154934f',
  'x-ms-correlation-request-id': '00ea9464-da52-4b1d-8b61-f96d4154934f',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091107Z:00ea9464-da52-4b1d-8b61-f96d4154934f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Dec 2016 09:11:07 GMT',
  connection: 'close',
  'content-length': '195' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '00ea9464-da52-4b1d-8b61-f96d4154934f',
  'x-ms-correlation-request-id': '00ea9464-da52-4b1d-8b61-f96d4154934f',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091107Z:00ea9464-da52-4b1d-8b61-f96d4154934f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Dec 2016 09:11:07 GMT',
  connection: 'close',
  'content-length': '195' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"invalidBgpPeeringAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName\",\r\n  \"etag\": \"W/\\\"54a5a8de-383a-4d3d-9b3a-67b54b580bb6\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"1b99512f-6635-4c09-b2de-3fc2b2ea2852\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": []\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.12\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 1,\r\n      \"bgpPeeringAddress\": \"11.0.0.257\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '708',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e2098dab-0873-4ec3-8f8d-153bc89fa47e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e2098dab-0873-4ec3-8f8d-153bc89fa47e?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8f69f628-f39b-49c5-8005-4d82e0bc8a63',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091111Z:8f69f628-f39b-49c5-8005-4d82e0bc8a63',
  date: 'Mon, 05 Dec 2016 09:11:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"invalidBgpPeeringAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidBgpPeeringAddressName\",\r\n  \"etag\": \"W/\\\"54a5a8de-383a-4d3d-9b3a-67b54b580bb6\\\"\",\r\n  \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"1b99512f-6635-4c09-b2de-3fc2b2ea2852\",\r\n    \"localNetworkAddressSpace\": {\r\n      \"addressPrefixes\": []\r\n    },\r\n    \"gatewayIpAddress\": \"10.0.0.12\",\r\n    \"bgpSettings\": {\r\n      \"asn\": 1,\r\n      \"bgpPeeringAddress\": \"11.0.0.257\",\r\n      \"peerWeight\": 0\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '708',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'e2098dab-0873-4ec3-8f8d-153bc89fa47e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e2098dab-0873-4ec3-8f8d-153bc89fa47e?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8f69f628-f39b-49c5-8005-4d82e0bc8a63',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091111Z:8f69f628-f39b-49c5-8005-4d82e0bc8a63',
  date: 'Mon, 05 Dec 2016 09:11:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e2098dab-0873-4ec3-8f8d-153bc89fa47e?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Failed\",\r\n  \"error\": {\r\n    \"code\": \"InternalServerError\",\r\n    \"message\": \" InternalError - BadRequest: InvalidIPAddress - The specified BGP peer IP address '11.0.0.257' is not valid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '229',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2a1ec960-0bd6-44f8-acd9-9cb45b9109bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14860',
  'x-ms-correlation-request-id': '5cca7eea-2454-4fca-9164-b7f5678ab3a4',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091142Z:5cca7eea-2454-4fca-9164-b7f5678ab3a4',
  date: 'Mon, 05 Dec 2016 09:11:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/e2098dab-0873-4ec3-8f8d-153bc89fa47e?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Failed\",\r\n  \"error\": {\r\n    \"code\": \"InternalServerError\",\r\n    \"message\": \" InternalError - BadRequest: InvalidIPAddress - The specified BGP peer IP address '11.0.0.257' is not valid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '229',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2a1ec960-0bd6-44f8-acd9-9cb45b9109bb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14860',
  'x-ms-correlation-request-id': '5cca7eea-2454-4fca-9164-b7f5678ab3a4',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091142Z:5cca7eea-2454-4fca-9164-b7f5678ab3a4',
  date: 'Mon, 05 Dec 2016 09:11:42 GMT',
  connection: 'close' });
 return result; }]];
