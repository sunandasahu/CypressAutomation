describe("My Third test suit", function() 
{
    it ('Verify Checkbox and Dropdown', function()
    {
        // Selecting from static dropdown 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('select').select('option2').should('have.value', 'option2')

        // Selecting from dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.wait(500)

        cy.get('.ui-menu-item-wrapper').each(($el,index,$list) => {
        
           if($el.text()==='India')
           {
            cy.wrap($el).click()

           }
            
        })
        cy.get('#autocomplete').should('have.value', 'India')

    })

    



})