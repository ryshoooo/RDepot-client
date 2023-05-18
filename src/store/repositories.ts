import {
  EntityModelRRepositoryDto,
  EntityModelRepositoryDto
} from '@/openapi'
import { defineStore } from 'pinia'
import {
  RepositoriesFiltration,
  defaultValues
} from '@/models/Filtration'
import { fetchRepositoriesServices } from '@/services'
import { usePaginationStore } from './pagination'
import { updateRepository } from '@/services/repository_services'
import { createRepository } from '@/services/repository_services'
import { useUtilities } from '@/composable/utilities'
import { repositoriesFiltrationLabels } from '@/maps/Filtration'

const { deepCopy } = useUtilities()

interface State {
  repositories: EntityModelRepositoryDto[]
  filtration: RepositoriesFiltration
  chosenRepository: EntityModelRRepositoryDto
}

export const useRepositoryStore = defineStore(
  'repository_store',
  {
    state: (): State => {
      return {
        repositories: [],
        filtration: defaultValues(RepositoriesFiltration),
        chosenRepository: {}
      }
    },
    actions: {
      async fetchPageOfRepositories(
        page: number,
        pageSize: number = 8
      ) {
        const pageData = await this.fetchData(
          page,
          pageSize,
          defaultValues(RepositoriesFiltration),
          false
        )
        return pageData
      },
      async fetchRepositories() {
        const pagination = usePaginationStore()
        const pageData = await this.fetchData(
          pagination.page,
          pagination.pageSize,
          this.filtration
        )
        pagination.setPage(pageData.page)
        pagination.setTotalNumber(pageData.totalNumber)
      },
      async fetchData(
        page: number,
        pageSize: number,
        filtration: RepositoriesFiltration,
        showProgress: boolean = true
      ) {
        const [repositories, pageData] =
          await fetchRepositoriesServices(
            filtration,
            page,
            pageSize,
            showProgress
          )
        this.repositories = repositories
        return pageData
      },
      async fetchRepository(name: string) {
        const [repository] =
          await fetchRepositoriesServices(
            {
              name: name
            } as RepositoriesFiltration,
            undefined,
            undefined,
            true
          )
        return repository
      },
      async softDelete() {
        if (this.chosenRepository) {
          this.updateRepository({ deleted: true })
        }
      },
      async updateRepository(
        newValues: Partial<EntityModelRRepositoryDto>
      ) {
        const newRepository = {
          ...deepCopy(this.chosenRepository),
          ...newValues
        }
        await updateRepository(
          this.chosenRepository,
          newRepository
        ).then((success) => {
          if (success) this.fetchRepositories()
        })
      },
      setChosenRepository(id: number | undefined) {
        var flag = true
        this.repositories.forEach((repository) => {
          if (repository.id == id) {
            this.chosenRepository = repository
            flag = false
          }
        })
        if (flag) {
          this.chosenRepository = {}
        }
      },
      async setFiltration(payload: RepositoriesFiltration) {
        const pagination = usePaginationStore()
        pagination.setPage(0)
        if (
          RepositoriesFiltration.safeParse(payload).success
        ) {
          this.filtration =
            RepositoriesFiltration.parse(payload)
        }
        await this.fetchRepositories()
      },
      setFiltrationByName(payload: string | undefined) {
        this.clearFiltration()
        this.filtration.name = payload
      },
      clearFiltration() {
        const pagination = usePaginationStore()
        pagination.setPage(0)
        this.filtration = defaultValues(
          RepositoriesFiltration
        )
      },
      async clearFiltrationAndFetch() {
        this.clearFiltration()
        await this.fetchRepositories()
      },
      async createRepository(
        newRepository: EntityModelRepositoryDto
      ) {
        await createRepository(newRepository)?.then(
          async (success) => {
            if (success) await this.fetchRepositories()
          }
        )
      },
      getLabels() {
        return repositoriesFiltrationLabels
      }
    }
  }
)
