describe('My First Test', () => {
  it('Visits home page', () => {
    cy.visit('/')
  })

  it('add to cart', () => {
    cy.get(':nth-child(1) > div > .button_to > .btn').click({ force: true })
    cy.get('.end-0 > .nav-link').contains('My Cart (1)')

    
    
  })

})