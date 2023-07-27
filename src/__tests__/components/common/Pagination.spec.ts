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

import { beforeEach, describe, it, expect } from 'vitest'

import PaginationVue from '@/components/common/Pagination.vue'
import { mount, flushPromises } from '@vue/test-utils'
import { ResizeObserver } from '@/__tests__/config/ResizeObserver'
import { plugins } from '@/__tests__/config/plugins'
import { mocks } from '@/__tests__/config/mocks'
import { createPinia, setActivePinia } from 'pinia'
import { usePagination } from '@/store/pagination'

let wrapper: any
let pagination: any
let numberOfPages: number
const pageButtonsSelector = 'li.v-pagination__item'
const currentPageSelector =
  'li.v-pagination__item--is-active'
const pageSizeSelector = 'input#page-size-input'
const globalConfig = {
  mocks: mocks,
  plugins: plugins
}

beforeEach(async () => {
  setActivePinia(createPinia())
  global.ResizeObserver = ResizeObserver
  numberOfPages = 5
  pagination = usePagination()
  pagination.totalNumber =
    pagination.pageSize * numberOfPages

  wrapper = mount(PaginationVue, {
    global: globalConfig
  })
})

describe('Pagination', () => {
  it('renders properly', () => {
    // Check pagination has nav
    expect(wrapper.find('nav').exists()).toBeTruthy()

    expect(wrapper.find('ul').exists()).toBeTruthy()

    expect(
      wrapper.findAll(pageButtonsSelector).length
    ).toBe(numberOfPages)
  })

  it('Multiple pages', async () => {
    expect(
      wrapper.findAll(pageButtonsSelector).length
    ).toBe(numberOfPages)
  })

  it('Next page', async () => {
    let currentPage = pagination.fetchPage

    expect(wrapper.find(currentPageSelector).text()).toBe(
      pageToString(currentPage)
    )

    await wrapper
      .find('button[arialabel="Next page"]')
      .trigger('click')

    currentPage += 1

    expect(wrapper.find(currentPageSelector).text()).toBe(
      pageToString(currentPage)
    )
  })

  it('Previous page', async () => {
    let currentPage = 2
    pagination.page = currentPage

    await flushPromises()

    expect(wrapper.find(currentPageSelector).text()).toBe(
      pageToString(pagination.fetchPage)
    )

    await wrapper
      .find('button[arialabel="Previous page"]')
      .trigger('click')

    currentPage -= 1
    expect(wrapper.find(currentPageSelector).text()).toBe(
      pageToString(pagination.fetchPage)
    )
  })

  it('Select page 3', async () => {
    expect(wrapper.find(currentPageSelector).text()).toBe(
      '1'
    )

    await wrapper
      .find('button[arialabel="Go to page 3"]')
      .trigger('click')

    expect(wrapper.find(currentPageSelector).text()).toBe(
      '3'
    )

    expect(pagination.fetchPage).toBe(2)
    expect(pagination.page).toBe(3)
  })

  it('Change page size by typing', async () => {
    expect(
      wrapper.find(pageSizeSelector).element.value
    ).toBe(pagination.pageSize.toString())

    const newPageSize = 5
    await wrapper
      .find(pageSizeSelector)
      .setValue(newPageSize.toString())

    await wrapper.find(pageSizeSelector).trigger('blur')

    expect(
      wrapper.find(pageSizeSelector).element.value
    ).toBe(newPageSize.toString())

    expect(
      wrapper.findAll(pageButtonsSelector).length
    ).toBe(Math.ceil(pagination.totalNumber / newPageSize))
  })
})

function pageToString(page: number) {
  return (page + 1).toString()
}
