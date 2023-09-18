describe("Web Table handle ", function() 
{
    it ('Verify table element', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        // Cypress does not support mouse hover. So we need to use Jquery method show() 
        //to display any hidden element inside an element
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click()
        cy.url().should('not.have','top')


        // We can click a hidden element in the dom without mouse hovering on the parent element by forcing 
        // cypress as true
        cy.contains('Top').click({force : true})
        cy.url().should('include', 'top')


       

    })

})