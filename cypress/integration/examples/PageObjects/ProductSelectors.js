class ProductSelectors {

    getCheckoutButton() {
        return cy.get('.btn-primary')
    }

    getFinalCheckout() {
        return cy.contains('Checkout')
    }

    getCountryEditBox() {
        return cy.get('#country')
    }

    getSuggestion() {
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckbox() {
        return cy.get('.checkbox.checkbox-primary')
    }

    getPurchaseButton() {
        return cy.get('.ng-untouched > .btn')
    }

    getSuccessMsg() {
        return cy.get('.alert.alert-success')
    }


}
export default ProductSelectors;