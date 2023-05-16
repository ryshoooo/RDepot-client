/* 
 *  R Depot
 *  
 *  Copyright (C) 2012-2023 Open Analytics NV
 *  
 *  ===========================================================================
 *  
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the Apache License as published by
 *  The Apache Software Foundation, either version 2 of the License, or
 *  (at your option) any later version.
 *  
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  Apache License for more details.
 *  
 *  You should have received a copy of the Apache License
 *  along with this program. If not, see <http://www.apache.org/licenses/>
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
import { EntityModelMapStringString } from './entity-model-map-string-string';
/**
 * 
 * @export
 * @interface ResponseDtoEntityModelMapStringString
 */
export interface ResponseDtoEntityModelMapStringString {
    /**
     * 
     * @type {string}
     * @memberof ResponseDtoEntityModelMapStringString
     */
    status?: ResponseDtoEntityModelMapStringStringStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof ResponseDtoEntityModelMapStringString
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof ResponseDtoEntityModelMapStringString
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ResponseDtoEntityModelMapStringString
     */
    messageCode?: string;
    /**
     * 
     * @type {EntityModelMapStringString}
     * @memberof ResponseDtoEntityModelMapStringString
     */
    data?: EntityModelMapStringString;
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseDtoEntityModelMapStringStringStatusEnum {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

