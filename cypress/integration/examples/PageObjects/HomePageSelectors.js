class HomePageSelectors

{
    getNameEditBox() {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getEmailEditBox() {
        return cy.get('input[name= "email"])')
    }

    getPasswordEditBox() {
        return cy.get('#exampleInputPassword1')
    }

    getGender() {
        return cy.get('select')
    }

    getDateOfBirthEditBox() {
        return cy.get('input[name="bday"]')

    }

    getEntrepreneurRadioButton() {
        return cy.get('#inlineRadio3')
    }

    getTwowayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getShopLink() {
        return cy.get(':nth-child(2) > .nav-link')
    }

    
}
export default HomePageSelectors;