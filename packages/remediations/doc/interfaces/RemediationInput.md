[@redhat-cloud-services/remediations-client](../README.md) / [Exports](../modules.md) / RemediationInput

# Interface: RemediationInput

**`Export`**

**`Interface`**

RemediationInput

## Table of contents

### Properties

- [add](RemediationInput.md#add)
- [archived](RemediationInput.md#archived)
- [auto\_reboot](RemediationInput.md#auto_reboot)
- [name](RemediationInput.md#name)

## Properties

### add

• `Optional` **add**: [`RemediationInputAdd`](RemediationInputAdd.md)

**`Memberof`**

RemediationInput

#### Defined in

[api.ts:733](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L733)

___

### archived

• `Optional` **archived**: `boolean`

Indicates whether a remediation has been marked as archived

**`Memberof`**

RemediationInput

#### Defined in

[api.ts:721](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L721)

___

### auto\_reboot

• `Optional` **auto\_reboot**: `boolean`

Indicates whether systems that require reboot for the remediation to be properly applied should be rebooted automatically or not

**`Memberof`**

RemediationInput

#### Defined in

[api.ts:727](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L727)

___

### name

• `Optional` **name**: `string`

**`Memberof`**

RemediationInput

#### Defined in

[api.ts:715](https://github.com/RedHatInsights/javascript-clients/blob/master/packages/remediations/api.ts#L715)
