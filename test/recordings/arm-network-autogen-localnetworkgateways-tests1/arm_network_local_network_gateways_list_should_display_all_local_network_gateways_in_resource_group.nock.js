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
    registeredProviders: [],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"localNetworkGatewaysName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n      \"etag\": \"W/\\\"56ba2528-6e65-454a-be16-3bfa02d9545b\\\"\",\r\n      \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"9b21ea82-cbaa-45f4-ae3b-5fa58cac19b6\",\r\n        \"localNetworkAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/8\",\r\n            \"192.168.0.0/16\"\r\n          ]\r\n        },\r\n        \"gatewayIpAddress\": \"10.0.0.24\",\r\n        \"bgpSettings\": {\r\n          \"asn\": 142,\r\n          \"bgpPeeringAddress\": \"11.0.0.12\",\r\n          \"peerWeight\": 25\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '877',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '312bc0ba-3221-45cd-bf4f-229f8be7ff92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'de1d5b4d-beba-4858-b2d0-f514b8a8ef80',
  'x-ms-routing-request-id': 'WESTEUROPE:20170601T075749Z:de1d5b4d-beba-4858-b2d0-f514b8a8ef80',
  date: 'Thu, 01 Jun 2017 07:57:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"localNetworkGatewaysName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/localNetworkGatewaysName\",\r\n      \"etag\": \"W/\\\"56ba2528-6e65-454a-be16-3bfa02d9545b\\\"\",\r\n      \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"9b21ea82-cbaa-45f4-ae3b-5fa58cac19b6\",\r\n        \"localNetworkAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/8\",\r\n            \"192.168.0.0/16\"\r\n          ]\r\n        },\r\n        \"gatewayIpAddress\": \"10.0.0.24\",\r\n        \"bgpSettings\": {\r\n          \"asn\": 142,\r\n          \"bgpPeeringAddress\": \"11.0.0.12\",\r\n          \"peerWeight\": 25\r\n        }\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '877',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '312bc0ba-3221-45cd-bf4f-229f8be7ff92',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'de1d5b4d-beba-4858-b2d0-f514b8a8ef80',
  'x-ms-routing-request-id': 'WESTEUROPE:20170601T075749Z:de1d5b4d-beba-4858-b2d0-f514b8a8ef80',
  date: 'Thu, 01 Jun 2017 07:57:49 GMT',
  connection: 'close' });
 return result; }]];