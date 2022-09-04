/// <reference types="cypress" />

import * as registrationHelper from '../support/registration_helper';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

const VALID_EMAIL = 'sampleUser8@gmail.com';
const INVALID_EMAILS = {
    EMAIL_WITHOUT_AT_SIGN: 'sampleUser4gmail.com',
    EMAIL_WITHOUT_DOT: 'sampleUser4@gmailcom',
    EMAIL_WITHOUT_NAME: '@gmail.com',
}
const INVALID_USER_INFORMATION = {
    longPasswordRegistration: {
        firstName: 'Mahmoud',
        lastName: 'Khaled',
        password: '123445678910111211314151617181920212223',
        address1: 'NewYork',
        city: 'panama',
        stateId: '21',
        postalCode: '12345',
        mobilePhone: '0599344870',
        aliasAddress: 'milan'
    },
    shortPasswordRegistraion: {
        firstName: 'Mahmoud',
        lastName: 'Khaled',
        password: '123',
        address1: 'NewYork',
        city: 'panama',
        stateId: '21',
        postalCode: '12345',
        mobilePhone: '0599344870',
        aliasAddress: 'milan'
    },
    invalidPhoneNumberRegistration: {
        firstName: 'Mahmoud',
        lastName: 'Khaled',
        password: 'mahmood12345',
        address1: 'NewYork',
        city: 'panama',
        stateId: '21',
        postalCode: '12345',
        mobilePhone: 'abcd',
        aliasAddress: 'milan'
    }, 
    invalidPostalCodeRegistration:{
        firstName: 'Mahmoud',
        lastName: 'Khaled',
        password: 'mahmood12345',
        address1: 'NewYork',
        city: 'panama',
        stateId: '21',
        postalCode: '1234567',
        mobilePhone: '0599344870',
        aliasAddress: 'milan'
    }
}
let userInformationOptionalFieldsOnly = {
    birthDay: '15',
    birthMonth: '5',
    birthYear: '1995',
    shouldEnableFirstCheckBox: true,
    shouldEnableSecondCheckBox: true,
    companyName: 'Exalt',
    otherDiscription: 'Nothing',
    homePhone: '0599344880'
}
let userInformationRequiredFileds = {
    firstName: 'Mahmoud',
    lastName: 'Khaled',
    password: 'mahmood12345',
    address1: 'NewYork',
    city: 'panama',
    stateId: '21',
    postalCode: '12345',
    mobilePhone: '0599344870',
    aliasAddress: 'milan'
}
describe('Registeration page', () => {

    before('go to sign-in page', () => {
        registrationHelper.goToRegistrationPage(registrationHelper.URLS.SIGNIN_PAGE_URL)
    })

    it('Registration with invalid Email', () => {
        registrationHelper.enterTextFieldValue(registrationHelper.LOCATORS.email, INVALID_EMAILS.EMAIL_WITHOUT_AT_SIGN)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitEmailBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.INVALID_EMAIL);

        registrationHelper.enterTextFieldValue(registrationHelper.LOCATORS.email, INVALID_EMAILS.EMAIL_WITHOUT_DOT)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitEmailBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.INVALID_EMAIL);

        registrationHelper.enterTextFieldValue(registrationHelper.LOCATORS.email, INVALID_EMAILS.EMAIL_WITHOUT_NAME)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitEmailBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.INVALID_EMAIL);
    })

    it('Registration with valid Email', () => {
        registrationHelper.enterTextFieldValue(registrationHelper.LOCATORS.email, VALID_EMAIL)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitEmailBtn)
        registrationHelper.checkUrl(registrationHelper.URLS.REGISTER_PAGE_URL)
    })

    it('Verify Clicking on required fields without filling them', () => {
        registrationHelper.verifyTextFieldColorChanged(registrationHelper.LOCATORS.firstName, registrationHelper.RED_COLOR)
        registrationHelper.verifyTextFieldColorChanged(registrationHelper.LOCATORS.lastName, registrationHelper.RED_COLOR)
        registrationHelper.verifyTextFieldColorChanged(registrationHelper.LOCATORS.password, registrationHelper.RED_COLOR)
    })

    it('Registration with invalid phone number ', () => {
        registrationHelper.fillUserInformation(INVALID_USER_INFORMATION.invalidPhoneNumberRegistration)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitAccountBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.WRONG_PHONE_NUMBER)

    })

    it('Registration with invalid password', () => {
        registrationHelper.fillUserInformation(INVALID_USER_INFORMATION.longPasswordRegistration)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitAccountBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.LONG_PASSWORD)

        registrationHelper.fillUserInformation(INVALID_USER_INFORMATION.shortPasswordRegistraion)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitAccountBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.SHORT_PASSWORD)
    })

    it('Registration with invalid postal code', () => {
        registrationHelper.fillUserInformation(INVALID_USER_INFORMATION.invalidPostalCodeRegistration)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitAccountBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.WRONG_POSTAL_CODE)

    })

    it('Registration without filling any field', () => {
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitAccountBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.MISS_FILLING_REQIURED_FIELDS)
    })

    it('Registration with filling optional fields only', () => {
        registrationHelper.fillUserInformation(userInformationOptionalFieldsOnly)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitAccountBtn)
        registrationHelper.verifyAlertErrorMessage(registrationHelper.ERROR_MESSAGES.MISS_FILLING_REQIURED_FIELDS)
    })

    it.skip('Registration with filling required fields', () => {
        registrationHelper.fillUserInformation(userInformationRequiredFileds)
        registrationHelper.clickOnButton(registrationHelper.LOCATORS.submitAccountBtn)
        registrationHelper.checkUrl(registrationHelper.URLS.MY_ACCOUNT_URL)
    })

})