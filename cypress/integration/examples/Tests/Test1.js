describe("My first test", function() 
{
    it ('My first test case', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.product').should('have.length',5)
        // filtering products using visible
        cy.get('.product:visible').should('have.length',4)
        //Filtering product using parent-child chaining
        cy.get('.products').find('.product').should('have.length',4)
        // Find the second item in the list
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        // Dynamically iterate through a list and selecting one element
        cy.get('.products').find('.product').each(($el,index,$list) => {
            const productName=$el.find('h4.product-name').text()
            if(productName.includes('Cashews'))
            {
               cy.wrap($el.find('button')).click()

            }

        })
        
    })

    it ('My second test case', function() 
    {
        // in cypress we can assign a commenly used locator in to a variable using as()
        // We can replace the .products with a variable
        //cy.get('.products').find('.product').should('have.length',4)
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        // Assign the cy.get('.products') to a variable 'productList'
        cy.get('.products').as('productList')
        cy.get('@productList').find('.product').should('have.length',4)
        // console.log() is not a cypress command. It will print the message in browser console
        console.log('Brand logo verified');

        cy.get('.brand').should('have.text', 'GREENKART')
        // But cy.log('msg') will print test result page
        cy.log('Brand logo got verified')



    })



})