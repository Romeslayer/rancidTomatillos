
describe("Error page", () => {
  const errorURL = 'http://localhost:3000/error'

  beforeEach(() => {
    cy.visit('http://localhost:3000/movies/')

  })

  it("User should be redirected to the error page if they type a bad url", () => {
    cy.visit('http://localhost:3000/movies/hotgarbage')

    cy.url().should('eq', errorURL)
  })

  it('User should be able to navigate home after being redirected to the error page', () => {
    cy.visit(errorURL)
      .get('button')
        .click()
      .url().should('eq', 'http://localhost:3000/movies')
  })

  it('User should be redirected to the error page if main page fails to load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: {
        message: 'Something went wrong with the server'
      }
    })
      cy.visit('http://localhost:3000/movies/')
  })

  it('User should be redirected to the error page if a single movie page fails to load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 500,
      body: {
        message: 'Something went wrong with the server'
      }
    })
      cy.visit('http://localhost:3000/movies/694919');
  })
})
