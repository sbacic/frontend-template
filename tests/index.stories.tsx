import React from 'react'
import { Story, Meta } from '@storybook/react'
import Index from 'pages/index'

export default {
  title: 'Pages/Index',
  component: Index,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = () => <Index />

export const Primary = Template.bind({})
