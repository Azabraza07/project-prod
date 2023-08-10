import { lazy } from 'react'

export const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        resolve(import('./MainPage'))
      }, 1500)
    })
)
