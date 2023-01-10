///reference types = "Cypress"?>

describe('consumer energy sanity test', () => {

  it('navigate to the main page', () => {

    cy.visit('https://consumersenergymanagement.ca/')

  })

  it('verify the Home tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-31 > a').should("have.text", "Home")

  })

  it('verify the About tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-36 > a').click()
    cy.get('h1').should("have.text", "About Consumers Energy Management Inc.")

  })

  it('verify the Products tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-32 > [href="products/"]').click()
    cy.get('h1').should("have.text", "Products")

  })

  it('verify the Services tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-34 > [href="services/"]').click()
    cy.get('h1').should("have.text", "Services")

  })

  it('verify the Tools tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-35 > [href="tools-resources/"]').click()
    cy.get('h1').should("have.text", "Tools & Resources")

  })

  it('verify the Promotions tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-673 > a').click()
    cy.get('h1').should("have.text", "Promotions")

  })

  it('verify the Careers tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-1589 > a').click()
    cy.get('h1').should("have.text", "Careers")

  })

  it('verify the Blog tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-1725 > a').click()
    cy.get('h1').should("have.text", "Blog")

  })

  it('verify the FAQs tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-1727 > a').click()
    cy.get('h1').should("have.text", "Frequently Asked Questions")

  })

  it('verify the Contact tab', () => {

    cy.visit('https://consumersenergymanagement.ca/')
    cy.get('#menu-item-1726 > a').click()
    cy.get('h1').should("have.text", "Contact Us")

  })

})