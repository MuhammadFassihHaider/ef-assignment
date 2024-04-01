/// <reference types="cypress" />
import { BasicE2ESelectors, BasicE2EConfig } from "./utils"
describe('REST Country APi', () => {
  beforeEach(() => {
    cy.visit(BasicE2EConfig.url)
  })

  it('Should filter for country through search', () => {
    const country = 'Afgha'

    cy.get(BasicE2ESelectors.filterInput).type(`${country}`)

    cy.get(`[data-test*=${country}]`)
      .should('have.length', 1)
  })

  it('Should filter for country through dropdown', () => {
    const firstAfricanCountry = "Algeria"
    cy.get(BasicE2ESelectors.filterDropdown.trigger).click()
    cy.get(BasicE2ESelectors.filterDropdown.itemsContainer).children().first().click()
    cy.get(`[data-test*=${firstAfricanCountry}]`)
      .should('have.length', 1)
  })

  it('Should filter for country through dropdown and search', () => {
    const country = "Nigeria"
    cy.get(BasicE2ESelectors.filterDropdown.trigger).click()
    cy.get(BasicE2ESelectors.filterDropdown.itemsContainer).children().first().click()
    cy.get(BasicE2ESelectors.filterInput).type(`${country}`)
    cy.get(`[data-test*=${country}]`)
      .should('have.length', 1)
  })

  it('Should click on country to display details', () => {
    const country = "Nigeria"
    cy.get(BasicE2ESelectors.filterDropdown.trigger).click()
    cy.get(BasicE2ESelectors.filterDropdown.itemsContainer).children().first().click()
    cy.get(BasicE2ESelectors.filterInput).type(`${country}`)
    cy.get(`[data-test*=${country}]`)
      .should('have.length', 1)
      .click()
    cy.get("img").should(($img) => {
      $img.each((_, img) => {
        expect(img).to.have.attr('src', "https://flagcdn.com/ng.svg")
      })
    })
  })

})
