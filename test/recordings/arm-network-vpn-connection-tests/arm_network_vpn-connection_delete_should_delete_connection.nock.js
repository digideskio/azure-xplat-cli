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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"eb3b8420-7179-45b6-9dc5-b7cce4ed8484\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201008CD4DBAF25E232B7FE2C8D34BD84692630D5A809A4F785C047BB13EC14959223F5E9E633234BBEE1FF22B4ED9F1A04C905731DE599DB25DC2EB42234A692E1656D3B03CFB827C093BA73CFF444C2AC3648E5D74393871E1C8CA173480582367852811D513257F94983909929BFE8BC97F1879A65EB9B361A6DE6BEB942F6BB7B23DF9E3F9D27F2CB091FBE72A99C4BE29B1DAE8B4428AD4AE241B864227D0927FE6276E0F87EE3A7D52414430954F832AB6A20A826E66F03003D6A6383DDB6A37AE527D8304A40EAA155C5EE511BAAC91704D48D64EAF6446E53A3ED9AA35C51732D8598EBA5B5D1065B3C611046AE78C573E5ACCD7E24980594436401158183302B06092A864886F70D010701301406082A864886F70D03070408D8B312F3FB82C8518008378FDD66F5F88CEC\",\r\n    \"enableBgp\": true,\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1955',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'de7823f3-18cd-4c72-81ea-9064e7fc0418',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14821',
  'x-ms-correlation-request-id': 'ae165695-8262-4c74-bbac-2166c1b4caf7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101834Z:ae165695-8262-4c74-bbac-2166c1b4caf7',
  date: 'Thu, 19 Jan 2017 10:18:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"eb3b8420-7179-45b6-9dc5-b7cce4ed8484\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201008CD4DBAF25E232B7FE2C8D34BD84692630D5A809A4F785C047BB13EC14959223F5E9E633234BBEE1FF22B4ED9F1A04C905731DE599DB25DC2EB42234A692E1656D3B03CFB827C093BA73CFF444C2AC3648E5D74393871E1C8CA173480582367852811D513257F94983909929BFE8BC97F1879A65EB9B361A6DE6BEB942F6BB7B23DF9E3F9D27F2CB091FBE72A99C4BE29B1DAE8B4428AD4AE241B864227D0927FE6276E0F87EE3A7D52414430954F832AB6A20A826E66F03003D6A6383DDB6A37AE527D8304A40EAA155C5EE511BAAC91704D48D64EAF6446E53A3ED9AA35C51732D8598EBA5B5D1065B3C611046AE78C573E5ACCD7E24980594436401158183302B06092A864886F70D010701301406082A864886F70D03070408D8B312F3FB82C8518008378FDD66F5F88CEC\",\r\n    \"enableBgp\": true,\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1955',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'de7823f3-18cd-4c72-81ea-9064e7fc0418',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14821',
  'x-ms-correlation-request-id': 'ae165695-8262-4c74-bbac-2166c1b4caf7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101834Z:ae165695-8262-4c74-bbac-2166c1b4caf7',
  date: 'Thu, 19 Jan 2017 10:18:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(409, "{\r\n  \"error\": {\r\n    \"code\": \"AnotherOperationInProgress\",\r\n    \"message\": \"Another operation on this or dependent resource is in progress. To retrieve status of the operation use uri: f597a8cf-fea3-49e1-9a66-5b86ba9c35fc.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '794f5622-5ebb-4a1f-a668-110984d84a71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e019489d-389d-4298-b7ab-46c3a0c256bf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101835Z:e019489d-389d-4298-b7ab-46c3a0c256bf',
  date: 'Thu, 19 Jan 2017 10:18:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(409, "{\r\n  \"error\": {\r\n    \"code\": \"AnotherOperationInProgress\",\r\n    \"message\": \"Another operation on this or dependent resource is in progress. To retrieve status of the operation use uri: f597a8cf-fea3-49e1-9a66-5b86ba9c35fc.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '794f5622-5ebb-4a1f-a668-110984d84a71',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e019489d-389d-4298-b7ab-46c3a0c256bf',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101835Z:e019489d-389d-4298-b7ab-46c3a0c256bf',
  date: 'Thu, 19 Jan 2017 10:18:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"eb3b8420-7179-45b6-9dc5-b7cce4ed8484\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201008CD4DBAF25E232B7FE2C8D34BD84692630D5A809A4F785C047BB13EC14959223F5E9E633234BBEE1FF22B4ED9F1A04C905731DE599DB25DC2EB42234A692E1656D3B03CFB827C093BA73CFF444C2AC3648E5D74393871E1C8CA173480582367852811D513257F94983909929BFE8BC97F1879A65EB9B361A6DE6BEB942F6BB7B23DF9E3F9D27F2CB091FBE72A99C4BE29B1DAE8B4428AD4AE241B864227D0927FE6276E0F87EE3A7D52414430954F832AB6A20A826E66F03003D6A6383DDB6A37AE527D8304A40EAA155C5EE511BAAC91704D48D64EAF6446E53A3ED9AA35C51732D8598EBA5B5D1065B3C611046AE78C573E5ACCD7E24980594436401158183302B06092A864886F70D010701301406082A864886F70D03070408D8B312F3FB82C8518008378FDD66F5F88CEC\",\r\n    \"enableBgp\": true,\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1955',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66bb3b6c-9f6e-46ff-a27e-3c9036c0ed22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '27fd14ba-7209-4a27-89a3-ea4e1ddb5c85',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101856Z:27fd14ba-7209-4a27-89a3-ea4e1ddb5c85',
  date: 'Thu, 19 Jan 2017 10:18:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"eb3b8420-7179-45b6-9dc5-b7cce4ed8484\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201008CD4DBAF25E232B7FE2C8D34BD84692630D5A809A4F785C047BB13EC14959223F5E9E633234BBEE1FF22B4ED9F1A04C905731DE599DB25DC2EB42234A692E1656D3B03CFB827C093BA73CFF444C2AC3648E5D74393871E1C8CA173480582367852811D513257F94983909929BFE8BC97F1879A65EB9B361A6DE6BEB942F6BB7B23DF9E3F9D27F2CB091FBE72A99C4BE29B1DAE8B4428AD4AE241B864227D0927FE6276E0F87EE3A7D52414430954F832AB6A20A826E66F03003D6A6383DDB6A37AE527D8304A40EAA155C5EE511BAAC91704D48D64EAF6446E53A3ED9AA35C51732D8598EBA5B5D1065B3C611046AE78C573E5ACCD7E24980594436401158183302B06092A864886F70D010701301406082A864886F70D03070408D8B312F3FB82C8518008378FDD66F5F88CEC\",\r\n    \"enableBgp\": true,\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1955',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '66bb3b6c-9f6e-46ff-a27e-3c9036c0ed22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '27fd14ba-7209-4a27-89a3-ea4e1ddb5c85',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101856Z:27fd14ba-7209-4a27-89a3-ea4e1ddb5c85',
  date: 'Thu, 19 Jan 2017 10:18:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(409, "{\r\n  \"error\": {\r\n    \"code\": \"AnotherOperationInProgress\",\r\n    \"message\": \"Another operation on this or dependent resource is in progress. To retrieve status of the operation use uri: f597a8cf-fea3-49e1-9a66-5b86ba9c35fc.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c23a4d97-0528-4d83-9933-0d877a6b78b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8cf85065-c6d0-4652-9870-da32e5109767',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101857Z:8cf85065-c6d0-4652-9870-da32e5109767',
  date: 'Thu, 19 Jan 2017 10:18:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(409, "{\r\n  \"error\": {\r\n    \"code\": \"AnotherOperationInProgress\",\r\n    \"message\": \"Another operation on this or dependent resource is in progress. To retrieve status of the operation use uri: f597a8cf-fea3-49e1-9a66-5b86ba9c35fc.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '251',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c23a4d97-0528-4d83-9933-0d877a6b78b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8cf85065-c6d0-4652-9870-da32e5109767',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101857Z:8cf85065-c6d0-4652-9870-da32e5109767',
  date: 'Thu, 19 Jan 2017 10:18:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"728def70-348f-433d-befe-b60e604ae3c9\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"xyz987\",\r\n    \"enableBgp\": true,\r\n    \"connectionStatus\": \"Connecting\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1193',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3a752279-f5d6-476f-92a3-46b0462a90af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14892',
  'x-ms-correlation-request-id': '4993f578-1c4b-4589-8426-413ba4acb728',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101918Z:4993f578-1c4b-4589-8426-413ba4acb728',
  date: 'Thu, 19 Jan 2017 10:19:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"728def70-348f-433d-befe-b60e604ae3c9\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"455cd08f-bbf4-4e37-b524-79ef0e66273a\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"xyz987\",\r\n    \"enableBgp\": true,\r\n    \"connectionStatus\": \"Connecting\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1193',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3a752279-f5d6-476f-92a3-46b0462a90af',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14892',
  'x-ms-correlation-request-id': '4993f578-1c4b-4589-8426-413ba4acb728',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101918Z:4993f578-1c4b-4589-8426-413ba4acb728',
  date: 'Thu, 19 Jan 2017 10:19:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/a98d3052-7a84-47e8-905a-74aaf3ee2ff7?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': 'a98d3052-7a84-47e8-905a-74aaf3ee2ff7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a98d3052-7a84-47e8-905a-74aaf3ee2ff7?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '75863909-c526-4cb6-87fe-0d3c761206f1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101919Z:75863909-c526-4cb6-87fe-0d3c761206f1',
  date: 'Thu, 19 Jan 2017 10:19:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operationResults/a98d3052-7a84-47e8-905a-74aaf3ee2ff7?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': 'a98d3052-7a84-47e8-905a-74aaf3ee2ff7',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a98d3052-7a84-47e8-905a-74aaf3ee2ff7?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '75863909-c526-4cb6-87fe-0d3c761206f1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101919Z:75863909-c526-4cb6-87fe-0d3c761206f1',
  date: 'Thu, 19 Jan 2017 10:19:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a98d3052-7a84-47e8-905a-74aaf3ee2ff7?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f0e647c5-64fb-4e1f-8aae-85468355d52d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14328',
  'x-ms-correlation-request-id': 'afc6e397-03fa-4597-99d9-233452be41a6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101950Z:afc6e397-03fa-4597-99d9-233452be41a6',
  date: 'Thu, 19 Jan 2017 10:19:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/a98d3052-7a84-47e8-905a-74aaf3ee2ff7?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f0e647c5-64fb-4e1f-8aae-85468355d52d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14328',
  'x-ms-correlation-request-id': 'afc6e397-03fa-4597-99d9-233452be41a6',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101950Z:afc6e397-03fa-4597-99d9-233452be41a6',
  date: 'Thu, 19 Jan 2017 10:19:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/connections/test-vpn-connection' under resource group 'xplat-test-gateway-group-1' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9c6f932c-d792-439a-8643-66fb2b6c7fe1',
  'x-ms-correlation-request-id': '9c6f932c-d792-439a-8643-66fb2b6c7fe1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101951Z:9c6f932c-d792-439a-8643-66fb2b6c7fe1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 19 Jan 2017 10:19:51 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/connections/test-vpn-connection' under resource group 'xplat-test-gateway-group-1' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '9c6f932c-d792-439a-8643-66fb2b6c7fe1',
  'x-ms-correlation-request-id': '9c6f932c-d792-439a-8643-66fb2b6c7fe1',
  'x-ms-routing-request-id': 'WESTEUROPE:20170119T101951Z:9c6f932c-d792-439a-8643-66fb2b6c7fe1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 19 Jan 2017 10:19:51 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; }]];
