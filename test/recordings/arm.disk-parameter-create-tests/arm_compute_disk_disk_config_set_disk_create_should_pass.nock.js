// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate6272?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestDiskCreate6272' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': 'e2263f25-7255-48d6-9fe3-73d545c600d0',
  'x-ms-correlation-request-id': 'e2263f25-7255-48d6-9fe3-73d545c600d0',
  'x-ms-routing-request-id': 'WESTUS:20170602T171031Z:e2263f25-7255-48d6-9fe3-73d545c600d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:10:31 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate6272?api-version=2016-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xTestDiskCreate6272' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-request-id': 'e2263f25-7255-48d6-9fe3-73d545c600d0',
  'x-ms-correlation-request-id': 'e2263f25-7255-48d6-9fe3-73d545c600d0',
  'x-ms-routing-request-id': 'WESTUS:20170602T171031Z:e2263f25-7255-48d6-9fe3-73d545c600d0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:10:31 GMT',
  connection: 'close',
  'content-length': '111' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate6272?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272\",\"name\":\"xTestDiskCreate6272\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-06-02T17:10:30.862Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '10748237-364c-47d1-9226-d6c4fb11c509',
  'x-ms-correlation-request-id': '10748237-364c-47d1-9226-d6c4fb11c509',
  'x-ms-routing-request-id': 'WESTUS:20170602T171034Z:10748237-364c-47d1-9226-d6c4fb11c509',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:10:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourcegroups/xTestDiskCreate6272?api-version=2016-09-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272\",\"name\":\"xTestDiskCreate6272\",\"location\":\"southeastasia\",\"tags\":{\"arm.disk-parameter-create-tests\":\"2017-06-02T17:10:30.862Z\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '268',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-request-id': '10748237-364c-47d1-9226-d6c4fb11c509',
  'x-ms-correlation-request-id': '10748237-364c-47d1-9226-d6c4fb11c509',
  'x-ms-routing-request-id': 'WESTUS:20170602T171034Z:10748237-364c-47d1-9226-d6c4fb11c509',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Jun 2017 17:10:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30', '*')
  .reply(202, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '357',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/df833af1-d7c4-49d8-af24-d93baa68c95d?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/df833af1-d7c4-49d8-af24-d93baa68c95d?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'df833af1-d7c4-49d8-af24-d93baa68c95d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'e4023699-eb47-42fb-878d-34a1365b3810',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171044Z:e4023699-eb47-42fb-878d-34a1365b3810',
  date: 'Fri, 02 Jun 2017 17:10:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30', '*')
  .reply(202, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"provisioningState\": \"Updating\",\r\n    \"isArmResource\": true\r\n  },\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '357',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/df833af1-d7c4-49d8-af24-d93baa68c95d?monitor=true&api-version=2017-03-30',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/df833af1-d7c4-49d8-af24-d93baa68c95d?api-version=2017-03-30',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'df833af1-d7c4-49d8-af24-d93baa68c95d',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'e4023699-eb47-42fb-878d-34a1365b3810',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171044Z:e4023699-eb47-42fb-878d-34a1365b3810',
  date: 'Fri, 02 Jun 2017 17:10:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/df833af1-d7c4-49d8-af24-d93baa68c95d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:10:43.6014464+00:00\",\r\n  \"endTime\": \"2017-06-02T17:10:43.7263874+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"properties\":{\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-06-02T17:10:43.6170496+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\"name\":\"xplatDisk2585\"}\r\n  },\r\n  \"name\": \"df833af1-d7c4-49d8-af24-d93baa68c95d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'b4188ad0-54a8-479e-9211-2f82bb1f0837',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0a12a464-10ba-4c6f-925b-7e37b584ff4d',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171115Z:0a12a464-10ba-4c6f-925b-7e37b584ff4d',
  date: 'Fri, 02 Jun 2017 17:11:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/DiskOperations/df833af1-d7c4-49d8-af24-d93baa68c95d?api-version=2017-03-30')
  .reply(200, "{\r\n  \"startTime\": \"2017-06-02T17:10:43.6014464+00:00\",\r\n  \"endTime\": \"2017-06-02T17:10:43.7263874+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"properties\": {\r\n    \"output\": {\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"properties\":{\"osType\":\"Windows\",\"creationData\":{\"createOption\":\"Empty\"},\"diskSizeGB\":5,\"encryptionSettings\":{\"enabled\":false},\"timeCreated\":\"2017-06-02T17:10:43.6170496+00:00\",\"provisioningState\":\"Succeeded\",\"diskState\":\"Unattached\"},\"type\":\"Microsoft.Compute/disks\",\"location\":\"southeastasia\",\"tags\":{},\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\"name\":\"xplatDisk2585\"}\r\n  },\r\n  \"name\": \"df833af1-d7c4-49d8-af24-d93baa68c95d\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '744',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': 'b4188ad0-54a8-479e-9211-2f82bb1f0837',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '0a12a464-10ba-4c6f-925b-7e37b584ff4d',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171115Z:0a12a464-10ba-4c6f-925b-7e37b584ff4d',
  date: 'Fri, 02 Jun 2017 17:11:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-06-02T17:10:43.6170496+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\r\n  \"name\": \"xplatDisk2585\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '657',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '9bf07109-20b4-4d97-953b-f501ef373cb9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '8e837e1d-7b8b-4f98-9697-659e5c4a7c3f',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171116Z:8e837e1d-7b8b-4f98-9697-659e5c4a7c3f',
  date: 'Fri, 02 Jun 2017 17:11:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585?api-version=2017-03-30')
  .reply(200, "{\r\n  \"sku\": {\r\n    \"name\": \"Standard_LRS\",\r\n    \"tier\": \"Standard\"\r\n  },\r\n  \"properties\": {\r\n    \"osType\": \"Windows\",\r\n    \"creationData\": {\r\n      \"createOption\": \"Empty\"\r\n    },\r\n    \"diskSizeGB\": 5,\r\n    \"encryptionSettings\": {\r\n      \"enabled\": false\r\n    },\r\n    \"timeCreated\": \"2017-06-02T17:10:43.6170496+00:00\",\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"diskState\": \"Unattached\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/disks\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xTestDiskCreate6272/providers/Microsoft.Compute/disks/xplatDisk2585\",\r\n  \"name\": \"xplatDisk2585\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '657',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '168ab153-5556-4254-a622-b88667a8f6d7_131298516114175576',
  'x-ms-request-id': '9bf07109-20b4-4d97-953b-f501ef373cb9',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '8e837e1d-7b8b-4f98-9697-659e5c4a7c3f',
  'x-ms-routing-request-id': 'WESTUS2:20170602T171116Z:8e837e1d-7b8b-4f98-9697-659e5c4a7c3f',
  date: 'Fri, 02 Jun 2017 17:11:16 GMT',
  connection: 'close' });
 return result; }]];