import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Component1 from './Component1.vue'

describe('Component1', () => {
    let wrapper
    beforeEach(() => {
        const wrapper = mount(Component1, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })
});
