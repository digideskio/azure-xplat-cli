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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"2a5aecaf-fc38-44cd-9967-374d30dc0c30\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"a20594d8-ad55-4346-becb-d979d38b5786\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02106ADF7025F47F9CBC4729475EED800BDF300D06092A864886F70D0101010500048201002C47348E22D34E234BA5C922EE6A0BA77E39F675A52FE10DCF88BE52CAD2F669962ABDD623C444A4D2C25495E00B8D295D27FE1E47DE9351F95AF7173B9B46FEDE5BC3682ABBDB8613DD0FDE2EDDFC049571B8EE500422E4EE8943FC5263B455C970CEA7E3F8AC2187B98CE458C2DAE62A15B2BBB7520D204113E85ACD3F8C85A1C9795708F3914407B1C00C557DF6735D138B019E89B1CEAFBB572377AED44AAA949FC68F8CA3D0BA68C30FEFAD53D21F239A32BAD861AE3B9C0C7817002C9413FDB37220B5A7636CEC84F5A29AAA6611F1F83A265BD7FF4E435916A343BDA399378D84FF13D2F63A71DECE2576E9A0434F3E8590BCDD69216AE61CC252A945302B06092A864886F70D010701301406082A864886F70D030704084BCF8CBE21DD7A528008E2B6EAF569008ACE\",\r\n    \"enableBgp\": false,\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1997',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd2058e69-036e-47e6-bd4e-aaeecf8a500d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'bca336b0-16f2-4caa-acc0-ff0e5e85608b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T142116Z:bca336b0-16f2-4caa-acc0-ff0e5e85608b',
  date: 'Fri, 25 Mar 2016 14:21:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2016-03-30')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"2a5aecaf-fc38-44cd-9967-374d30dc0c30\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"westus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"a20594d8-ad55-4346-becb-d979d38b5786\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02106ADF7025F47F9CBC4729475EED800BDF300D06092A864886F70D0101010500048201002C47348E22D34E234BA5C922EE6A0BA77E39F675A52FE10DCF88BE52CAD2F669962ABDD623C444A4D2C25495E00B8D295D27FE1E47DE9351F95AF7173B9B46FEDE5BC3682ABBDB8613DD0FDE2EDDFC049571B8EE500422E4EE8943FC5263B455C970CEA7E3F8AC2187B98CE458C2DAE62A15B2BBB7520D204113E85ACD3F8C85A1C9795708F3914407B1C00C557DF6735D138B019E89B1CEAFBB572377AED44AAA949FC68F8CA3D0BA68C30FEFAD53D21F239A32BAD861AE3B9C0C7817002C9413FDB37220B5A7636CEC84F5A29AAA6611F1F83A265BD7FF4E435916A343BDA399378D84FF13D2F63A71DECE2576E9A0434F3E8590BCDD69216AE61CC252A945302B06092A864886F70D010701301406082A864886F70D030704084BCF8CBE21DD7A528008E2B6EAF569008ACE\",\r\n    \"enableBgp\": false,\r\n    \"connectionStatus\": \"NotConnected\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1997',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd2058e69-036e-47e6-bd4e-aaeecf8a500d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'bca336b0-16f2-4caa-acc0-ff0e5e85608b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T142116Z:bca336b0-16f2-4caa-acc0-ff0e5e85608b',
  date: 'Fri, 25 Mar 2016 14:21:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection/sharedkey?api-version=2016-03-30')
  .reply(200, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '99abb16b-6bee-48b2-bfc6-41da2681035a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '1ab6dfe1-2779-46c0-a8eb-e3825b2052db',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T142117Z:1ab6dfe1-2779-46c0-a8eb-e3825b2052db',
  date: 'Fri, 25 Mar 2016 14:21:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection/sharedkey?api-version=2016-03-30')
  .reply(200, "null", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '99abb16b-6bee-48b2-bfc6-41da2681035a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '1ab6dfe1-2779-46c0-a8eb-e3825b2052db',
  'x-ms-routing-request-id': 'WESTEUROPE:20160325T142117Z:1ab6dfe1-2779-46c0-a8eb-e3825b2052db',
  date: 'Fri, 25 Mar 2016 14:21:17 GMT',
  connection: 'close' });
 return result; }]];