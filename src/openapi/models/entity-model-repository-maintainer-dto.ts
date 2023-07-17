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
import { Link } from './link'
import { RepositoryProjection } from './repository-projection'
import { UserProjection } from './user-projection'
/**
 *
 * @export
 * @interface EntityModelRepositoryMaintainerDto
 */
export interface EntityModelRepositoryMaintainerDto {
  /**
   *
   * @type {number}
   * @memberof EntityModelRepositoryMaintainerDto
   */
  id?: number
  /**
   *
   * @type {UserProjection}
   * @memberof EntityModelRepositoryMaintainerDto
   */
  user?: UserProjection
  /**
   *
   * @type {RepositoryProjection}
   * @memberof EntityModelRepositoryMaintainerDto
   */
  repository?: RepositoryProjection
  /**
   *
   * @type {boolean}
   * @memberof EntityModelRepositoryMaintainerDto
   */
  deleted?: boolean
  /**
   *
   * @type {string}
   * @memberof EntityModelRepositoryMaintainerDto
   */
  description?: string
  /**
   *
   * @type {Array<Link>}
   * @memberof EntityModelRepositoryMaintainerDto
   */
  links?: Array<Link>
}
