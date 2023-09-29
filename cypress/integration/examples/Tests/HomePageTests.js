import HomePageSelectors from "../PageObjects/HomePageSelectors"

const homePageSelector = new HomePageSelectors()

describe ('Home Page', function() {

    before(function(){
        //Getting data from fixture folder
        cy.fixture('example').then(function(data)
        {
        this.data=data
        })

    })

    it('Home page tests', function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePageSelector.getNameEditBox().type(this.data.name)
        homePageSelector.getGender().select(this.data.gender)
        homePageSelector.getTwowayDataBinding().should('have.value', this.data.name)
        homePageSelector.getEntrepreneurRadioButton().should('be.disabled')

    })
    

})