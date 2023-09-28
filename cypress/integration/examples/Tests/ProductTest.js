import ProductSelectors from "../PageObjects/ProductSelectors";
import HomePageSelectors from "../PageObjects/HomePageSelectors"

 const productSelectors = new ProductSelectors()
 const homePageSelector = new HomePageSelectors()

 describe ('Product page', function() {

    before(function(){

    cy.fixture('example').then(function(data)
    {
    this.data=data
    })
})

    it('Home page tests', function() {

        

        cy.visit(Cypress.env('url')+"/angularpractice/")

        homePageSelector.getShopLink().click()

        this.data.productName

        this.data.productName.forEach((element) =>
        cy.selectProduct(element)
        )
        //Clicking on 1st checkout button
        productSelectors.getCheckoutButton().click({force: true})
        // Verifying total price
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
            var price = $el.text()
            var res = price.split(' ')
            res=res[1].trim()
            sum= Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
        })

        // Total price
        cy.get('tr td:nth-child(5) strong').then(function(element){
            var textValue = element.text()
            var totalValue= textValue.split(' ')
            const finalPrice= totalValue[1].trim()
            expect(Number(finalPrice)).to.equal(sum)
        })
        

        productSelectors.getFinalCheckout().click({force : true})
        Cypress.config('defaultCommandTimeout',8000)
        productSelectors.getCountryEditBox().type('India')
        
        //productSelectors.getSuggestion().click()
        productSelectors.getCheckbox().click()
        productSelectors.getPurchaseButton().click()
         cy.get('.alert').then(function(element){
            const successmsg = element.text()
            expect(successmsg.includes("Success")).to.be.true
         })
       

        

    })


 })