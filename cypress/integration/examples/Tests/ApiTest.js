describe("Api testing ", function() 
{
    it ('Api request', function()
    {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name":"learn automation",
            "isbn":"bcd44",
            "aisle":"23s7",
            "author":"john hue"
        }).then(function(response){
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('Msg','successfully added')
            // expect(response.body).to.have.length(500)
        })
    })
})