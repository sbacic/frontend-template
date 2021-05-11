import React from 'react'
import Index from '../pages/index'
import { render, screen } from '@testing-library/react'
import * as nextRouter from 'next/router'

describe('pages suite', () => {
  it('index page should work with useRouter', () => {
    Object.defineProperty(nextRouter, 'useRouter', {
      value: () => ({ route: '/', query: { name: 'John Smith' } }),
    })

    render(<Index />)
    expect(screen.getByText('Create Next App')).toBeTruthy()
    expect(screen.getByText('John Smith')).toBeTruthy()
  })
})
