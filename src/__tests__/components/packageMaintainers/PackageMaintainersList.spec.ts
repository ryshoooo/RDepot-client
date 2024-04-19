/*
 * R Depot
 *
 * Copyright (C) 2012-2024 Open Analytics NV
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

import {
  describe,
  it,
  expect,
  beforeEach,
  beforeAll
} from 'vitest'

import { mount } from '@vue/test-utils'
import { plugins } from '@/__tests__/config/plugins'
import { mocks } from '@/__tests__/config/mocks'
import { ResizeObserver } from '@/__tests__/config/ResizeObserver'
import { createPinia, setActivePinia } from 'pinia'
import { usePackageMaintainersStore } from '@/store/package_maintainers'
import PackageMaintainersListVue from '@/components/packageMaintainers/PackageMaintainersList.vue'
import PackageMaintainerRow from '@/components/packageMaintainers/PackageMaintainerRow.vue'
import packageMaintainers from '@/__tests__/config/mockData/packageMaintainers.json'
import me from '@/__tests__/config/mockData/me.json'
import { useMeStore } from '@/store/me'

let wrapper: any
let packageMaintainersStore: any
let meStore: any

const globalConfig = {
  mocks: mocks,
  plugins: plugins
}

beforeAll(() => {
  global.ResizeObserver = ResizeObserver
  setActivePinia(createPinia())
  packageMaintainersStore = usePackageMaintainersStore()
  meStore = useMeStore()
  meStore.me = me.data
})

beforeEach(async () => {
  wrapper = mount(PackageMaintainersListVue, {
    global: globalConfig
  })

  packageMaintainersStore.maintainers =
    packageMaintainers.data.content
})

describe('Package Maintainers - list', () => {
  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('displays one row for each maintainer + one for title', async () => {
    const packageMaintainersFromWrapper =
      wrapper.findAllComponents(PackageMaintainerRow)

    expect(packageMaintainersFromWrapper.length).toEqual(
      packageMaintainers.data.content.length + 1
    )
  })
})
