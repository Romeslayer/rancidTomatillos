describe('dashBoard', () => {
     beforeEach(() => {
          cy.visit('http://localhost:3000/movies');
     });

     it('User should see the page load with a dashboard containing a header with title and search bar', () => {
       cy.get('header')
         .contains('Rancid Tomatillos')

       cy.get('.search-bar')  
     })

     it('User should be able to type a title in the search bar', () => {
       cy.get('.search-bar').type('AVA').should('have.value', 'AVA')
     })

     it('User should see a movie section displaying all movie options', () => {
          cy.get('.movies-section')
          .first(`a`)
     })

     it('User should be able to click on a movie and be redirected', () => {
          cy.get('div[id=694919] img').click()
     })
})