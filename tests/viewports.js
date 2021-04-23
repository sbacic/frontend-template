import { devices } from 'puppeteer'

const desktopUA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36'
const desktops = [
  {
    name: 'Desktop 1920x1080',
    userAgent: desktopUA,
    viewport: {
      width: 1920,
      height: 1080,
      isLandscape: true,
    },
  },
  {
    name: 'Desktop 1366x768',
    userAgent: desktopUA,
    viewport: {
      width: 1366,
      height: 768,
      isLandscape: true,
    },
  },
]

export const viewports = [...desktops, devices['iPhone 6'], devices['iPad']]
