import { Technologies } from '@/enum/Technologies'
import { i18n } from '@/plugins/i18n'
import z from 'zod'

const linkSchema = z.object({
  rel: z.string().optional(),
  href: z.string().optional(),
  hreflang: z.string().optional(),
  media: z.string().optional(),
  title: z.string().optional(),
  type: z.string().optional(),
  deprecation: z.string().optional(),
  profile: z.string().optional(),
  name: z.string().optional()
})

export const nonEmptyString = z.string().nonempty()
export const url = nonEmptyString.url({
  message: i18n.t('common.errors.url')
})
export const email = nonEmptyString.email({
  message: i18n.t('common.errors.email')
})

export const repositorySchema = z.object({
  id: z.number().default(0),
  version: z.number().default(0),
  publicationUri: url,
  name: nonEmptyString,
  serverAddress: url,
  deleted: z.boolean().default(false),
  published: z.boolean().default(false),
  synchronizing: z.boolean().default(false),
  technology: Technologies,
  links: z.array(linkSchema).optional()
})

const repositoryProjectionSchema = z.object({
  id: z.number(),
  name: nonEmptyString,
  publicationUri: url,
  technology: Technologies
})

const userProjectionSchema = z.object({
  id: z.number(),
  name: nonEmptyString,
  login: nonEmptyString,
  email: email
})

export const UserRoleSchema = z.object({
  id: z.number().min(1).max(5),
  value: z.number().min(0).max(4),
  description: nonEmptyString,
  name: nonEmptyString
})

export const repositoryMaintainerSchema = z.object({
  id: z.number(),
  user: userProjectionSchema,
  repository: repositoryProjectionSchema,
  deleted: z.boolean().default(false),
  description: z.string(),
  links: z.array(linkSchema).optional()
})

export const packageMaintainerSchema = z.object({
  id: z.number(),
  user: userProjectionSchema,
  packageName: nonEmptyString,
  repository: repositoryProjectionSchema,
  deleted: z.boolean().default(false),
  description: z.string(),
  links: z.array(linkSchema)
})

export function formValidation<T extends z.ZodTypeAny>(
  zObject: T
) {
  let curry = (input: unknown) => {
    const parsedInput = zObject.safeParse(input)
    if (parsedInput.success) {
      return parsedInput.data
    } else {
      return parsedInput.error.message
    }
  }
  return curry
}
