import 'styles/globals.css'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import 'i18n'

const desktops = [
  {
    name: 'Desktop 1920x1080',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  {
    name: 'Desktop 1366x768',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...desktops,
    },
  },
}
