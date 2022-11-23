import { fetchPackagesServices } from '@/services'
import { Package } from '@/models/packages/Package'
import { State } from '.'
import { ActionContext } from 'vuex'

export interface PackageState {
  packages: Package[]
  page: Number
  howManyPages: Number
}

type Context = ActionContext<PackageState, State>

const packages_state = {
  state: {
    packages: [],
    page: 1,
    howManyPages: 10,
  } as PackageState,
  mutations: {
    setPackages(state: PackageState, payload: Package[]) {
      state.packages = payload
    },
    setPage(state: PackageState, payload: Number) {
      state.page = payload
    },
    setHowManyPages(state: PackageState, payload: Number) {
      state.howManyPages = payload
    }
  },
  actions: {
    async fetchPackages(context: Context) {
      //change: add parameter with the page so fetched data will be only from wanted page
      //change: if you want to send the filtration request - then set page to 1 and add parameter with filtration part
      var packages = await fetchPackagesServices()
    },
    async setPage(context: Context, data: Number) {
      context.commit('setPage', data)
      this.fetchPackages(context)
    }
  }
}

export default packages_state
