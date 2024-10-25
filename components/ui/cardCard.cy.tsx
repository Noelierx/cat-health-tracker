import React from 'react'
import { Card } from './card'
import 'cypress-axe'

describe('<Card />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Card />)
  })
})