import { setActivePinia, createPinia } from 'pinia'
import { useStore } from './main'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('should increments', () => {
    const counter = useStore()
    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })

  it('should get random number', async () => {
    const counter = useStore()
    expect(counter.count).toBe(0)
    await counter.random()
    expect(counter.count).toBeGreaterThan(0)
    expect(counter.count).toBeLessThan(101)
  });
})