// tslint:disable
/**
 * config-manager
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 *
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    active: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    compliance: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    insights: boolean;
    /**
     *
     * @type {boolean}
     * @memberof InlineObject
     */
    remediations: boolean;
}
/**
 *
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     *
     * @type {number}
     * @memberof InlineResponse200
     */
    total: number;
    /**
     *
     * @type {number}
     * @memberof InlineResponse200
     */
    count: number;
    /**
     *
     * @type {number}
     * @memberof InlineResponse200
     */
    limit: number;
    /**
     *
     * @type {number}
     * @memberof InlineResponse200
     */
    offset: number;
    /**
     *
     * @type {Array<Profile>}
     * @memberof InlineResponse200
     */
    results: Array<Profile>;
}
/**
 *
 * @export
 * @interface Profile
 */
export interface Profile {
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    account_id?: string;
    /**
     *
     * @type {boolean}
     * @memberof Profile
     */
    active?: boolean;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    created_at?: string;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    creator?: string;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    org_id?: string;
    /**
     *
     * @type {string}
     * @memberof Profile
     */
    id?: string;
    /**
     *
     * @type {boolean}
     * @memberof Profile
     */
    compliance?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Profile
     */
    insights?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Profile
     */
    remediations?: boolean;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create and optionally activate a new profile.
         * @summary Create a new profile
         * @param {InlineObject} inlineObject
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProfile: async (inlineObject: InlineObject, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'inlineObject' is not null or undefined
            if (inlineObject === null || inlineObject === undefined) {
                throw new RequiredError('inlineObject','Required parameter inlineObject was null or undefined when calling createProfile.');
            }
            const localVarPath = `/profiles`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof inlineObject !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(inlineObject !== undefined ? inlineObject : {}) : (inlineObject || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Constructs and returns a Ansible playbook suitable to configure a host for the requested profile.
         * @summary Retrieve an Ansible playbook for the requested profile
         * @param {string} profileId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaybook: async (profileId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'profileId' is not null or undefined
            if (profileId === null || profileId === undefined) {
                throw new RequiredError('profileId','Required parameter profileId was null or undefined when calling getPlaybook.');
            }
            const localVarPath = `/playbooks`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (profileId !== undefined) {
                localVarQueryParameter['profile_id'] = profileId;
            }



            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a specific profile identified by the \'id\' path parameter for the identified account. If the special value \"current\" is used for the \'id\' path parameter, the most recent profile is retrieved instead.
         * @summary Get a specific profile
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getProfile.');
            }
            const localVarPath = `/profiles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;



            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a paginated array of profiles for the identified account. The URL query parameters \'limit\' and \'offset\' can be used to paginate the results. The default value of \'limit\' is 50. The default value of \'offset\' is 0.
         * @summary Get a list of all profiles
         * @param {number} [limit]
         * @param {number} [offset]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfiles: async (limit?: number, offset?: number, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/profiles`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }



            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create and optionally activate a new profile.
         * @summary Create a new profile
         * @param {InlineObject} inlineObject
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProfile(inlineObject: InlineObject, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Profile>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).createProfile(inlineObject, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Constructs and returns a Ansible playbook suitable to configure a host for the requested profile.
         * @summary Retrieve an Ansible playbook for the requested profile
         * @param {string} profileId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlaybook(profileId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getPlaybook(profileId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a specific profile identified by the \'id\' path parameter for the identified account. If the special value \"current\" is used for the \'id\' path parameter, the most recent profile is retrieved instead.
         * @summary Get a specific profile
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfile(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Profile>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getProfile(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a paginated array of profiles for the identified account. The URL query parameters \'limit\' and \'offset\' can be used to paginate the results. The default value of \'limit\' is 50. The default value of \'offset\' is 0.
         * @summary Get a list of all profiles
         * @param {number} [limit]
         * @param {number} [offset]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getProfiles(limit?: number, offset?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await DefaultApiAxiosParamCreator(configuration).getProfiles(limit, offset, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create and optionally activate a new profile.
         * @summary Create a new profile
         * @param {InlineObject} inlineObject
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProfile(inlineObject: InlineObject, options?: any): AxiosPromise<Profile> {
            return DefaultApiFp(configuration).createProfile(inlineObject, options).then((request) => request(axios, basePath));
        },
        /**
         * Constructs and returns a Ansible playbook suitable to configure a host for the requested profile.
         * @summary Retrieve an Ansible playbook for the requested profile
         * @param {string} profileId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlaybook(profileId: string, options?: any): AxiosPromise<object> {
            return DefaultApiFp(configuration).getPlaybook(profileId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a specific profile identified by the \'id\' path parameter for the identified account. If the special value \"current\" is used for the \'id\' path parameter, the most recent profile is retrieved instead.
         * @summary Get a specific profile
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfile(id: string, options?: any): AxiosPromise<Profile> {
            return DefaultApiFp(configuration).getProfile(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a paginated array of profiles for the identified account. The URL query parameters \'limit\' and \'offset\' can be used to paginate the results. The default value of \'limit\' is 50. The default value of \'offset\' is 0.
         * @summary Get a list of all profiles
         * @param {number} [limit]
         * @param {number} [offset]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getProfiles(limit?: number, offset?: number, options?: any): AxiosPromise<InlineResponse200> {
            return DefaultApiFp(configuration).getProfiles(limit, offset, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Create and optionally activate a new profile.
     * @summary Create a new profile
     * @param {InlineObject} inlineObject
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public createProfile(inlineObject: InlineObject, options?: any) {
        return DefaultApiFp(this.configuration).createProfile(inlineObject, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Constructs and returns a Ansible playbook suitable to configure a host for the requested profile.
     * @summary Retrieve an Ansible playbook for the requested profile
     * @param {string} profileId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getPlaybook(profileId: string, options?: any) {
        return DefaultApiFp(this.configuration).getPlaybook(profileId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a specific profile identified by the \'id\' path parameter for the identified account. If the special value \"current\" is used for the \'id\' path parameter, the most recent profile is retrieved instead.
     * @summary Get a specific profile
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getProfile(id: string, options?: any) {
        return DefaultApiFp(this.configuration).getProfile(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieve a paginated array of profiles for the identified account. The URL query parameters \'limit\' and \'offset\' can be used to paginate the results. The default value of \'limit\' is 50. The default value of \'offset\' is 0.
     * @summary Get a list of all profiles
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getProfiles(limit?: number, offset?: number, options?: any) {
        return DefaultApiFp(this.configuration).getProfiles(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

}


