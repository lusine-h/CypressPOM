import {cartLocators} from "../../loactors/cartLocators";

class CartPage {
    assertCartIsOpened(){
        cy.get(cartLocators.cart).should('exist')
            .and('be.visible')
    }

    assertOnCart(product){
        cy.contains(product).should('exist')
            .and('be.visible')

    }
}

export default CartPage
