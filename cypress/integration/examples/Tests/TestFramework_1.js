/// <reference types='cypress' />

describe('Cypress framework', function() {

    before(function(){
        //Getting data from fixture folder
        cy.fixture('example').then(function(data)
        {
        this.data=data
        })

    })
    

    it('Starting framework', function() {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        // Sending test to a input box from data folder
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        // Checking the minimum length of indut text field 
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength','2')
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        // Checking the radio button is dissabled
        cy.get('#inlineRadio3').should('be.disabled')

        // We can use cy.pause() or cy.debug to pause test run and debug
        //cy.pause()

        // Automate shop page
        //clicking on Shop link
        cy.get(':nth-child(2) > .nav-link').click()

        //Finding a specific product using customized cypress function.
        // We can keep customized function in command.js folder and call that function here
        //cy.selectProduct(this.data.productName)

        // how to iterate through an array of multiple element 
        this.data.productName

        this.data.productName.forEach((element) =>
        cy.selectProduct(element)
        )
        // Clicking on checkout button
        cy.get('.btn-primary').click()
        cy.get('#exampleInputEmail1').should('have.value','1')





    })

})