import { lazy } from 'react'

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        resolve(import('./AboutPage'))
      }, 1500)
    })
)
