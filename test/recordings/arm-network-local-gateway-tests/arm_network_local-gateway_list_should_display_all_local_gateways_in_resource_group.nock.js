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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"test-local-gateway\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-local-gateway/providers/Microsoft.Network/localNetworkGateways/test-local-gateway\",\r\n      \"etag\": \"W/\\\"a7a64041-5bba-4bdf-889b-762bc922b25e\\\"\",\r\n      \"type\": \"Microsoft.Network/localNetworkGateways\",\r\n      \"location\": \"eastus\",\r\n      \"tags\": {\r\n        \"tag1\": \"aaa\",\r\n        \"tag2\": \"bbb\",\r\n        \"tag3\": \"ccc\"\r\n      },\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"d9a5c50c-93d1-401a-8af6-551fe3cc82a3\",\r\n        \"localNetworkAddressSpace\": {\r\n          \"addressPrefixes\": [\r\n            \"10.0.0.0/24\",\r\n            \"10.1.0.0/24\"\r\n          ]\r\n        },\r\n        \"gatewayIpAddress\": \"10.0.0.0\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '826',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6b848f58-b788-44b8-9d06-568adf9ca566',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'db51395b-e830-447a-ae1e-1d7c3db7e322',
  'x-ms-routing-request-id': 'WESTEUROPE:20161207T140741Z:db51395b-e830-447a-ae1e-1d7c3db7e322',
  date: 'Wed, 07 Dec 2016 14:07:41 GMT' });
 return result; }]];
