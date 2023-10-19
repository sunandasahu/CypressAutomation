describe("Intercept test", function() 
{
    it ('Modify response using intercept', function()
    {

//cy.intercept(method, url, routeHandler) syntax for request intercept
cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
(req)=>
{
    req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
    req.continue((res)=>
    {
      // We should get a 403 in a real time webpage, as we don't have authorization
      //expect(res.statusCode).to.equal(403)
    })
}).as('dummyUrl')
cy.get("button[class='btn btn-primary']").click()
cy.wait('@dummyUrl')

    })

    
})