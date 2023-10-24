describe("JWT Token", function () {
    it('Is logged in through local storage', function () {
        cy.loginApi().then(function () {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'))
                }

            })
        })

        //cy.get ('card-body button:last-of-type').eq(1).click()
        cy.get(':nth-child(1) > .card > .card-body > .w-10').click();
        cy.get("[routerlink*='cart']").click();
        //cy.contains('Checkout').click();
        cy.wait(10000)
        cy.get('.btn-primary').contains('Checkout');
        cy.get("[placeholder*='Country']").type('ind')
        cy.get('.ta-results button').each(($el,index,$list) => {
           // const countryName=$el.find('.list-group').text()
            if($el.text()===" India"){
                console.log("Found country india----")
                cy.wrap($el).click()
            }
        })
        cy.contains('.action_submit').click();
        cy.wait(2000)
        cy.get(".order-summary button").click();
        
    })



})