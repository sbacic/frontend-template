import React from 'react'
import Index from '../pages/index'
import { render, screen } from '@testing-library/react'

describe('pages suite', () => {
  it('index page should work', () => {
    render(<Index />)
    expect(screen.getByText('Create Next App')).toBeTruthy()
  })
})
