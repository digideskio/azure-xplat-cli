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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"8afde244-2085-409c-8b94-4f9e50aeac10\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b34ebada-cd12-4f01-993a-2c9f21fa0cf3\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"8afde244-2085-409c-8b94-4f9e50aeac10\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"8afde244-2085-409c-8b94-4f9e50aeac10\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"probeName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/probes/probeName\",\r\n        \"etag\": \"W/\\\"8afde244-2085-409c-8b94-4f9e50aeac10\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2247',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8afde244-2085-409c-8b94-4f9e50aeac10"',
  'x-ms-request-id': '3101bc2d-f59a-4496-bf64-d671dab658d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '080e32bc-1088-41a5-98ba-f0f6e531187a',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T160859Z:080e32bc-1088-41a5-98ba-f0f6e531187a',
  date: 'Fri, 10 Mar 2017 16:08:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"8afde244-2085-409c-8b94-4f9e50aeac10\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"b34ebada-cd12-4f01-993a-2c9f21fa0cf3\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"8afde244-2085-409c-8b94-4f9e50aeac10\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"8afde244-2085-409c-8b94-4f9e50aeac10\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"probeName\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/probes/probeName\",\r\n        \"etag\": \"W/\\\"8afde244-2085-409c-8b94-4f9e50aeac10\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2247',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"8afde244-2085-409c-8b94-4f9e50aeac10"',
  'x-ms-request-id': '3101bc2d-f59a-4496-bf64-d671dab658d4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14954',
  'x-ms-correlation-request-id': '080e32bc-1088-41a5-98ba-f0f6e531187a',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T160859Z:080e32bc-1088-41a5-98ba-f0f6e531187a',
  date: 'Fri, 10 Mar 2017 16:08:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource FrontendPortOverAllowedValueName has invalid value of FrontendPort (65535). The value must be between 1 and 65534.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '223',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '73174395-8438-4bb8-973c-5539bb79c138',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1176',
  'x-ms-correlation-request-id': '18386a3c-eee4-41fb-a8b5-d3b927918356',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T160900Z:18386a3c-eee4-41fb-a8b5-d3b927918356',
  date: 'Fri, 10 Mar 2017 16:08:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"PortValueIsOutOfRange\",\r\n    \"message\": \"Resource FrontendPortOverAllowedValueName has invalid value of FrontendPort (65535). The value must be between 1 and 65534.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '223',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '73174395-8438-4bb8-973c-5539bb79c138',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1176',
  'x-ms-correlation-request-id': '18386a3c-eee4-41fb-a8b5-d3b927918356',
  'x-ms-routing-request-id': 'CANADAEAST:20170310T160900Z:18386a3c-eee4-41fb-a8b5-d3b927918356',
  date: 'Fri, 10 Mar 2017 16:08:59 GMT',
  connection: 'close' });
 return result; }]];
