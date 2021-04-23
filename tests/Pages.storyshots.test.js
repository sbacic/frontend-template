import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import { viewports } from './viewports'

console.warn = () => {
  // addon-storyshots throws a bunch of warnings if we try
  // to call initStoryshots more than once per test run (but otherwise works fine)
  // so we need to silence it
}

const beforeScreenshot = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 100)
  )
}

viewports.forEach((viewport) => {
  initStoryshots({
    suite: 'Pages',
    storyKindRegex: /^Pages/,
    test: imageSnapshot({
      customizePage: (page) => page.emulate(viewport),
      beforeScreenshot,
    }),
  })
})
