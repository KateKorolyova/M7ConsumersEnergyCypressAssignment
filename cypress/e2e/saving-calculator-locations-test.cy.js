///reference types = "Cypress"?>

import { data } from '../fixtures/params.json'

import { date } from '../fixtures/cityParams.json'

const province_placeholder = '#step1col2 > :nth-child(1) > :nth-child(1) > .Slcst'

const city_placeholder = ':nth-child(1) > :nth-child(2) > .Slcst'

describe('saving calculator location tests', () => {

  it('navigate to the saving calculator page', () => {

    cy.visit('https://consumersenergymanagement.ca/savings-calculator/')

  })

  it('verify all canadian provinces are on the list and can be chosen', () => {

    data.forEach(element => {
      cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
      cy.get(province_placeholder).select(element.state)
      cy.get('#step1box').click()

    })

  })

    it('verify each province has at least one city to choose - correct spelling', () => {

      cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
      cy.get(province_placeholder).select(data[0].state)
      cy.get(city_placeholder).select('Toronto')
      cy.get(province_placeholder).select(data[1].state)
      cy.get(city_placeholder).select('Montreal')
      cy.get(province_placeholder).select(data[2].state)
      cy.get(city_placeholder).select('Halifax')
      cy.get(province_placeholder).select(data[7].state)
      cy.get(city_placeholder).select('Calgary')
      cy.get(province_placeholder).select(data[9].state)
      cy.get(city_placeholder).select('St Johns')

    })
    it('verify each province has at least one city to choose - wrong spelling or absence of the element', () => {

      cy.visit('https://consumersenergymanagement.ca/savings-calculator/')
      
      cy.get(province_placeholder).select(data[3].state)
      cy.get(city_placeholder).select('Fredericton')
      cy.get(province_placeholder).select(data[4].state)
      cy.get(city_placeholder).select('Winnipeg')
      cy.get(province_placeholder).select(data[5].state)
      cy.get(city_placeholder).select(' ')
      cy.get(province_placeholder).select(data[6].state)
      cy.get(city_placeholder).select('Regina')
      cy.get(province_placeholder).select(data[8].state)
      cy.get(city_placeholder).select(' ')
     
    })
  
  })