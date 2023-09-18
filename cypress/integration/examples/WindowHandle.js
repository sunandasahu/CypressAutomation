describe("Child window ", function() 
{
    it ('Switch to new window', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        //Opening in a new tab
        //cy.get('#opentab').click()
        //Opening in the same window
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        // If the new tab is also having a new domain we need to change the original browser to the new one
        cy.origin('https://www.qaclickacademy.com', () => {

            cy.get("#navbarSupportedContent a[href*='about']").click()
            cy.get('.mt-50 h2').should('contain','QAClick Academy')

       })
       
       

    })

})
