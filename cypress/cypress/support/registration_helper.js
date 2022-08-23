/// <reference types="cypress" />

export const URLS = {
    SIGNIN_PAGE_URL: 'http://automationpractice.com/index.php',
    REGISTER_PAGE_URL: 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation',
    MY_ACCOUNT_URL: 'http://automationpractice.com/index.php?controller=my-account'
  }
export const ERROR_MESSAGES={
    MISS_FILLING_PHONE_NUMBER: "You must register at least one phone number.",
    MISS_FILLING_LAST_NAME: "lastname is required.",
    MISS_FILLING_FIRST_NAME: "firstname is required.",
    MISS_FILLING_PASSWORD: "passwd is required.",
    MISS_FILLING_ADDRESS1: "address1 is required.",
    MISS_FILLING_CITY: "city is required.",
    WRONG_POSTAL_CODE: "The Zip/Postal code you've entered is invalid. It must follow this format: 00000",
    MISS_SHOOSE_STATE: "This country requires you to choose a State",
    SMALL_PASSWORD:"passwd is invalid.",
    LARGE_PASSWORD:"passwd is too long. Maximum length: 32",
    INVALID_EMAIL: "Invalid email address",
    WRONG_PHONE_NUMBER:"phone_mobile is invalid"
}
export const COLOR="rgb(241, 51, 64)";
    
export const LOCATORS = {
    submitEmailBtn: '#SubmitCreate > span',
    signInBtn: '.login',
    submitAccountBtn: '#submitAccount > span',
    email: '#email_create',
    firstName: '#customer_firstname',
    lastName: '#customer_lastname',
    password: '#passwd',
    alert: '.alert',
    postalCode: '#postcode',
    daysMenuList: '#days',
    monthsMenuList: '#months',
    yearsMenuList: '#years',
    newsLetterCheckbox: '#newsletter',
    offerCheckbox: '#optin',
    companyName: '#company',
    otherDiscription: '#other',
    homePhone: '#phone',
    address1: '#address1',
    address2: '#address2',
    city: '#city',
    stateId: '#id_state',
    countryId: '#id_country',
    mobilePhone: '#phone_mobile',
    aliasAddress: '#alias',
}
export const goToRegistrationPage = (url) => {
    cy.visit(url)
    cy.get(LOCATORS.signInBtn)
      .click({force: true})
}
export const enterTextFieldValue = (textFieldLocator, text, submitBtnLocator, shouldClickOnSubmit) => {
    cy.get(textFieldLocator)
      .clear({ force: true })
      .type(text)
      .should('have.value', text)
  if(shouldClickOnSubmit == true){
      cy.get(submitBtnLocator)
        .click({force: true})
    }
  }
export const checkUrl = (url) => {
    cy.url({ timeout: 20000 })
      .should('eq', url)

}
export const verifyTextFieldColorChanged = (textFieldLocator,color) => {
    cy.get(textFieldLocator)
      .click({force: true})
    cy.get('body')
      .click({force: true})
    cy.get(textFieldLocator)
      .should('have.css', 'color', color)
}
export const selectFromList=(listLocator,value)=>{
    cy.get(listLocator)
      .select(value, { force: true })
      .should('have.value', value)
}
export const enableDisableCheckBox=(checkboxLocator,shouldEnable)=>{
  if(shouldEnable == true){
    cy.get(checkboxLocator)
      .check({ force: true })
      .should('be.checked')
  }
  else{
    cy.get(checkboxLocator)
      .uncheck({ force: true })
      .should('not.be.checked')
  }
}
export const fillOptionalFields = (day, month, year, shouldEnableFirstCheckBox, shouldEnableSecondCheckBox ,companyName, otherDiscription, homePhone ) => {
  if(day != null){
    selectFromList(LOCATORS.daysMenuList, day)
  }
  if(month != null){
    selectFromList(LOCATORS.monthsMenuList, month)
  }
  if(year != null){
    selectFromList(LOCATORS.yearsMenuList, year)

  }
  if(shouldEnableFirstCheckBox != null){
    enableDisableCheckBox(LOCATORS.offerCheckbox, shouldEnableFirstCheckBox)
  }
  if(shouldEnableSecondCheckBox != null){
    enableDisableCheckBox(LOCATORS.newsLetterCheckbox, shouldEnableSecondCheckBox)
  }
  if(companyName != null){
    enterTextFieldValue(LOCATORS.companyName, companyName)
  }
  if(otherDiscription != null){
    enterTextFieldValue(LOCATORS.otherDiscription, otherDiscription)
  }
  if(homePhone != null){
    enterTextFieldValue(LOCATORS.homePhone, homePhone)
  }
  
}

export const verifyAlertErrorMessage = (inputLocator,errorMessage, submitBtnLocator, shouldClickOnSubmit) => {
  if(shouldClickOnSubmit == true){
    cy.get(submitBtnLocator)
    .click({force: true})
  }
    cy.get(LOCATORS.alert,{timeout:20000})
      .should('exist')
      .should('be.visible')    
    if (inputLocator === LOCATORS.password) {
      if(errorMessage === ERROR_MESSAGES.LARGE_PASSWORD){
        cy.get('li')
          .contains(ERROR_MESSAGES.LARGE_PASSWORD)       
          .should('be.visible')
      }
      else if(errorMessage === ERROR_MESSAGES.SMALL_PASSWORD){
        cy.get('li')
          .contains(ERROR_MESSAGES.SMALL_PASSWORD)       
          .should('be.visible')
      }
    }
    else if (inputLocator === LOCATORS.postalCode) {
      if(errorMessage === ERROR_MESSAGES.WRONG_POSTAL_CODE){
        cy.get('li')
          .contains(ERROR_MESSAGES.WRONG_POSTAL_CODE)
          .should('be.visible')
      }
    }
    else if (inputLocator === LOCATORS.mobilePhone) {
      if(errorMessage === ERROR_MESSAGES.WRONG_PHONE_NUMBER){
        cy.get('li')
          .contains(ERROR_MESSAGES.WRONG_PHONE_NUMBER)
          .should('be.visible')
      }
    }
    else if(inputLocator === LOCATORS.email){
      if(errorMessage === ERROR_MESSAGES.INVALID_EMAIL){
        cy.get('li')
          .contains(ERROR_MESSAGES.INVALID_EMAIL)
          .should('be.visible')
      }
    }
}
export const fillRequiredFields = (firstName, lastName, password, address1, city, stateId, postalCode, countryId, mobilePhone, aliasAddress) => {
    enterTextFieldValue(LOCATORS.firstName,firstName)
    enterTextFieldValue(LOCATORS.lastName,lastName)
    enterTextFieldValue(LOCATORS.password,password)
    enterTextFieldValue(LOCATORS.address1,address1)
    enterTextFieldValue(LOCATORS.city,city)
    selectFromList(LOCATORS.stateId,stateId)
    enterTextFieldValue(LOCATORS.postalCode,postalCode)
    cy.get(LOCATORS.countryId)             
      .should('have.value', countryId)
    enterTextFieldValue(LOCATORS.mobilePhone,mobilePhone)
    enterTextFieldValue(LOCATORS.aliasAddress,aliasAddress)
    cy.get(LOCATORS.submitAccountBtn)
      .click({force: true})
}




