/* tslint:disable */
/* eslint-disable */
/**
 * RDEPOT API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Link } from './link';
import { RepositoryProjection } from './repository-projection';
import { UserProjection } from './user-projection';
/**
 * 
 * @export
 * @interface EntityModelRPackageDto
 */
export interface EntityModelRPackageDto {
    /**
     * 
     * @type {number}
     * @memberof EntityModelRPackageDto
     */
    id?: number;
    /**
     * 
     * @type {UserProjection}
     * @memberof EntityModelRPackageDto
     */
    user?: UserProjection;
    /**
     * 
     * @type {RepositoryProjection}
     * @memberof EntityModelRPackageDto
     */
    repository?: RepositoryProjection;
    /**
     * 
     * @type {number}
     * @memberof EntityModelRPackageDto
     */
    submissionId?: number;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    source?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelRPackageDto
     */
    active?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityModelRPackageDto
     */
    deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    technology?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    depends?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    imports?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    suggests?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    systemRequirements?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    license?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityModelRPackageDto
     */
    md5sum?: string;
    /**
     * 
     * @type {Array<Link>}
     * @memberof EntityModelRPackageDto
     */
    links?: Array<Link>;
}
