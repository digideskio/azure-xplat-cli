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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/MX/set-mx?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"13602832-5951-4918-a981-64580e332cdb\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  etag: '13602832-5951-4918-a981-64580e332cdb',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f5621244-a005-4fe9-a3c8-cfffff954ff6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'dd42ab83-eb88-446a-9432-22b5e030ec18',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124344Z:dd42ab83-eb88-446a-9432-22b5e030ec18',
  date: 'Mon, 29 Aug 2016 12:43:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9316/providers/Microsoft.Network/dnszones/example1.com/MX/set-mx?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9316\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/set-mx\",\"name\":\"set-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"13602832-5951-4918-a981-64580e332cdb\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-mx.example1.com.\",\"TTL\":3600,\"MXRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '393',
  'content-type': 'application/json; charset=utf-8',
  etag: '13602832-5951-4918-a981-64580e332cdb',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f5621244-a005-4fe9-a3c8-cfffff954ff6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'dd42ab83-eb88-446a-9432-22b5e030ec18',
  'x-ms-routing-request-id': 'WESTEUROPE:20160829T124344Z:dd42ab83-eb88-446a-9432-22b5e030ec18',
  date: 'Mon, 29 Aug 2016 12:43:43 GMT',
  connection: 'close' });
 return result; }]];