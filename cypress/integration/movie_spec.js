describe('Single Movie Page', () => {

  beforeEach(() => {

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 200,
      body: {
        movie: {
          id: 694919,
          title: "Money Plane",
          poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          release_date: "2020-09-29",
          overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
          genres: [
            "Action"
          ],
          budget: 0,
          revenue: 0,
          runtime: 82,
          tagline: "",
          average_rating: 7.428571428571429
        }
      }
    })
    cy.visit('http://localhost:3000/movies/694919');
  })

  it('User should see the page load with a header with home button', () => {
    cy.get('header')
      .contains('Rancid Tomatillos');

    cy.get('header button')
      .contains('Home');
  })

  it('User should be able to navigate back home', () => {
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
