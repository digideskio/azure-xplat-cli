// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitAuthorizationName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName\",\r\n  \"etag\": \"W/\\\"bd6d79b9-499e-4f16-99a8-9bb4816e5b3e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"91c636a4-13cc-4db3-b362-6441f82b76d9\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '704689bf-10ac-427e-994f-b768d84d4401',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '51d01cfd-ec6b-4937-a1b6-980b77496bce',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112521Z:51d01cfd-ec6b-4937-a1b6-980b77496bce',
  date: 'Wed, 27 Sep 2017 11:25:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitAuthorizationName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName\",\r\n  \"etag\": \"W/\\\"bd6d79b9-499e-4f16-99a8-9bb4816e5b3e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"91c636a4-13cc-4db3-b362-6441f82b76d9\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '704689bf-10ac-427e-994f-b768d84d4401',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '51d01cfd-ec6b-4937-a1b6-980b77496bce',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112521Z:51d01cfd-ec6b-4937-a1b6-980b77496bce',
  date: 'Wed, 27 Sep 2017 11:25:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operationResults/01b4cd7f-788b-42b1-8d25-307bbd717402?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '01b4cd7f-788b-42b1-8d25-307bbd717402',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/01b4cd7f-788b-42b1-8d25-307bbd717402?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a6a6e6a9-820e-413b-8d4f-42163eada4ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112522Z:a6a6e6a9-820e-413b-8d4f-42163eada4ba',
  date: 'Wed, 27 Sep 2017 11:25:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operationResults/01b4cd7f-788b-42b1-8d25-307bbd717402?api-version=2017-09-01',
  'retry-after': '10',
  'x-ms-request-id': '01b4cd7f-788b-42b1-8d25-307bbd717402',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/01b4cd7f-788b-42b1-8d25-307bbd717402?api-version=2017-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a6a6e6a9-820e-413b-8d4f-42163eada4ba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112522Z:a6a6e6a9-820e-413b-8d4f-42163eada4ba',
  date: 'Wed, 27 Sep 2017 11:25:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/01b4cd7f-788b-42b1-8d25-307bbd717402?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f511f0be-df7d-41a5-986b-e6b3d26b9efc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '466704f3-299f-40ee-abc5-a58d3998a5dc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112553Z:466704f3-299f-40ee-abc5-a58d3998a5dc',
  date: 'Wed, 27 Sep 2017 11:25:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/brazilsouth/operations/01b4cd7f-788b-42b1-8d25-307bbd717402?api-version=2017-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f511f0be-df7d-41a5-986b-e6b3d26b9efc',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '466704f3-299f-40ee-abc5-a58d3998a5dc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112553Z:466704f3-299f-40ee-abc5-a58d3998a5dc',
  date: 'Wed, 27 Sep 2017 11:25:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '323',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e13e1c49-bd94-4cbf-9c7f-351d4572467d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'aa97a379-997b-44c7-8952-26ed4e7019d6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112555Z:aa97a379-997b-44c7-8952-26ed4e7019d6',
  date: 'Wed, 27 Sep 2017 11:25:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '323',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e13e1c49-bd94-4cbf-9c7f-351d4572467d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'aa97a379-997b-44c7-8952-26ed4e7019d6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112555Z:aa97a379-997b-44c7-8952-26ed4e7019d6',
  date: 'Wed, 27 Sep 2017 11:25:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb3b9c5a-1c2e-45d6-8960-d549b4238cab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '8da79da1-85dc-4965-9e38-99fd1200447c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112559Z:8da79da1-85dc-4965-9e38-99fd1200447c',
  date: 'Wed, 27 Sep 2017 11:25:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations?api-version=2017-09-01')
  .reply(200, "{\r\n  \"value\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '19',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eb3b9c5a-1c2e-45d6-8960-d549b4238cab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '8da79da1-85dc-4965-9e38-99fd1200447c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112559Z:8da79da1-85dc-4965-9e38-99fd1200447c',
  date: 'Wed, 27 Sep 2017 11:25:59 GMT',
  connection: 'close' });
 return result; }]];