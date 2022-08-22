/// <reference types="cypress" />

import {
  URLS,
  ERROR_MESSAGES,
  COLOR,
  LOCATORS,
  goToRegistrationPage,
  enterTextFieldValue,
  checkUrl,
  verifyTextFieldColorChanged,
  selectFromList,
  enableDisableCheckBox,
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
    goToRegistrationPage(URLS.SIGNIN_PAGE_URL)
  })

  it('Registration with invalid Email', () => {
    //--------Email without "@" char-----------//
    enterTextFieldValue(LOCATORS.email, 'sampleUser4gmail.com')
    cy.get(LOCATORS.submitEmailBtn)
      .click({force: true})
    verifyAlertErrorMessage();
    //--------Email without dot --------------//
    enterTextFieldValue(LOCATORS.email, 'sampleUser4@gmailcom')
    cy.get(LOCATORS.submitEmailBtn)
      .click({force: true})
    verifyAlertErrorMessage();
    //----------Email without name------//
    enterTextFieldValue(LOCATORS.email, '@gmail.com')
    cy.get(LOCATORS.submitEmailBtn)
      .click({force: true})
    verifyAlertErrorMessage();
  })

  it.only('Registration with valid Email', () => {
    enterTextFieldValue(LOCATORS.email, 'sampleUser7@gmail.com')
    cy.get(LOCATORS.submitEmailBtn)
      .click({force: true})
    checkUrl(URLS.REGISTER_PAGE_URL)
  })

  it('Verify Clicking on required fields without filling them', () => {
    verifyTextFieldColorChanged(LOCATORS.firstName,COLOR)
    verifyTextFieldColorChanged(LOCATORS.lastName,COLOR)
    verifyTextFieldColorChanged(LOCATORS.password,COLOR)
  })

  it('Registration with invalid phone number ', () => {
    enterTextFieldValue(LOCATORS.mobilePhone, 'abcd')
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})
    verifyAlertErrorMessage(LOCATORS.mobilePhone,ERROR_MESSAGES.WRONG_PHONE_NUMBER)
  })

  it('Registration with invalid password', () => {
    enterTextFieldValue(LOCATORS.password, '123445678910111211314151617181920212223')
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})    
    verifyAlertErrorMessage(LOCATORS.password,ERROR_MESSAGES.LARGE_PASSWORD)
    
    enterTextFieldValue(LOCATORS.password, '123')
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})    
    verifyAlertErrorMessage(LOCATORS.password,ERROR_MESSAGES.SMALL_PASSWORD)
  })

  it('Registration with invalid postal code', () => {
    enterTextFieldValue(LOCATORS.postalCode, '1234567')
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})
    verifyAlertErrorMessage(LOCATORS.postalCode,ERROR_MESSAGES.WRONG_POSTAL_CODE)
  })

  it('Registration without filling required fields', () => {
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})
    verifyAlertShown()
  })

  it('Registration without filling required fields and filling optional fields', () => {
    fillOptionalFields('15', '5', '1999', true, true, 'Exalt', 'no other description', '0595129072')
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})
    verifyAlertShown()
  })

  it('Registration with filling required fields', () => {
    fillRequiredFields('testUser', 'lastTestUser', 'test12345', 'NewYork', 'panama', '21', '12345', '21', '0599344870', 'milan')
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})
    checkURL(URLS.MY_ACCOUNT_URL)
    })

})