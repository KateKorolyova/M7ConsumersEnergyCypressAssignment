///reference types = "Cypress"?>

import {data1} from '../fixtures/currentHeatParams.json'

import {data2} from '../fixtures/newHeatParams.json'

describe('saving calculator heat price calculations tests', () => {

  it('navigate to the saving calculator page', () => {

    cy.visit('https://consumersenergymanagement.ca/savings-calculator/')

  })

  it('verify each Current Heating type change price in Current Heating Cost column', () => {

    data1.forEach(element => {
      cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
      cy.get('#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst').select('Ontario')
      cy.get(':nth-child(1) > :nth-child(2) > .Slcst').select('Toronto')
      cy.get(':nth-child(6) > :nth-child(2) > .Slcst').select('2')
      cy.get(':nth-child(6) > :nth-child(3) > .Slcst').select('4000')
      cy.get('.Txtss').type(25)
      cy.get('#heattype').select(element.heat)
      cy.expect('#CHC').to.change
    })

})
it('verify each New Heating type change price in New Heating Cost column', () => {

  data2.forEach(element => {
    cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
    cy.get('#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst').select('Ontario')
    cy.get(':nth-child(1) > :nth-child(2) > .Slcst').select('Toronto')
    cy.get(':nth-child(6) > :nth-child(2) > .Slcst').select('2')
    cy.get(':nth-child(6) > :nth-child(3) > .Slcst').select('4000')
    cy.get('.Txtss').type(25)
    cy.get(':nth-child(3) > p > .Slcst').select(element.heating)
    cy.expect('#NHC').to.change
  })

})
it('verify that when new and old types are chosen, savings are displayed', () => {

  
    cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
    cy.get('#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst').select('Ontario')
    cy.get(':nth-child(1) > :nth-child(2) > .Slcst').select('Toronto')
    cy.get(':nth-child(6) > :nth-child(2) > .Slcst').select('2')
    cy.get(':nth-child(6) > :nth-child(3) > .Slcst').select('4000')
    cy.get('.Txtss').type(25)
    cy.get('#heattype').select('Natural Gas')
    cy.get(':nth-child(3) > p > .Slcst').select('Oil')
    cy.get('#AHS').should('be.visible')
  })

  it('verify that when new and old types are chosen, total savings are updated', () => {

    cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
    cy.get('#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst').select('Ontario')
    cy.get(':nth-child(1) > :nth-child(2) > .Slcst').select('Toronto')
    cy.get(':nth-child(6) > :nth-child(2) > .Slcst').select('2')
    cy.get(':nth-child(6) > :nth-child(3) > .Slcst').select('4000')
    cy.get('.Txtss').type(25)
    cy.get('#heattype').select('Natural Gas')
    cy.get(':nth-child(3) > p > .Slcst').select('Oil')
    cy.expect('#VTAS').to.change
  })

})