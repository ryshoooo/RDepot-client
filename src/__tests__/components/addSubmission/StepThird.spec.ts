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
import { useSubmissionStore } from '@/store/submission'
import StepThirdVue from '@/components/addSubmission/StepThird.vue'

let wrapper: any
const globalConfig = {
  mocks: mocks,
  plugins: plugins
}

var files: File[] = [
  {
    name: 'A3_1.0.0.tar.gz',
    type: 'application/gzip'
  } as File,
  {
    name: 'abind_1.4-5.tar.gz',
    type: 'application/gzip'
  } as File
]

let submission_store: any

beforeAll(() => {
  global.ResizeObserver = ResizeObserver
})

beforeEach(async () => {
  setActivePinia(createPinia())
  submission_store = useSubmissionStore()
  submission_store.setPackages(files)
  submission_store.setRepository({
    id: 1,
    name: 'repository 1'
  })
  wrapper = mount(StepThirdVue, {
    global: globalConfig
  })
})

describe('Add submission - step third', () => {
  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('back button exists', () => {
    const button = wrapper.find('#backbutton')
    expect(button.exists()).toBeTruthy()
  })

  it('go back if back button is clicked', async () => {
    const button = wrapper.find('#backbutton')
    expect(button.exists()).toBeTruthy()
    await button.trigger('click')
    expect(wrapper.emitted().next[0]).toEqual([2])
  })

  it('submit button exists', () => {
    console.log(wrapper.html())

    const button = wrapper.find('#submitbutton')
    expect(button.exists()).toBeTruthy()
  })

  it('submit only accpeted pacakges', async () => {
    wrapper.vm.accepted_packages = [0, 1]
    const button = wrapper.find('#submitbutton')
    expect(button.exists()).toBeTruthy()
    await button.trigger('click')
    expect(submission_store.packages.length).toEqual(2)
  })
})
