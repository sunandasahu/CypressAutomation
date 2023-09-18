describe("My Third test suit", function() 
{
    it ('Verify Checkbox and Dropdown', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        // Clicking on a checkbox and validating it is checked and also validating the value of the checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // Unchecking a checkbox and validating it is unchecked
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        // Click multiple checkbox in one line and we can specify the checkbox we want to check
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        // radio button

        cy.get('[value="radio3"]').check().should('be.checked').and('have.value', 'radio3')
    })

    



})