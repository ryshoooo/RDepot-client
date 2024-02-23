/*
 * R Depot
 *
 * Copyright (C) 2012-2024 Open Analytics NV
 *
 * ===========================================================================
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the Apache License as published by
 * The Apache Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Apache License for more details.
 *
 * You should have received a copy of the Apache License
 * along with this program. If not, see <http://www.apache.org/licenses/>
 *
 */

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
import { SubmissionProjection } from './submission-projection'
import { UserProjection } from './user-projection'
/**
 *
 *
 * @export
 * @interface EntityModelRPackageDto
 */
export interface EntityModelRPackageDto {
  /**
   * @type {number}
   * @memberof EntityModelRPackageDto
   */
  id?: number

  /**
   * @type {UserProjection}
   * @memberof EntityModelRPackageDto
   */
  user?: UserProjection

  /**
   * @type {RepositoryProjection}
   * @memberof EntityModelRPackageDto
   */
  repository?: RepositoryProjection

  /**
   * @type {SubmissionProjection}
   * @memberof EntityModelRPackageDto
   */
  submission?: SubmissionProjection

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  name?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  version?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  source?: string

  /**
   * @type {boolean}
   * @memberof EntityModelRPackageDto
   */
  active?: boolean

  /**
   * @type {boolean}
   * @memberof EntityModelRPackageDto
   */
  deleted?: boolean

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  technology?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  description?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  author?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  title?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  url?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  depends?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  imports?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  suggests?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  systemRequirements?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  license?: string

  /**
   * @type {string}
   * @memberof EntityModelRPackageDto
   */
  md5sum?: string

  /**
   * @type {Array<Link>}
   * @memberof EntityModelRPackageDto
   */
  links?: Array<Link>
}
