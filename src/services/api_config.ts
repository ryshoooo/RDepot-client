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

import { Configuration } from '@/openapi'
import { authService } from '@/plugins/oauth'
import { useUserStore } from '@/store/users'
import getEnv from '@/utils/env'

export async function getConfiguration() {
  const configuration: Configuration = new Configuration()

  configuration.baseOptions = {
    headers: {
      Authorization: 'Bearer ' + (await getToken())
    }
  }
  return configuration
}

async function getToken() {
  const userStore = useUserStore()
  if (
    getEnv('VITE_LOGIN_OIDC') == 'true' &&
    getEnv('VITE_LOGIN_SIMPLE') == 'true'
  ) {
    var oauthToken = await authService.getAccessToken()
    if (oauthToken != null) {
      return oauthToken
    }
    return userStore.userToken
  } else if (
    getEnv('VITE_LOGIN_OIDC') == 'true' &&
    getEnv('VITE_LOGIN_SIMPLE') == 'false'
  ) {
    return await authService.getAccessToken()
  } else if (
    getEnv('VITE_LOGIN_OIDC') == 'false' &&
    getEnv('VITE_LOGIN_SIMPLE') == 'true'
  ) {
    return userStore.userToken
  }
}
