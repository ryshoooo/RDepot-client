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
import { EntityModelPythonRepositoryDto } from './entity-model-python-repository-dto';
import { Link } from './link';
import { PageMetadata } from './page-metadata';
/**
 * 
 * @export
 * @interface PagedModelEntityModelPythonRepositoryDto
 */
export interface PagedModelEntityModelPythonRepositoryDto {
    /**
     * 
     * @type {Array<Link>}
     * @memberof PagedModelEntityModelPythonRepositoryDto
     */
    links?: Array<Link>;
    /**
     * 
     * @type {Array<EntityModelPythonRepositoryDto>}
     * @memberof PagedModelEntityModelPythonRepositoryDto
     */
    content?: Array<EntityModelPythonRepositoryDto>;
    /**
     * 
     * @type {PageMetadata}
     * @memberof PagedModelEntityModelPythonRepositoryDto
     */
    page?: PageMetadata;
}
