// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestLbLbNatPool\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool\",\r\n  \"etag\": \"W/\\\"60cacde0-2a7e-4270-9cdf-9019760f9ba7\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e54ab92c-f428-4fa8-87c3-8fe971cab109\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpNatPool\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/frontendIPConfigurations/xplattestFrontendIpNatPool\",\r\n        \"etag\": \"W/\\\"60cacde0-2a7e-4270-9cdf-9019760f9ba7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNatPool\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/inboundNatPools/xplattestInboundNatPool\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"xplattestInboundNatPool\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/inboundNatPools/xplattestInboundNatPool\",\r\n        \"etag\": \"W/\\\"60cacde0-2a7e-4270-9cdf-9019760f9ba7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 31,\r\n          \"frontendPortRangeEnd\": 41,\r\n          \"backendPort\": 3381,\r\n          \"protocol\": \"Udp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/frontendIPConfigurations/xplattestFrontendIpNatPool\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2547',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"60cacde0-2a7e-4270-9cdf-9019760f9ba7"',
  'x-ms-request-id': '381b24c2-c7fd-47e0-bfd4-2fc27ba76473',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c27db727-8e67-429d-bd8c-c0296ab1b731',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150928T071142Z:c27db727-8e67-429d-bd8c-c0296ab1b731',
  date: 'Mon, 28 Sep 2015 07:11:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestLbLbNatPool\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool\",\r\n  \"etag\": \"W/\\\"60cacde0-2a7e-4270-9cdf-9019760f9ba7\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e54ab92c-f428-4fa8-87c3-8fe971cab109\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpNatPool\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/frontendIPConfigurations/xplattestFrontendIpNatPool\",\r\n        \"etag\": \"W/\\\"60cacde0-2a7e-4270-9cdf-9019760f9ba7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNatPool\"\r\n          },\r\n          \"inboundNatPools\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/inboundNatPools/xplattestInboundNatPool\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": [\r\n      {\r\n        \"name\": \"xplattestInboundNatPool\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/inboundNatPools/xplattestInboundNatPool\",\r\n        \"etag\": \"W/\\\"60cacde0-2a7e-4270-9cdf-9019760f9ba7\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendPortRangeStart\": 31,\r\n          \"frontendPortRangeEnd\": 41,\r\n          \"backendPort\": 3381,\r\n          \"protocol\": \"Udp\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/frontendIPConfigurations/xplattestFrontendIpNatPool\"\r\n          }\r\n        }\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2547',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"60cacde0-2a7e-4270-9cdf-9019760f9ba7"',
  'x-ms-request-id': '381b24c2-c7fd-47e0-bfd4-2fc27ba76473',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'c27db727-8e67-429d-bd8c-c0296ab1b731',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150928T071142Z:c27db727-8e67-429d-bd8c-c0296ab1b731',
  date: 'Mon, 28 Sep 2015 07:11:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestLbLbNatPool\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool\",\r\n  \"etag\": \"W/\\\"ee6795f0-c01d-4f79-b606-2f87a5f98a57\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e54ab92c-f428-4fa8-87c3-8fe971cab109\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpNatPool\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/frontendIPConfigurations/xplattestFrontendIpNatPool\",\r\n        \"etag\": \"W/\\\"ee6795f0-c01d-4f79-b606-2f87a5f98a57\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNatPool\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a639b7b8-86ec-4d0c-a9aa-8ea72fe0d5b5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/a639b7b8-86ec-4d0c-a9aa-8ea72fe0d5b5?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6f75042d-5f73-4830-8f80-7894eca80dfd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150928T071142Z:6f75042d-5f73-4830-8f80-7894eca80dfd',
  date: 'Mon, 28 Sep 2015 07:11:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool?api-version=2015-05-01-preview', '*')
  .reply(200, "{\r\n  \"name\": \"xplattestLbLbNatPool\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool\",\r\n  \"etag\": \"W/\\\"ee6795f0-c01d-4f79-b606-2f87a5f98a57\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"e54ab92c-f428-4fa8-87c3-8fe971cab109\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpNatPool\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/loadBalancers/xplattestLbLbNatPool/frontendIPConfigurations/xplattestFrontendIpNatPool\",\r\n        \"etag\": \"W/\\\"ee6795f0-c01d-4f79-b606-2f87a5f98a57\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbNatPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbNatPool\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1402',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a639b7b8-86ec-4d0c-a9aa-8ea72fe0d5b5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/a639b7b8-86ec-4d0c-a9aa-8ea72fe0d5b5?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '6f75042d-5f73-4830-8f80-7894eca80dfd',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150928T071142Z:6f75042d-5f73-4830-8f80-7894eca80dfd',
  date: 'Mon, 28 Sep 2015 07:11:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/a639b7b8-86ec-4d0c-a9aa-8ea72fe0d5b5?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4b2d9d56-3e36-473a-b810-56f21591251c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0e936fb0-5fd3-4cec-85a5-cc9b0cecbf08',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150928T071143Z:0e936fb0-5fd3-4cec-85a5-cc9b0cecbf08',
  date: 'Mon, 28 Sep 2015 07:11:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/southeastasia/operations/a639b7b8-86ec-4d0c-a9aa-8ea72fe0d5b5?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4b2d9d56-3e36-473a-b810-56f21591251c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '0e936fb0-5fd3-4cec-85a5-cc9b0cecbf08',
  'x-ms-routing-request-id': 'SOUTHEASTASIA:20150928T071143Z:0e936fb0-5fd3-4cec-85a5-cc9b0cecbf08',
  date: 'Mon, 28 Sep 2015 07:11:43 GMT',
  connection: 'close' });
 return result; }]];