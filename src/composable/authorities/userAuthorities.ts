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

import { Link } from '@/openapi'

type PatchOptions = {
  allowed: boolean
  fields: string[]
}

export function useUserAuthorities() {
  function canDelete(links?: Array<Link>) {
    return canPerformAction('delete', links)
  }

  function canPatch(links?: Array<Link>) {
    return canPerformAction('patch', links)
  }

  function canPerformAction(
    action: string,
    links?: Array<Link>
  ) {
    let result: PatchOptions = {
      allowed: false,
      fields: []
    }

    links?.forEach((link) => {
      if (
        link.rel === 'self' &&
        link.type?.toLowerCase() === action.toLowerCase()
      ) {
        result.allowed = true
        result.fields = link.modifiableProperties
      }
    })
    return result
  }

  return {
    canDelete,
    canPatch
  }
}
