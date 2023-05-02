import { Role } from '@/enum/UserRoles'
import {
  defineAbilityFor,
  Ability,
  Action,
  Subject
} from '@/plugins/casl'
import { defineStore } from 'pinia'

interface State {
  userToken: string
  userLogin: string
  userRole: Role
  userId: number
  ability: Ability
}

export const useLoggedUserStore = defineStore(
  'logged_user',
  {
    state: (): State => {
      return {
        userToken: import.meta.env.VITE_ADMIN_TOKEN,
        userLogin: 'einstein',
        userRole: Role.enum.admin,
        userId: 8,
        ability: defineAbilityFor(Role.enum.admin)
      }
    },
    actions: {
      change_user(
        token: string,
        login: string,
        role: Role,
        id: number
      ) {
        this.userToken = token
        this.userLogin = login
        this.userRole = role
        this.userId = id
        const { rules } = defineAbilityFor(this.userRole)
        this.ability.update(rules)
      },
      can(action: Action, subject: Subject): boolean {
        return this.ability.can(action, subject)
      }
    }
  }
)
