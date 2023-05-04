import { z } from 'zod'
import { PackageSchema } from './Schemas'

export function defaultValues<T extends z.ZodType<S>>(
  type: T
) {
  return type.parse(undefined)
}

const PackagesFiltration = z
  .object({
    state: z.string().optional(),
    deleted: z.boolean(),
    repository: z.string().optional(),
    technologies: z.array(z.string()).optional()
  })
  .default({
    state: undefined,
    repository: undefined,
    technologies: undefined,
    deleted: false
  })

type PackagesFiltration = z.infer<typeof PackagesFiltration>

const RepositoriesFiltration = z
  .object({
    technologies: z.array(z.string()).optional(),
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
    state: z.string().optional(),
    package: PackageSchema.optional()
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
    technology: z.string().optional(),
    userId: z.string().optional(),
    resourceId: z.string().optional(),
    eventType: z.string().optional(),
    resourceType: z.string().optional()
  })
  .default({
    technology: undefined,
    userId: undefined,
    resourceId: undefined,
    eventType: undefined,
    resourceType: undefined
  })

type EventsFiltration = z.infer<typeof EventsFiltration>
const PackageMaintainersFiltration = z
  .object({
    deleted: z.boolean(),
    technologies: z.array(z.string()).optional()
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
