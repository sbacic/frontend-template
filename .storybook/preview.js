import 'styles/globals.css'
import * as nextImage from 'next/image'
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

// next/image stub
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => (
    <div
      style={{
        display: 'block',
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        boxSizing: 'border-box',
        margin: 0,
      }}
    >
      <img {...props} />
    </div>
  ),
})

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
