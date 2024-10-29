import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import {constants, productLocators} from "../../loactors/productLocators";


describe('GreenKart product page', () => {

    it('Test adding product to the cart', () => {
        const productPage = new ProductPage()
        const cartPage = new CartPage()

        productPage.open()
        productPage.addCount(constants.brocolli)
        productPage.addCount(constants.brocolli)
        productPage.addCount(constants.brocolli)
        productPage.checkCount(constants.brocolli,'4')
        productPage.addProductToCart(constants.brocolli)
        productPage.clickOn(productLocators.cartIcon)
        cartPage.assertCartIsOpened()
        cartPage.assertOnCart(constants.brocolli)
    })
})
