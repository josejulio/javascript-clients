[@redhat-cloud-services/host-inventory-client](../README.md) / [Exports](../modules.md) / HostsApi

# Class: HostsApi

HostsApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`HostsApi`**

## Table of contents

### Constructors

- [constructor](HostsApi.md#constructor)

### Properties

- [axios](HostsApi.md#axios)
- [basePath](HostsApi.md#basepath)
- [configuration](HostsApi.md#configuration)

### Methods

- [apiHostDeleteAllHosts](HostsApi.md#apihostdeleteallhosts)
- [apiHostDeleteById](HostsApi.md#apihostdeletebyid)
- [apiHostDeleteHostsByFilter](HostsApi.md#apihostdeletehostsbyfilter)
- [apiHostGetHostById](HostsApi.md#apihostgethostbyid)
- [apiHostGetHostList](HostsApi.md#apihostgethostlist)
- [apiHostGetHostSystemProfileById](HostsApi.md#apihostgethostsystemprofilebyid)
- [apiHostGetHostTagCount](HostsApi.md#apihostgethosttagcount)
- [apiHostGetHostTags](HostsApi.md#apihostgethosttags)
- [apiHostHostCheckin](HostsApi.md#apihosthostcheckin)
- [apiHostMergeFacts](HostsApi.md#apihostmergefacts)
- [apiHostPatchById](HostsApi.md#apihostpatchbyid)
- [apiHostReplaceFacts](HostsApi.md#apihostreplacefacts)

## Constructors

### constructor

• **new HostsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/base.ts#L49)

## Methods

### apiHostDeleteAllHosts

▸ **apiHostDeleteAllHosts**(`confirmDeleteAll?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Delete all hosts on the account.  The request must include \"confirm_delete_all=true\". <br /><br /> Required permissions: inventory:hosts:write

**`Summary`**

Delete all hosts on the account

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmDeleteAll?` | `boolean` | Confirmation to delete all hosts on the account |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3423](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3423)

___

### apiHostDeleteById

▸ **apiHostDeleteById**(`hostIdList`, `branchId?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Delete hosts by IDs <br /><br /> Required permissions: inventory:hosts:write

**`Summary`**

Delete hosts by IDs

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma separated list of host IDs. |
| `branchId?` | `string` | Filter by branch_id |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3436](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3436)

___

### apiHostDeleteHostsByFilter

▸ **apiHostDeleteHostsByFilter**(`displayName?`, `fqdn?`, `hostnameOrId?`, `insightsId?`, `providerId?`, `providerType?`, `registeredWith?`, `staleness?`, `tags?`, `filter?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Delete the entire list of hosts filtered by the given parameters. <br /><br /> Required permissions: inventory:hosts:write

**`Summary`**

Delete the entire list of hosts filtered by the given parameters

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName?` | `string` | Filter by display_name (case-insensitive) |
| `fqdn?` | `string` | Filter by FQDN (case-insensitive) |
| `hostnameOrId?` | `string` | Filter by display_name, fqdn, id (case-insensitive) |
| `insightsId?` | `string` | Filter by insights_id |
| `providerId?` | `string` | Filter by provider_id |
| `providerType?` | ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"`` | Filter by provider_type |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `staleness?` | (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[] | Culling states of the hosts. |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `filter?` | `Object` | Filters hosts based on system_profile fields |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3457](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3457)

___

### apiHostGetHostById

▸ **apiHostGetHostById**(`hostIdList`, `branchId?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `fields?`, `options?`): `Promise`<`AxiosResponse`<[`HostQueryOutput`](../interfaces/HostQueryOutput.md)\>\>

Find one or more hosts by their ID. <br /><br /> Required permissions: inventory:hosts:read

**`Summary`**

Find hosts by their IDs

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma separated list of host IDs. |
| `branchId?` | `string` | Filter by branch_id |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"display_name"`` \| ``"updated"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `fields?` | `Object` | Fetches only mentioned system_profile fields |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HostQueryOutput`](../interfaces/HostQueryOutput.md)\>\>

#### Defined in

[api.ts:3475](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3475)

___

### apiHostGetHostList

▸ **apiHostGetHostList**(`displayName?`, `fqdn?`, `hostnameOrId?`, `insightsId?`, `providerId?`, `providerType?`, `branchId?`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `staleness?`, `tags?`, `registeredWith?`, `filter?`, `fields?`, `options?`): `Promise`<`AxiosResponse`<[`HostQueryOutput`](../interfaces/HostQueryOutput.md)\>\>

Read the entire list of all hosts available to the account. <br /><br /> Required permissions: inventory:hosts:read

**`Summary`**

Read the entire list of hosts

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `displayName?` | `string` | Filter by display_name (case-insensitive) |
| `fqdn?` | `string` | Filter by FQDN (case-insensitive) |
| `hostnameOrId?` | `string` | Filter by display_name, fqdn, id (case-insensitive) |
| `insightsId?` | `string` | Filter by insights_id |
| `providerId?` | `string` | Filter by provider_id |
| `providerType?` | ``"alibaba"`` \| ``"aws"`` \| ``"azure"`` \| ``"gcp"`` \| ``"ibm"`` | Filter by provider_type |
| `branchId?` | `string` | Filter by branch_id |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"display_name"`` \| ``"updated"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `staleness?` | (``"unknown"`` \| ``"fresh"`` \| ``"stale"`` \| ``"stale_warning"``)[] | Culling states of the hosts. Default: fresh,stale,unknown |
| `tags?` | `string`[] | filters out hosts not tagged by the given tags |
| `registeredWith?` | (``"insights"`` \| ``"yupana"`` \| ``"puptoo"`` \| ``"rhsm-conduit"`` \| ``"cloud-connector"`` \| ``"!yupana"`` \| ``"!puptoo"`` \| ``"!rhsm-conduit"`` \| ``"!cloud-connector"``)[] | Filters out any host not registered by the specified reporters |
| `filter?` | `Object` | Filters hosts based on system_profile fields |
| `fields?` | `Object` | Fetches only mentioned system_profile fields |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`HostQueryOutput`](../interfaces/HostQueryOutput.md)\>\>

#### Defined in

[api.ts:3502](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3502)

___

### apiHostGetHostSystemProfileById

▸ **apiHostGetHostSystemProfileById**(`hostIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `branchId?`, `fields?`, `options?`): `Promise`<`AxiosResponse`<[`SystemProfileByHostOut`](../interfaces/SystemProfileByHostOut.md)\>\>

Find one or more hosts by their ID and return the id and system profile <br /><br /> Required permissions: inventory:hosts:read

**`Summary`**

Return one or more hosts system profile

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma separated list of host IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"display_name"`` \| ``"updated"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `branchId?` | `string` | Filter by branch_id |
| `fields?` | `Object` | Fetches only mentioned system_profile fields |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SystemProfileByHostOut`](../interfaces/SystemProfileByHostOut.md)\>\>

#### Defined in

[api.ts:3520](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3520)

___

### apiHostGetHostTagCount

▸ **apiHostGetHostTagCount**(`hostIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `options?`): `Promise`<`AxiosResponse`<[`TagCountOut`](../interfaces/TagCountOut.md)\>\>

Get the number of tags on a host <br /><br /> Required permissions: inventory:hosts:read

**`Summary`**

Get the number of tags on a host

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma separated list of host IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"display_name"`` \| ``"updated"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagCountOut`](../interfaces/TagCountOut.md)\>\>

#### Defined in

[api.ts:3536](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3536)

___

### apiHostGetHostTags

▸ **apiHostGetHostTags**(`hostIdList`, `perPage?`, `page?`, `orderBy?`, `orderHow?`, `search?`, `options?`): `Promise`<`AxiosResponse`<[`TagsOut`](../interfaces/TagsOut.md)\>\>

Get the tags on a host <br /><br /> Required permissions: inventory:hosts:read

**`Summary`**

Get the tags on a host

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma separated list of host IDs. |
| `perPage?` | `number` | A number of items to return per page. |
| `page?` | `number` | A page number of the items to return. |
| `orderBy?` | ``"display_name"`` \| ``"updated"`` \| ``"operating_system"`` | Ordering field name |
| `orderHow?` | ``"ASC"`` \| ``"DESC"`` | Direction of the ordering; defaults to ASC for display_name, and to DESC for updated and operating_system |
| `search?` | `string` | Used for searching tags and sap_sids that match the given search string. For searching tags, a tag\&#39;s namespace, key, and/or value is used for matching. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TagsOut`](../interfaces/TagsOut.md)\>\>

#### Defined in

[api.ts:3553](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3553)

___

### apiHostHostCheckin

▸ **apiHostHostCheckin**(`createCheckIn`, `options?`): `Promise`<`AxiosResponse`<[`CreateHostOut`](../interfaces/CreateHostOut.md)\>\>

Finds a host and updates its staleness timestamps. It uses the supplied canonical facts to determine which host to update. By default, the staleness timestamp is set to 1 hour from when the request is received; however, this can be overridden by supplying the interval. <br /><br /> Required permissions: inventory:hosts:write

**`Summary`**

Update staleness timestamps for a host matching the provided facts

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createCheckIn` | [`CreateCheckIn`](../interfaces/CreateCheckIn.md) | Data required to create a check-in record for a host. |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CreateHostOut`](../interfaces/CreateHostOut.md)\>\>

#### Defined in

[api.ts:3565](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3565)

___

### apiHostMergeFacts

▸ **apiHostMergeFacts**(`hostIdList`, `namespace`, `body`, `branchId?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Merge one or multiple hosts facts under a namespace. <br /><br /> Required permissions: inventory:hosts:write

**`Summary`**

Merge facts under a namespace

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma separated list of host IDs. |
| `namespace` | `string` | A namespace of the merged facts. |
| `body` | `object` | A dictionary with the new facts to merge with the original ones. |
| `branchId?` | `string` | Filter by branch_id |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3580](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3580)

___

### apiHostPatchById

▸ **apiHostPatchById**(`hostIdList`, `patchHostIn`, `branchId?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Update a host <br /><br /> Required permissions: inventory:hosts:write

**`Summary`**

Update a host

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma separated list of host IDs. |
| `patchHostIn` | [`PatchHostIn`](../interfaces/PatchHostIn.md) | A group of fields to be updated on the host |
| `branchId?` | `string` | Filter by branch_id |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3594](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3594)

___

### apiHostReplaceFacts

▸ **apiHostReplaceFacts**(`hostIdList`, `namespace`, `body`, `branchId?`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Replace facts under a namespace <br /><br /> Required permissions: inventory:hosts:write

**`Summary`**

Replace facts under a namespace

**`Throws`**

**`Memberof`**

HostsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hostIdList` | `string`[] | A comma separated list of host IDs. |
| `namespace` | `string` | A namespace of the merged facts. |
| `body` | `object` | A dictionary with the new facts to replace the original ones. |
| `branchId?` | `string` | Filter by branch_id |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3609](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/host-inventory/api.ts#L3609)
