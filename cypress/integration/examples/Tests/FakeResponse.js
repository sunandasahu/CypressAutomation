describe("Intercept test", function() 
{
    it ('Modify response using intercept', function()
    {


cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

cy.intercept({
    method:'GET',
    url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
},
              {
                statusCode:200,
                // moking the response to get only one response
                body:[{
                        "book_name": "RestAssured with Java",
                        "isbn": "BSG",
                        "aisle": "2302" }]             
              }).as('bookRetrival')
              cy.get("button[class='btn btn-primary']").click()
              cy.wait('@bookRetrival').then(({request,response})=>
              {
                //validating the response in the ui with api response
                cy.get('tr').should('have.length',response.body.length+1)

              })
              
              cy.get('p').should('have.text', 'Oops only 1 Book available')
            })

            })