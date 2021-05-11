import React from 'react'
import { Story, Meta } from '@storybook/react'
import Index from 'pages/index'
import { withNextRouter } from 'storybook-addon-next-router'

export default {
  title: 'Pages/Index',
  component: Index,
  decorators: [
    withNextRouter({
      path: '/',
      asPath: '/',
      query: { name: 'John Smith' },
    }),
  ],
} as Meta

const Template: Story = () => <Index />

export const Primary = Template.bind({})
