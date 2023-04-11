import {
  EntityModelPackageMaintainerDto,
  EntityModelPythonRepositoryDto,
  EntityModelRPackageDto
} from '@/openapi'
import { defineStore } from 'pinia'
import { PackageMaintainersFiltration } from '@/models/Filtration'
import { notify } from '@kyvg/vue3-notification'
import {
  fetchPackagesServices,
  fetchRepositoriesServices
} from '@/services'
import {
  fetchPackageMaintainersService,
  updatePackageMaintainer
} from '@/services/package_maintainers_service'
import { usePaginationStore } from '@/store/pagination'
import { useObjectActions } from '@/composable/objectActions'

interface State {
  maintainers: EntityModelPackageMaintainerDto[]
  filtration: PackageMaintainersFiltration
  repositories: EntityModelPythonRepositoryDto[]
  packages: EntityModelRPackageDto[]
  chosenMaintainer?: number
}

export const usePackageMaintainersStore = defineStore(
  'package_maintainers_store',
  {
    state: (): State => {
      return {
        maintainers: [],
        filtration: {
          deleted: undefined,
          technologies: undefined
        },
        repositories: [],
        packages: [],
        chosenMaintainer: undefined
      }
    },
    actions: {
      async fetchMaintainers() {
        const pagination = usePaginationStore()
        fetchPackageMaintainersService(
          this.filtration,
          pagination.page,
          pagination.pageSize
        ).then(
          (res) => {
            pagination.setPage(
              res.data.data?.page?.number || 0
            )
            pagination.setTotalNumber(
              res.data.data?.page?.totalElements || 0
            )
            this.maintainers = res.data.data?.content || []
          },
          (msg) => {
            notify({ type: 'error', text: msg })
          }
        )
      },
      async fetchRepositories() {
        fetchRepositoriesServices().then(
          (res) => {
            this.repositories = res.data.data?.content || []
          },
          (msg) => {
            notify({ type: 'error', text: msg })
          }
        )
      },
      async fetchPackages() {
        fetchPackagesServices().then(
          (res) => {
            this.packages = res.data.data?.content || []
          },
          (msg) => {
            notify({ type: 'error', text: msg })
          }
        )
      },
      async setPage(payload: number) {
        const pagination = usePaginationStore()
        pagination.setPage(payload)
        this.fetchMaintainers()
      },
      async setChosenMaintainer(id?: number) {
        this.chosenMaintainer = id
      },
      async updateMaintainer(fields: Map<string, any>) {
        if (this.chosenMaintainer) {
          updatePackageMaintainer(
            this.chosenMaintainer,
            fields
          ).then(
            () => {
              this.fetchMaintainers()
            },
            (msg) => {
              notify({ text: msg, type: 'error' })
            }
          )
        }
      },
      async setFiltration(
        payload: PackageMaintainersFiltration
      ) {
        const pagination = usePaginationStore()
        pagination.setPage(0)
        this.filtration = payload
        this.fetchMaintainers()
      },
      clearFiltration() {
        const { setAllFields } = useObjectActions()
        setAllFields(this.filtration, undefined)
      },
      async clearFiltrationAndFetch() {
        this.clearFiltration()
        this.fetchMaintainers()
      }
      // async editMaintainer(
      //   maintainer: PackageMaintainerDto
      // ) {
      //   updatePackageMaintainerService(
      //     maintainer,
      //     this.chosenMaintainer
      //   ).then(
      //     () => {
      //       notify({
      //         type: 'success',
      //         text: i18n.t(
      //           'notifications.successUpdatePackageManager',
      //           this.chosenMaintainer.user?.name || ''
      //         )
      //       })
      //       this.fetchMaintainers()
      //     },
      //     (msg) => notify({ type: 'error', text: msg })
      //   )
      // }
    }
  }
)
