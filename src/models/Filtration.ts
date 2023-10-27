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

import { z } from 'zod'
import { EntityModelSubmissionDtoStateEnum } from '@/openapi'

export function defaultValues<T extends z.ZodType>(
  type: T
): z.infer<T> {
  return type.parse(undefined)
}

const PackagesFiltration = z
  .object({
    state: z.array(z.string()).optional(),
    deleted: z.boolean(),
    repository: z.array(z.string()).optional(),
    technologies: z
      .array(z.string())
      .optional()
      .transform((val) => {
        if (val?.length == 0) {
          return undefined
        }
        return val
      }),
    name: z.array(z.string()).optional()
  })
  .default({
    state: undefined,
    repository: undefined,
    technologies: undefined,
    deleted: false,
    name: undefined
  })

type PackagesFiltration = z.infer<typeof PackagesFiltration>

const RepositoriesFiltration = z
  .object({
    technologies: z
      .array(z.string())
      .optional()
      .transform((val) => {
        if (val?.length == 0) {
          return undefined
        }
        return val
      }),
    name: z.string().optional(),
    deleted: z.boolean()
  })
  .default({
    technologies: undefined,
    name: undefined,
    deleted: false
  })

type RepositoriesFiltration = z.infer<
  typeof RepositoriesFiltration
>

const SubmissionsFiltration = z
  .object({
    assignedToMe: z.boolean().optional(),
    state: z
      .array(
        z.nativeEnum(EntityModelSubmissionDtoStateEnum)
      )
      .optional(),
    package: z.string().optional()
  })
  .default({
    assignedToMe: undefined,
    state: undefined,
    package: undefined
  })

type SubmissionsFiltration = z.infer<
  typeof SubmissionsFiltration
>

const EventsFiltration = z
  .object({
    technologies: z
      .array(z.string())
      .optional()
      .transform((val) => {
        if (val?.length == 0) {
          return undefined
        }
        return val
      }),
    userId: z.number().optional(),
    resourceId: z.number().optional(),
    eventType: z.array(z.string()).optional(),
    resourceType: z.array(z.string()).optional()
  })
  .default({
    technologies: undefined,
    userId: undefined,
    resourceId: undefined,
    eventType: undefined,
    resourceType: undefined
  })

type EventsFiltration = z.infer<typeof EventsFiltration>
const PackageMaintainersFiltration = z
  .object({
    deleted: z.boolean(),
    technologies: z
      .array(z.string())
      .optional()
      .transform((val) => {
        if (val?.length == 0) {
          return undefined
        }
        return val
      })
  })
  .default({
    deleted: false,
    technologies: undefined
  })

type PackageMaintainersFiltration = z.infer<
  typeof PackageMaintainersFiltration
>

const RepositoryMaintainersFiltration =
  PackageMaintainersFiltration

type RepositoryMaintainersFiltration = z.infer<
  typeof RepositoryMaintainersFiltration
>

export {
  RepositoriesFiltration,
  PackagesFiltration,
  SubmissionsFiltration,
  EventsFiltration,
  PackageMaintainersFiltration,
  RepositoryMaintainersFiltration
}
