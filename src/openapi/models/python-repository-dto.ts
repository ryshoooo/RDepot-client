/*
 * R Depot
 *
 * Copyright (C) 2012-2023 Open Analytics NV
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

import {} from '.'

/**
 *
 *
 * @export
 * @interface PythonRepositoryDto
 */
export interface PythonRepositoryDto {
  /**
   * @type {number}
   * @memberof PythonRepositoryDto
   */
  id?: number

  /**
   * @type {number}
   * @memberof PythonRepositoryDto
   */
  version?: number

  /**
   * @type {string}
   * @memberof PythonRepositoryDto
   */
  publicationUri?: string

  /**
   * @type {string}
   * @memberof PythonRepositoryDto
   */
  name?: string

  /**
   * @type {string}
   * @memberof PythonRepositoryDto
   */
  serverAddress?: string

  /**
   * @type {boolean}
   * @memberof PythonRepositoryDto
   */
  deleted?: boolean

  /**
   * @type {boolean}
   * @memberof PythonRepositoryDto
   */
  published?: boolean

  /**
   * @type {boolean}
   * @memberof PythonRepositoryDto
   */
  synchronizing?: boolean

  /**
   * @type {string}
   * @memberof PythonRepositoryDto
   */
  technology?: string

  /**
   * @type {number}
   * @memberof PythonRepositoryDto
   */
  numberOfPackages?: number

  /**
   * @type {string}
   * @memberof PythonRepositoryDto
   */
  hashMethod?: PythonRepositoryDtoHashMethodEnum
}

/**
 * @export
 * @enum {string}
 */
export enum PythonRepositoryDtoHashMethodEnum {
  MD5 = 'MD5',
  SHA1 = 'SHA1',
  SHA224 = 'SHA224',
  SHA256 = 'SHA256',
  SHA384 = 'SHA384',
  SHA512 = 'SHA512'
}
