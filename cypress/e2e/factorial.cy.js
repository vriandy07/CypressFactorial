/// <reference types="cypress-xpath" />

describe('Prospace Factorial Calculator', () => {
  beforeEach(() => { 
    cy.visit('http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/')

    // Clear cookies and local storage before each test  
    cy.clearCookies()
    cy.clearLocalStorage()
    // Do a hard reload to clear the cache  
    cy.reload(true)
  })


  it('TC_CALCULATE_001 - Verify success enter an integer number', () => {
    cy.get('#number').type('6').should('have.value', '6')
  })

  it('TC_CALCULATE_002 - Verify success calculate factorial', () => {
    cy.get('#number').type('6').should('have.value', '6')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 6 is: 720')
  })

  it('TC_CALCULATE_003 - Verify failed calculate without enter an integer number', () => {
    cy.get('#getFactorial').click()
    cy.contains('Please enter an integer')
  })

  it('TC_CALCULATE_004 - Verify failed calculate not an integer number', () => {
    cy.get('#number').type('A').should('have.value', 'A')
    cy.get('#getFactorial').click()
    cy.contains('Please enter an integer')
  })

  it('TC_CALCULATE_005 - Verify failed Calculate negative number', () => {
    cy.get('#number').type('-6').should('have.value', '-6')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of').should('not.exist')
  })

  it('TC_CALCULATE_006 - Verify click on Terms and Conditions', () => {
    cy.xpath('//*[text()="Terms and Conditions"]').click()
    cy.url().should('contain','/terms');
  })

  it('TC_CALCULATE_007 - Verify click on Privacy', () => {
    cy.xpath('//*[text()="Privacy"]').click()
    cy.url().should('contain','/privacy');
  })


})