# VRI-Cypress-Factorial-Automation

## Project Description ##

The Factorial Calculator is In Mathematics, factorial is an important function, which is used to find how many ways things can be arranged or the ordered set of numbers. The well known interpolating function of the factorial function was discovered by Daniel Bernoulli. The factorial concept is used in many mathematical concepts such as probability, permutations and combinations, sequences and series, etc. In short, a factorial is a function that multiplies a number by every number below it till 1. For example, the factorial of 3 represents the multiplication of numbers 3, 2, 1, i.e. 3! = 3 × 2 × 1 and is equal to 6.

*This is a Cypress project using Visual Studio for testing automation of the factorial calculator app by Pro Space.*


## Prerequisites ##

Before running this project, make sure to have the following installed:

   - Visual Studio
   - Cypress
   - Google Chrome or Firefox
   - Node.js

 You can follow the instructions here [Cypress Installing Guide](https://docs.cypress.io/guides/getting-started/installing-cypress)
 
 ## Tests ##

This is the set up before the test

```
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
  
```
![image](https://user-images.githubusercontent.com/39895518/233440515-52dd5f6b-7650-4d86-9d70-d5b376a91294.png)

Explanation:

In Cypress to able use Xpath, we need to install the plugin first, you can follow the instruction here the [Xpath Installing Guide](https://www.programsbuzz.com/article/cypress-xpath-plugin).


The following tests have been automated:

   - Prospace Factorial Calculator
     - TC_CALCULATE_001 - Verify success enter an integer number
       > In the Prospace Factorial Calculator test case **TC_CALCULATE_001 - Verify success enter an integer number** I want to verify when click on the 'Enter an Integer' field is not disabled and able to enter an Integer number.
       ```
       it('TC_CALCULATE_001 - Verify success enter an integer number', () => {
        cy.get('#number').type('6').should('have.value', '6')
       })
       ```
       
  - Prospace Factorial Calculator
    - TC_CALCULATE_002 - Verify success calculate factorial
      > In the Prospace Factorial Calculator **TC_CALCULATE_002 - Verify success calculate factorial** I want to verify success to enter an integer number and calculate factorial, then as a result in the page will display "The factorial of X is: xxx".
       ```
       it('TC_CALCULATE_002 - Verify success calculate factorial', () => {
         cy.get('#number').type('6').should('have.value', '6')
         cy.get('#getFactorial').click()
         cy.contains('The factorial of 6 is: 720')
       })
       ```
       
  - Prospace Factorial Calculator
    - TC_CALCULATE_003 - Verify failed calculate without enter an integer number
      > In the Prospace Factorial Calculator **TC_CALCULATE_003 - Verify failed calculate without enter an integer number** I want to verify failed to calculate when the Enter an Integer field is empty, then as a result in the page will display "Please enter an integer".
       ```
       it('TC_CALCULATE_003 - Verify failed calculate without enter an integer number', () => {
         cy.get('#getFactorial').click()
         cy.contains('Please enter an integer')
       }) 
