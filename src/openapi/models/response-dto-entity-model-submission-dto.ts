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
import { EntityModelSubmissionDto } from './entity-model-submission-dto'
/**
 *
 * @export
 * @interface ResponseDtoEntityModelSubmissionDto
 */
export interface ResponseDtoEntityModelSubmissionDto {
  /**
   *
   * @type {string}
   * @memberof ResponseDtoEntityModelSubmissionDto
   */
  status?: ResponseDtoEntityModelSubmissionDtoStatusEnum
  /**
   *
   * @type {number}
   * @memberof ResponseDtoEntityModelSubmissionDto
   */
  code?: number
  /**
   *
   * @type {string}
   * @memberof ResponseDtoEntityModelSubmissionDto
   */
  message?: string
  /**
   *
   * @type {string}
   * @memberof ResponseDtoEntityModelSubmissionDto
   */
  messageCode?: string
  /**
   *
   * @type {EntityModelSubmissionDto}
   * @memberof ResponseDtoEntityModelSubmissionDto
   */
  data?: EntityModelSubmissionDto
}

/**
 * @export
 * @enum {string}
 */
export enum ResponseDtoEntityModelSubmissionDtoStatusEnum {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
