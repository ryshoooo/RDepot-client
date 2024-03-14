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
  beforeAll,
  vi
} from 'vitest'

import { mount } from '@vue/test-utils'
import { plugins } from '@/__tests__/config/plugins'
import { mocks } from '@/__tests__/config/mocks'
import { ResizeObserver } from '@/__tests__/config/ResizeObserver'
import { createPinia, setActivePinia } from 'pinia'
import Edit from '@/components/repositories/Edit.vue'
import { useRepositoryStore } from '@/store/repositories'
import { PythonRepositoryDto } from '@/openapi'
import { nextTick } from 'vue'

let wrapper: any
const globalConfig = {
  mocks: mocks,
  plugins: plugins
}

let repositoryStore: any

beforeAll(() => {
  global.ResizeObserver = ResizeObserver
})

describe('Edit Repository', () => {
  beforeEach(async () => {
    setActivePinia(createPinia())
    repositoryStore = useRepositoryStore()
    wrapper = mount(Edit, {
      global: globalConfig,
      props: {
        generateManual: true,
        technology: 'R'
      }
    })
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('all fields are correctly displayed', () => {
    expect(
      wrapper.findAll('.v-field__field').length
    ).toEqual(4)
    expect(wrapper.find('#edit-name')).toBeTruthy()
    expect(
      wrapper.find('#edit-publication-uri')
    ).toBeTruthy()
    expect(
      wrapper.find('#edit-server-address')
    ).toBeTruthy()
    expect(wrapper.find('#edit-technology')).toBeTruthy()
  })

  it('technology field is disabled', () => {
    expect(
      wrapper.find('#edit-technology').isDisabled()
    ).toBeTruthy()
  })

  it('other fields are not disabled', () => {
    expect(
      wrapper.find('#edit-name').isDisabled()
    ).toBeFalsy()
    expect(
      wrapper.find('#edit-publication-uri').isDisabled()
    ).toBeFalsy()
    expect(
      wrapper.find('#edit-server-address').isDisabled()
    ).toBeFalsy()
  })
})
