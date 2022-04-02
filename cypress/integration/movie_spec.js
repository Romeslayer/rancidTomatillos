
describe('Single Movie Page', () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/movies/694919");
  })

  it('User should see the page load with a header with home button', () => {
    cy.get('header')
      .contains('Rancid Tomatillos');

    cy.get('header button')
      .contains('Home');
  })

  it('User should be able to navigate back home' , () => {
    cy.get('button').click();
    cy.url().should('eq', 'http://localhost:3000/movies');
  })

  it('User should see two images and all related information for that one movie', () => {
    cy.get('.backdrop')

    cy.get('.poster')

    cy.get('h2')
    .contains('Money Plane')
  })
})
