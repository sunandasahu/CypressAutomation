describe("Cypress framework", function() {

    it("Starting framework", function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]:nth-child(2)').type('susan')
        cy.get('select').select('Female')

    })

})