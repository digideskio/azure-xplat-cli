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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidIPAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '36a4834f-79c3-46f8-bc56-8c70733f882e',
  'x-ms-correlation-request-id': '36a4834f-79c3-46f8-bc56-8c70733f882e',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091103Z:36a4834f-79c3-46f8-bc56-8c70733f882e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Dec 2016 09:11:02 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/localNetworkGateways/invalidIPAddressName' under resource group 'xplat-test-local-gateway' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '36a4834f-79c3-46f8-bc56-8c70733f882e',
  'x-ms-correlation-request-id': '36a4834f-79c3-46f8-bc56-8c70733f882e',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091103Z:36a4834f-79c3-46f8-bc56-8c70733f882e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 05 Dec 2016 09:11:02 GMT',
  connection: 'close',
  'content-length': '187' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidIpAddress\",\r\n    \"message\": \"The IP Address 10.0.0.257 is invalid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '132',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '08d0934c-1b8a-45a5-a1ef-e939549d38ae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0c30a217-c0ba-4d30-8879-87c076e0cf29',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091107Z:0c30a217-c0ba-4d30-8879-87c076e0cf29',
  date: 'Mon, 05 Dec 2016 09:11:06 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/invalidIPAddressName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidIpAddress\",\r\n    \"message\": \"The IP Address 10.0.0.257 is invalid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '132',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '08d0934c-1b8a-45a5-a1ef-e939549d38ae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '0c30a217-c0ba-4d30-8879-87c076e0cf29',
  'x-ms-routing-request-id': 'WESTEUROPE:20161205T091107Z:0c30a217-c0ba-4d30-8879-87c076e0cf29',
  date: 'Mon, 05 Dec 2016 09:11:06 GMT',
  connection: 'close' });
 return result; }]];
