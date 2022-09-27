describe('My First Test', () => {
  it('Visits home page', () => {
    cy.visit('/')
  })

  it('goes to product detail page', () => {
   
    cy.get(':nth-child(1) > a > img').click()
    cy.get('.product-detail').should('be.visible')
    
  
  })

})