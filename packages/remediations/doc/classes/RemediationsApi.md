[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationsApi

# Class: RemediationsApi

RemediationsApi - object-oriented interface

**`Export`**

## Hierarchy

- `BaseAPI`

  ↳ **`RemediationsApi`**

## Table of contents

### Constructors

- [constructor](RemediationsApi.md#constructor)

### Properties

- [axios](RemediationsApi.md#axios)
- [basePath](RemediationsApi.md#basepath)
- [configuration](RemediationsApi.md#configuration)

### Methods

- [cancelPlaybookRuns](RemediationsApi.md#cancelplaybookruns)
- [checkExecutable](RemediationsApi.md#checkexecutable)
- [createRemediation](RemediationsApi.md#createremediation)
- [deleteRemediation](RemediationsApi.md#deleteremediation)
- [deleteRemediationIssue](RemediationsApi.md#deleteremediationissue)
- [deleteRemediationIssueSystem](RemediationsApi.md#deleteremediationissuesystem)
- [downloadPlaybooks](RemediationsApi.md#downloadplaybooks)
- [getPlaybookRunDetails](RemediationsApi.md#getplaybookrundetails)
- [getPlaybookRunSystemDetails](RemediationsApi.md#getplaybookrunsystemdetails)
- [getPlaybookRunSystems](RemediationsApi.md#getplaybookrunsystems)
- [getRemediation](RemediationsApi.md#getremediation)
- [getRemediationConnectionStatus](RemediationsApi.md#getremediationconnectionstatus)
- [getRemediationIssueSystems](RemediationsApi.md#getremediationissuesystems)
- [getRemediationPlaybook](RemediationsApi.md#getremediationplaybook)
- [getRemediations](RemediationsApi.md#getremediations)
- [listPlaybookRuns](RemediationsApi.md#listplaybookruns)
- [runRemediation](RemediationsApi.md#runremediation)
- [updateRemediation](RemediationsApi.md#updateremediation)
- [updateRemediationIssue](RemediationsApi.md#updateremediationissue)

## Constructors

### constructor

• **new RemediationsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[base.ts:51](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L51)

___

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:49](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/base.ts#L49)

## Methods

### cancelPlaybookRuns

▸ **cancelPlaybookRuns**(`id`, `playbookRunId`, `options?`): `Promise`<`AxiosResponse`<`object`\>\>

Cancel execution of the remediation

**`Summary`**

Cancel execution of the remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunId` | `string` | Playbook run identifier (UUID) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`object`\>\>

#### Defined in

[api.ts:2860](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2860)

___

### checkExecutable

▸ **checkExecutable**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Checks remediation for the existence of smart_managment flaged systems

**`Summary`**

Check smart_managment systems

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:2872](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2872)

___

### createRemediation

▸ **createRemediation**(`remediationInput`, `options?`): `Promise`<`AxiosResponse`<[`RemediationCreated`](../interfaces/RemediationCreated.md)\>\>

Creates a new Remediation based on given information, RBAC permission {remediations:remediation:write}

**`Summary`**

Create Remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `remediationInput` | [`RemediationInput`](../interfaces/RemediationInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RemediationCreated`](../interfaces/RemediationCreated.md)\>\>

#### Defined in

[api.ts:2884](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2884)

___

### deleteRemediation

▸ **deleteRemediation**(`id`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Removes the given Remediation, RBAC permission {remediations:remediation:write}

**`Summary`**

Remove Remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:2896](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2896)

___

### deleteRemediationIssue

▸ **deleteRemediationIssue**(`id`, `issue`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Removes the given Issue from the Remediation, RBAC permission {remediations:remediation:write}

**`Summary`**

Remove Remediation Issue

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:2909](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2909)

___

### deleteRemediationIssueSystem

▸ **deleteRemediationIssueSystem**(`id`, `issue`, `system`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Removes the given System from the Issue Remediation, RBAC permission {remediations:remediation:write}

**`Summary`**

Remove Remediation Issue System

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `system` | `string` | System identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:2923](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2923)

___

### downloadPlaybooks

▸ **downloadPlaybooks**(`selectedRemediations?`, `options?`): `Promise`<`AxiosResponse`<`any`\>\>

Downloads a zip file containing selected Remediations, RBAC permission {remediations:remediation:read}

**`Summary`**

Download Remediations

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectedRemediations?` | `string`[] | Selected Remediations for download |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`any`\>\>

#### Defined in

[api.ts:2935](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2935)

___

### getPlaybookRunDetails

▸ **getPlaybookRunDetails**(`id`, `playbookRunId`, `options?`): `Promise`<`AxiosResponse`<[`PlaybookRunExecutorDetails`](../interfaces/PlaybookRunExecutorDetails.md)\>\>

Get details on execution of the remediation

**`Summary`**

Get details on execution of the remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunId` | `string` | Playbook run identifier (UUID) |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PlaybookRunExecutorDetails`](../interfaces/PlaybookRunExecutorDetails.md)\>\>

#### Defined in

[api.ts:2948](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2948)

___

### getPlaybookRunSystemDetails

▸ **getPlaybookRunSystemDetails**(`id`, `playbookRunId`, `system`, `options?`): `Promise`<`AxiosResponse`<[`PlaybookRunSystemDetails`](../interfaces/PlaybookRunSystemDetails.md)\>\>

Get details and updated log of system being executed on in specific playbook run

**`Summary`**

Get details and updated log of system being executed on in specific playbook run

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunId` | `string` | Playbook run identifier (UUID) |
| `system` | `string` | System identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PlaybookRunSystemDetails`](../interfaces/PlaybookRunSystemDetails.md)\>\>

#### Defined in

[api.ts:2962](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2962)

___

### getPlaybookRunSystems

▸ **getPlaybookRunSystems**(`id`, `playbookRunId`, `executor?`, `limit?`, `offset?`, `ansibleHost?`, `sort?`, `options?`): `Promise`<`AxiosResponse`<[`PlaybookRunSystemList`](../interfaces/PlaybookRunSystemList.md)\>\>

Get details on systems being executed on in specific playbook run

**`Summary`**

Get details on systems being executed on in specific playbook run

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunId` | `string` | Playbook run identifier (UUID) |
| `executor?` | `string` | Playbook run executor identifier (UUID) |
| `limit?` | `number` | Maximum number of results to return |
| `offset?` | `number` | Indicates the starting position of the query relative to the complete set of items that match the query |
| `ansibleHost?` | `string` | System Name (STRING) |
| `sort?` | ``"system_name"`` \| ``"-system_name"`` | Playbook run systems sort order by ASC or DESC |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PlaybookRunSystemList`](../interfaces/PlaybookRunSystemList.md)\>\>

#### Defined in

[api.ts:2980](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2980)

___

### getRemediation

▸ **getRemediation**(`id`, `options?`): `Promise`<`AxiosResponse`<[`RemediationDetails`](../interfaces/RemediationDetails.md)\>\>

Provides information about the given Remediation, RBAC permission {remediations:remediation:read}

**`Summary`**

Get Remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RemediationDetails`](../interfaces/RemediationDetails.md)\>\>

#### Defined in

[api.ts:2992](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L2992)

___

### getRemediationConnectionStatus

▸ **getRemediationConnectionStatus**(`id`, `options?`): `Promise`<`AxiosResponse`<[`RemediationConnectionStatus`](../interfaces/RemediationConnectionStatus.md)\>\>

Get satellite connection status for a given host, RBAC permission {remediations:remediation:execute}

**`Summary`**

Pre-flight check

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RemediationConnectionStatus`](../interfaces/RemediationConnectionStatus.md)\>\>

#### Defined in

[api.ts:3004](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3004)

___

### getRemediationIssueSystems

▸ **getRemediationIssueSystems**(`id`, `issue`, `limit?`, `offset?`, `sort?`, `options?`): `Promise`<`AxiosResponse`<[`RemediationIssueSystemList`](../interfaces/RemediationIssueSystemList.md)\>\>

Get a paginated list of systems from a given issue, RBAC permission {remediations:remediation:read}

**`Summary`**

Get Remediation Issue Systems

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `limit?` | `number` | Maximum number of results to return |
| `offset?` | `number` | Indicates the starting position of the query relative to the complete set of items that match the query |
| `sort?` | ``"display_name"`` \| ``"-display_name"`` | Sort order |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RemediationIssueSystemList`](../interfaces/RemediationIssueSystemList.md)\>\>

#### Defined in

[api.ts:3020](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3020)

___

### getRemediationPlaybook

▸ **getRemediationPlaybook**(`id`, `hosts?`, `satOrg?`, `localhost?`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

Provides Ansible Playbook, RBAC permission {remediations:remediation:read}

**`Summary`**

Get Remediation Playbook

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `hosts?` | `string`[] | Selected hosts to be included in playbook |
| `satOrg?` | `string` | Organization ID passed by satellite |
| `localhost?` | `boolean` | Flag for localhost playbook generation |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[api.ts:3035](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3035)

___

### getRemediations

▸ **getRemediations**(`sort?`, `filter?`, `limit?`, `offset?`, `system?`, `hideArchived?`, `options?`): `Promise`<`AxiosResponse`<[`RemediationList`](../interfaces/RemediationList.md)\>\>

Provides information about Remediations, RBAC permission {remediations:remediation:read}

**`Summary`**

List Remediations

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sort?` | ``"name"`` \| ``"updated_at"`` \| ``"-updated_at"`` \| ``"-name"`` \| ``"system_count"`` \| ``"-system_count"`` \| ``"issue_count"`` \| ``"-issue_count"`` | Sort order |
| `filter?` | `string` | Remediation name filter. If specified only remediations whose name matches the given string will be returned. |
| `limit?` | `number` | Maximum number of results to return |
| `offset?` | `number` | Indicates the starting position of the query relative to the complete set of items that match the query |
| `system?` | `string` | System identifier. If specified only remediations that involve the given system will be returned. |
| `hideArchived?` | `boolean` | Hide archived playbooks |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RemediationList`](../interfaces/RemediationList.md)\>\>

#### Defined in

[api.ts:3052](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3052)

___

### listPlaybookRuns

▸ **listPlaybookRuns**(`id`, `limit?`, `offset?`, `sort?`, `options?`): `Promise`<`AxiosResponse`<[`PlaybookRunsList`](../interfaces/PlaybookRunsList.md)\>\>

List of executions of this remediation

**`Summary`**

List of executions of this remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `limit?` | `number` | Maximum number of results to return |
| `offset?` | `number` | Indicates the starting position of the query relative to the complete set of items that match the query |
| `sort?` | ``"updated_at"`` \| ``"-updated_at"`` | Sort Order for Playbook Run |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`PlaybookRunsList`](../interfaces/PlaybookRunsList.md)\>\>

#### Defined in

[api.ts:3067](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3067)

___

### runRemediation

▸ **runRemediation**(`id`, `playbookRunsInput?`, `options?`): `Promise`<`AxiosResponse`<[`ExecuteRemediation`](../interfaces/ExecuteRemediation.md)\>\>

Execute remediation, RBAC permission {remediations:remediation:execute}

**`Summary`**

Execute remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `playbookRunsInput?` | [`PlaybookRunsInput`](../interfaces/PlaybookRunsInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ExecuteRemediation`](../interfaces/ExecuteRemediation.md)\>\>

#### Defined in

[api.ts:3080](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3080)

___

### updateRemediation

▸ **updateRemediation**(`id`, `remediationInput`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Updates the given Remediation, RBAC permission {remediations:remediation:write}

**`Summary`**

Update Remediation

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `remediationInput` | [`RemediationInput`](../interfaces/RemediationInput.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3093](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3093)

___

### updateRemediationIssue

▸ **updateRemediationIssue**(`id`, `issue`, `remediationIssueIn`, `options?`): `Promise`<`AxiosResponse`<`void`\>\>

Updates the given Remediation Issue, RBAC permission {remediations:remediation:write}

**`Summary`**

Update Remediation Issue

**`Throws`**

**`Memberof`**

RemediationsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Remediation identifier |
| `issue` | `string` | Issue identifier (e.g. &#x60;advisor:CVE_2017_6074_kernel\|KERNEL_CVE_2017_6074&#x60;) |
| `remediationIssueIn` | [`RemediationIssueIn`](../interfaces/RemediationIssueIn.md) |  |
| `options?` | `any` | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<`void`\>\>

#### Defined in

[api.ts:3107](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L3107)
