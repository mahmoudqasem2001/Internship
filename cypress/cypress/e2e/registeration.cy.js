/// <reference types="cypress" />

import {
  LOCATORS,
  goToRegistrationPage,
  inputTextField,
  checkEmailMessageError,
  checkUrl,
  verifyTextFieldColorChanged,
  fillOptionalFields,
  verifyAlertShown,
  verifyAlertErrorMessage,
  fillRequiredFields
} from '../support/registration_helper';


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Registeration page', () => {

  before('go to sign-in page', () => {
    goToRegistrationPage("http://automationpractice.com/index.php")
  })

  it('Registration with invalid Email', () => {
    //--------Email without "@" char-----------//
    inputTextField(LOCATORS.email, 'sampleUser4gmail.com')
    click(LOCATORS.submitEmail_btn)
    checkEmailMessageError();
    //--------Email without dot --------------//
    inputTextField(LOCATORS.email, 'sampleUser4@gmailcom')
    checkEmailMessageError();
    click(LOCATORS.submitEmail_btn)
    //----------Email without name------//
    inputTextField(LOCATORS.email, '@gmail.com')
    checkEmailMessageError();
    click(LOCATORS.submitEmail_btn)
  })

  it.only('Registration with valid Email', () => {
    inputTextField(LOCATORS.email, 'sampleUser7@gmail.com')
    cy.get(LOCATORS.submitEmailBtn)
      .click({force: true})
    checkUrl('http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation')
  })

  it('Verify Clicking on required fields without filling them', () => {
    click(LOCATORS.firstName)
    click('body')
    checkRedColorError(LOCATORS.firstName)
    

    click(LOCATORS.lastName)
    click('body')
    checkRedColorError(LOCATORS.lastName)

    click(LOCATORS.password)
    click('body')
    checkRedColorError(LOCATORS.password)

  })

  it('Registration with invalid phone number ', () => {
    inputTextField(LOCATORS.mobile_phone, 'abcd')
    click(LOCATORS.submitAccount_btn)
    verifyAlertShown()
    checkErrorinputTextFieldVisable(LOCATORS.phone_number)
  })

  it.only('Registration with invalid password', () => {
    inputTextField(LOCATORS.password, '123445678910111211314151617181920212223')
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})    
    verifyAlertShown()
    verifyAlertErrorMessage(LOCATORS.password,'123445678910111211314151617181920212223')
    
    inputTextField(LOCATORS.password, '123')
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})    
    verifyAlertShown()
    verifyAlertErrorMessage(LOCATORS.password,'123')

    
  })

  it('Registration with invalid postal code', () => {
    inputTextField(LOCATORS.postalCode, '1234567')
    click(LOCATORS.submitAccount_btn)
    verifyAlertShown()
    checkErrorinputTextFieldVisable(LOCATORS.postalCode)
  })

  it('Registration without filling required fields', () => {
    click(LOCATORS.submitAccount_btn)
    verifyAlertShown()
  })

  it('Registration without filling required fields and filling optional fields', () => {
    fillOptionalFields(
      '15',
      '5',
      '1999',
      'Exalt',
      'no other description',
      '0595129072')
    click(LOCATORS.submitAccount_btn)
    verifyAlertShown()
  })

  it('Registration with filling required fields', () => {
    fillRequiredFields(
      'testUser',
      'lastTestUser',
      'sampleUser7@gmail.com',
      'test12345',
      'NewYork',
      'panama',
      21,
      '12345',
      21,
      '0599344870',
      'milan'
      )
    click(LOCATORS.submitAccount_btn)
    checkURL('http://automationpractice.com/index.php?controller=my-account')
    })

})