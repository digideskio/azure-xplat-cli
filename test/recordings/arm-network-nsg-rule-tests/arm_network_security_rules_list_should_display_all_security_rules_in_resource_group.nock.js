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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"securityRuleName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n      \"etag\": \"W/\\\"85a20f33-eb0a-4661-8087-8b86ed014d4d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"description\": \"setdesc\",\r\n        \"protocol\": \"Udp\",\r\n        \"sourcePortRange\": \"65535\",\r\n        \"destinationPortRange\": \"65042\",\r\n        \"sourceAddressPrefix\": \"10.0.0.0/8\",\r\n        \"destinationAddressPrefix\": \"11.0.0.0/8\",\r\n        \"access\": \"Deny\",\r\n        \"priority\": 1542,\r\n        \"direction\": \"Outbound\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '739',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8b46bc6d-6c8d-4020-a228-3923c1b5a2e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5da439a3-9ae3-4695-9486-e7a5c9b852d7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083829Z:5da439a3-9ae3-4695-9486-e7a5c9b852d7',
  date: 'Mon, 13 Mar 2017 08:38:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"securityRuleName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-rule/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName/securityRules/securityRuleName\",\r\n      \"etag\": \"W/\\\"85a20f33-eb0a-4661-8087-8b86ed014d4d\\\"\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"description\": \"setdesc\",\r\n        \"protocol\": \"Udp\",\r\n        \"sourcePortRange\": \"65535\",\r\n        \"destinationPortRange\": \"65042\",\r\n        \"sourceAddressPrefix\": \"10.0.0.0/8\",\r\n        \"destinationAddressPrefix\": \"11.0.0.0/8\",\r\n        \"access\": \"Deny\",\r\n        \"priority\": 1542,\r\n        \"direction\": \"Outbound\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '739',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8b46bc6d-6c8d-4020-a228-3923c1b5a2e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '5da439a3-9ae3-4695-9486-e7a5c9b852d7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170313T083829Z:5da439a3-9ae3-4695-9486-e7a5c9b852d7',
  date: 'Mon, 13 Mar 2017 08:38:28 GMT',
  connection: 'close' });
 return result; }]];
