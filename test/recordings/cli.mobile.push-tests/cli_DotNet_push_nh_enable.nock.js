// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet119/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'be57d24ae51488488cdf50a6e1029fc1',
  date: 'Wed, 08 Apr 2015 01:24:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet119/pushentity', '*')
  .reply(202, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '941bb731b2378822a3ce1b92e57535cc',
  date: 'Wed, 08 Apr 2015 01:24:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet119/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5240a79085a38500b070b6edd27f5a2d',
  date: 'Wed, 08 Apr 2015 01:24:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet119/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '5e9349386f3c85ac9ffc718c3dc41d0b',
  date: 'Wed, 08 Apr 2015 01:24:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet119/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'bf8b37daaceb8db99c4eec0c2db4ad76',
  date: 'Wed, 08 Apr 2015 01:25:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet119/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"activating\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '114',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': 'bdfc48dd590a868694e9bc0588359f01',
  date: 'Wed, 08 Apr 2015 01:25:09 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestDotNet119/pushentity')
  .reply(200, "{\"enableExternalPushEntity\":true,\"externalPushEntitySettingsPropertyBag\":{\"externalPushEntityState\":\"healthy\",\"pushEntityNamespace\":\"clitestDotNet119Hub-ns\",\"pushEntityPath\":\"clitestDotNet119Hub\",\"pushEntityConnectionString\":\"Endpoint=sb:\\/\\/clitestdotnet119hub-ns.servicebus.windows.net\\/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=VH\\/WgpFzjl9YpzpMoJFwJG8lp9ed2iNtq1a4b0hvTiY=\",\"namespaceCreated\":true,\"pushEntityCreated\":true}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '456',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '023311933f258c0ab0981e0539c6d102',
  date: 'Wed, 08 Apr 2015 01:25:15 GMT' });
 return result; }]];