/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import Notifications from '@kyvg/vue3-notification'
import { abilitiesPlugin } from '@casl/vue'
import type { App } from 'vue'
import { i18nInstance } from './i18n'
import buildAbilityFor from '@/services/abilities'
import { Role } from '@/enum/UserRoles'

const ability = buildAbilityFor(Role.enum.user)

export function registerPlugins(app: App) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(i18nInstance)
    .use(Notifications)
    .use(abilitiesPlugin, ability, {
      useGlobalProperties: true
    })
}
