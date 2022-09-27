describe('My First Test', () => {
  it('Visits home page', () => {
    cy.visit('/')
  })

  it('goes to product detail page', () => {
    cy.get('#navbarDropdownAdmin').click()
    cy.get(':nth-child(1) > a > img').click()
    cy.get('.product-detail').should('be.visible')
    
  
  })


  // it("There is products on the page", () => {
  //   cy.get(".products article").should("be.visible");
    
  // });

  // it("There is 2 products on the page", () => {
  //   cy.get(".products article").should("have.length", 2);
  // });
})