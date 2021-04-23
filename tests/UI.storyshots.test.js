import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

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

initStoryshots({
  suite: 'UI',
  storyKindRegex: /^UI/,
  test: imageSnapshot({
    beforeScreenshot,
  }),
})
