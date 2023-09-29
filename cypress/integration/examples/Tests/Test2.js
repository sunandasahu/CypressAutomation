describe("My Second test suit", function() 
{
    it ('Verify the cart and checkout', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        // Searching in the searchbox with 'ca'
        cy.get('.search-keyword').type('ca')
        // Dynamically iterate through a list and selecting one element
        cy.get('.products').find('.product').each(($el,index,$list) => {
            const productName=$el.find('h4.product-name').text()
            if(productName.includes('Cashews'))
            {
               cy.wrap($el.find('button')).click()

            }

        })
        cy.get('.cart-icon > img').click()
    
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
    })

    



})