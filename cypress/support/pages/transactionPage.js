const messages = require('../../fixtures/messages.json')
const data = require('../../fixtures/data.json')
// const formatter = new Intl.NumberFormat('id-ID', {
//   minimumFractionDigits: 2,      
//   maximumFractionDigits: 2,
// });

class TransactionPage {
  addToCartButton = '.button-2'
  addToCartAlert = '.content'
  cartMenu = '.ico-cart > .cart-label'
  h1 = 'h1'
  strong = 'strong'
  qtyInput = '.qty-input'
  updateCartButton = '.update-cart-button'
  removeCheckbox = ':nth-child(1) > .remove-from-cart > input'
  productPrice = '.product-unit-price'
  totalProductPrice = '.product-subtotal'
  removeVerify = '.order-summary-content'
  subTotal = ':nth-child(1) > .cart-total-right > .nobr > .product-price'
  warningBox = '#terms-of-service-warning-box'
  warningMessages = 'p'
  warningClose = '.ui-button-icon-primary'
  tnc = '#termsofservice'
  checkoutButton = '#checkout'
  billingFirstName = '#BillingNewAddress_FirstName'
  billingLastName = '#BillingNewAddress_LastName'
  billingAddress = '#BillingNewAddress_Email'
  billingAddressButton = '#billing-buttons-container > .button-1'
  billingShippingButton = '#shipping-buttons-container > .button-1'
  shippingMethodButton = '#shipping-method-buttons-container > .button-1'
  paymentMethodButton = '#payment-method-buttons-container > .button-1'
  countryMessages = ':nth-child(5) > .field-validation-error'
  cityMessages = ':nth-child(7) > .field-validation-error'
  streetMessages = ':nth-child(8) > .field-validation-error'
  zipMessages = ':nth-child(10) > .field-validation-error'
  phoneMessages = ':nth-child(11) > .field-validation-error'
  countrySelect = '#BillingNewAddress_CountryId'
  cityInput = '#BillingNewAddress_City'
  addressInput = '#BillingNewAddress_Address1'
  zipInput = '#BillingNewAddress_ZipPostalCode'
  phoneInput = '#BillingNewAddress_PhoneNumber'
  shippingAddress = '#opc-shipping > .step-title > h2'
  radioShippingMethod = '#shippingoption_1'
  shippingAddressSelect = '#shipping-address-select'
  titleCheckoutStep1 = '#opc-billing > .step-title > h2'
  titleCheckoutStep2 = '#opc-shipping > .step-title > h2'
  titleCheckoutStep3 = '#opc-shipping_method > .step-title > h2'
  titleCheckoutStep4 = '#opc-payment_method > .step-title > h2'
  titleCheckoutStep5 = '#opc-payment_info > .step-title > h2'
  titleCheckoutStep6 = '#opc-confirm_order > .step-title > h2'
  paymentMethod = '#paymentmethod_2'
  paymentSelect = '#CreditCardType'
  ccName = '#CardholderName'
  ccNumber = '#CardNumber'
  ccCode = '#CardCode'
  paymentInfoButton = '#payment-info-buttons-container > .button-1'
  ccNameWarning = '.validation-summary-errors > ul > :nth-child(1)'
  ccNoWarning = '.validation-summary-errors > ul > :nth-child(2)'
  ccCodeWarning = '.validation-summary-errors > ul > :nth-child(3)'
  coName = '.billing-info > .name'
  coEmail = '.billing-info > .email'
  coPhone = '.billing-info > .phone'
  coAddress = '.billing-info > .address1'
  coCity = '.billing-info > .city-state-zip'
  coCountry = '.billing-info > .country'
  bilName = '.shipping-info > .name'
  bilEmail = '.shipping-info > .email'
  bilPhone = '.shipping-info > .phone'
  bilAddress = '.shipping-info > .address1'
  bilCity = '.shipping-info > .city-state-zip'
  bilCountry = '.shipping-info > .country'
  payMethod = '.billing-info > .payment-method'
  shipMethod =  '.shipping-info > .shipping-method'
  confirmButton = '#confirm-order-buttons-container > .button-1'
  orderNo = '.details > :nth-child(1)'
  orderDetail = '.details > :nth-child(2) > a'
  product = 'em > a'
  
  addButton() {
    cy.button(this.addToCartButton)
    cy.get(this.addToCartAlert).should('contain', messages.addToCartAlert).should('be.visible')
  }
  
  clickCartMenu() {
    cy.button(this.cartMenu)
    cy.url().should('contain', 'cart')
    cy.get(this.h1).should('have.text', messages.cartWording)
  }
  
  updateCart() {
    cy.get(this.qtyInput).clear()
    cy.input(this.qtyInput, data.qty)
    cy.button(this.updateCartButton)
    cy.get(this.qtyInput).should('have.value', data.qty)
    cy.get(this.productPrice).should('have.text', data.price)
    // cy.get(this.totalProductPrice).should('have.text', (data.price*data.qty))
  }
  
  removeProduct() {
    cy.get(this.removeCheckbox).check()
    cy.button(this.updateCartButton)
    cy.get(this.removeVerify).should('have.contain', messages.cartEmpty)
  }
  
  verifyCart() {
    cy.get(this.totalProductPrice).invoke('text').then((totalProduct) => {
      cy.get(this.subTotal).invoke('text').then((totalProductFooter) => {
        expect(totalProduct).to.equal(totalProductFooter)
      })
    })
    cy.button(this.checkoutButton)
    cy.get(this.warningBox).should('be.visible')
    cy.get(this.warningMessages).should('have.text', messages.warningMessages)
    cy.button(this.warningClose)
    cy.get(this.tnc).check()
    cy.button(this.checkoutButton)
  }
  
