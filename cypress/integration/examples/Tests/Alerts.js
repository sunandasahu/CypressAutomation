describe("My Third test suit", function()
{
    it ('Verify radio button', function() 
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('#alertbtn').click()
        //Capturing alert text by firing alert through cypress
        cy.on('window:alert',(str)=> {
            // To compare two strings we use expect('str1).to.equal('str2)
            cy.expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()
        cy.on('window:confirm',(str)=> {
            cy.expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

    })

})