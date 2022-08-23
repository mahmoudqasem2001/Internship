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
    verifyAlertErrorMessage(LOCATORS.email,ERROR_MESSAGES.INVALID_EMAIL,LOCATORS.submitEmailBtn,true);
    //--------Email without dot --------------//
    enterTextFieldValue(LOCATORS.email, 'sampleUser4@gmailcom')
    verifyAlertErrorMessage(LOCATORS.email,ERROR_MESSAGES.INVALID_EMAIL,LOCATORS.submitEmailBtn,true);
    //----------Email without name------//
    enterTextFieldValue(LOCATORS.email, '@gmail.com')
    verifyAlertErrorMessage(LOCATORS.email,ERROR_MESSAGES.INVALID_EMAIL,LOCATORS.submitEmailBtn,true);
  })

  it('Registration with valid Email', () => {
    enterTextFieldValue(LOCATORS.email, 'sampleUser7@gmail.com',LOCATORS.submitEmailBtn,true)
    checkUrl(URLS.REGISTER_PAGE_URL)
  })

  it('Verify Clicking on required fields without filling them', () => {
    verifyTextFieldColorChanged(LOCATORS.firstName,COLOR)
    verifyTextFieldColorChanged(LOCATORS.lastName,COLOR)
    verifyTextFieldColorChanged(LOCATORS.password,COLOR)
  })

  it('Registration with invalid phone number ', () => {
    enterTextFieldValue(LOCATORS.mobilePhone, 'abcd')
    verifyAlertErrorMessage(LOCATORS.mobilePhone,ERROR_MESSAGES.WRONG_PHONE_NUMBER,LOCATORS.submitAccountBtn,true)
  })

  it('Registration with invalid password', () => {
    enterTextFieldValue(LOCATORS.password, '123445678910111211314151617181920212223')   
    verifyAlertErrorMessage(LOCATORS.password,ERROR_MESSAGES.LARGE_PASSWORD,LOCATORS.submitAccountBtn,true)
    
    enterTextFieldValue(LOCATORS.password, '123')  
    verifyAlertErrorMessage(LOCATORS.password,ERROR_MESSAGES.SMALL_PASSWORD,LOCATORS.submitAccountBtn,true)
  })

  it('Registration with invalid postal code', () => {
    enterTextFieldValue(LOCATORS.postalCode, '1234567')
    verifyAlertErrorMessage(LOCATORS.postalCode,ERROR_MESSAGES.WRONG_POSTAL_CODE,LOCATORS.submitAccountBtn,true)
  })

  it('Registration without filling required fields', () => {
    verifyAlertErrorMessage('','',LOCATORS.submitAccountBtn,true)
  })

  it('Registration without filling required fields and filling optional fields', () => {
    fillOptionalFields('15', '5', '1999', true, true, 'Exalt', 'no other description', '0595129072')
    verifyAlertErrorMessage('','',LOCATORS.submitAccountBtn,true)
  })

  it('Registration with filling required fields', () => {
    fillRequiredFields('testUser', 'lastTestUser', 'test12345', 'NewYork', 'panama', '21', '12345', '21', '0599344870', 'milan')
    checkUrl(URLS.MY_ACCOUNT_URL)
    })

})