  checkoutBillingAddress() {
    cy.url().should('contain', 'onepagecheckout')
    cy.get(this.titleCheckoutStep1).should('have.text', messages.titleCheckoutStep1)
    cy.get(this.billingFirstName).should('have.value', data.firstname)
    cy.get(this.billingLastName).should('have.value', data.lastname)
    cy.get(this.billingAddress).invoke('val').should('include', '@gmail.com')
    cy.button(this.billingAddressButton)
    cy.get(this.countryMessages).should('have.text', messages.countryMessages)
    cy.get(this.cityMessages).should('have.text', messages.cityMessages)
    cy.get(this.streetMessages).should('have.text', messages.streetMessages)
    cy.get(this.zipMessages).should('have.text', messages.zipMessages)
    cy.get(this.phoneMessages).should('have.text', messages.phoneMessages)
    cy.get(this.countrySelect).select(data.country).should('have.value', data.valueCountry)
    cy.input(this.cityInput, data.city)
    cy.input(this.addressInput, data.address)
    cy.input(this.zipInput, data.zip)
    cy.input(this.phoneInput, data.phone)
    cy.button(this.billingAddressButton)
  }
  
  checkoutShippingAddress() {
    cy.get(this.titleCheckoutStep2).should('have.text', messages.titleCheckoutStep2)
    cy.get(this.shippingAddress).should('have.text', messages.shippingAddress)
    cy.get(this.shippingAddressSelect).select(0).should('contain', data.address)
    cy.button(this.billingShippingButton)
  }
  
  checkoutShippingMethod() {
    cy.get(this.titleCheckoutStep3).should('have.text', messages.titleCheckoutStep3)
    cy.get(this.radioShippingMethod).check()
    .should('have.attr', 'id', 'shippingoption_1')
    .should('have.attr', 'name', 'shippingoption')
    .should('have.attr', 'value', 'Next Day Air___Shipping.FixedRate')
    cy.button(this.shippingMethodButton)
  }
  
  checkoutPaymentMethod() {
    cy.get(this.titleCheckoutStep4).should('have.text', messages.titleCheckoutStep4)
    cy.get(this.paymentMethod).check().should('have.value', data.cc)
    cy.button(this.paymentMethodButton)
  }

  checkoutPaymentInformation() {
    cy.get(this.titleCheckoutStep5).should('have.text', messages.titleCheckoutStep5)
    cy.get(this.paymentSelect).select(data.ccVisa).should('have.value', data.ccVisa)
    cy.button(this.paymentInfoButton)
    cy.get(this.ccNameWarning).should('have.text', messages.ccName)
    cy.get(this.ccNoWarning).should('have.text', messages.ccNo)
    cy.get(this.ccCodeWarning).should('have.text', messages.ccCode)
    cy.input(this.ccName, data.firstname)
    cy.input(this.ccNumber, data.ccNo)
    cy.input(this.ccCode, data.ccCode)
    cy.button(this.paymentInfoButton)
  }

  checkoutConfirmOrder() {
    cy.get(this.titleCheckoutStep6).should('have.text', messages.titleCheckoutStep6)
    cy.get(this.coName).should('contain', data.firstname)
    cy.get(this.coEmail).should('contain', '@gmail.com')
    cy.get(this.coPhone).should('contain', data.phone)
    cy.get(this.coAddress).should('contain', data.address)
    cy.get(this.coCity).should('contain', data.city)
    cy.get(this.coCountry).should('contain', data.country)
    cy.get(this.bilName).should('contain', data.firstname)
    cy.get(this.bilEmail).should('contain', '@gmail.com')
    cy.get(this.bilPhone).should('contain', data.phone)
    cy.get(this.bilAddress).should('contain', data.address)
    cy.get(this.bilCity).should('contain', data.city)
    cy.get(this.bilCountry).should('contain', data.country)
    cy.get(this.payMethod).should('contain', data.paymentType)
    cy.get(this.shipMethod).should('contain', data.shippingType)
    cy.get(this.totalProductPrice).invoke('text').then((totalProduct) => {
      cy.get(this.subTotal).invoke('text').then((totalProductFooter) => {
        expect(totalProduct).to.equal(totalProductFooter)
      })
    })
    cy.button(this.confirmButton)
  }

  successOrder() {
    cy.url().should('contain', 'completed')
    cy.get(this.h1).should('have.text', messages.thanks)
    cy.get(this.strong).should('have.text', messages.successOrder)
    cy.get(this.orderNo).should('contain', messages.orderNo)
    cy.button(this.orderDetail)
  }

  orderInfo() {
    cy.url().should('contain', 'orderdetails')
    cy.get(this.h1).should('have.text', messages.orderInfo)
    cy.get(this.coName).should('contain', data.firstname)
    cy.get(this.coEmail).should('contain', '@gmail.com')
    cy.get(this.coPhone).should('contain', data.phone)
    cy.get(this.coAddress).should('contain', data.address)
    cy.get(this.coCity).should('contain', data.city)
    cy.get(this.coCountry).should('contain', data.country)
    cy.get(this.bilName).should('contain', data.firstname)
    cy.get(this.bilEmail).should('contain', '@gmail.com')
    cy.get(this.bilPhone).should('contain', data.phone)
    cy.get(this.bilAddress).should('contain', data.address)
    cy.get(this.bilCity).should('contain', data.city)
    cy.get(this.bilCountry).should('contain', data.country)
    cy.get(this.payMethod).should('contain', data.paymentType)
    cy.get(this.shipMethod).should('contain', data.shippingType)
    cy.get(this.product).should('have.text', data.product2)
  }
}

export default new TransactionPage()