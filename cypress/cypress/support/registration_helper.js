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
    WRONG_PHONE_NUMBER:"phone_mobile is invalid",
    MISS_FILLING_REQIURED_FIELDS: 'There are 8 errors'
}
export const RED_COLOR="rgb(241, 51, 64)";
    
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
    clickOnButton(LOCATORS.signInBtn)
}
export const enterTextFieldValue = (textFieldLocator, text) => {
    cy.get(textFieldLocator)
      .clear({ force: true })
      .type(text)
      .should('have.value', text)
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

export const clickOnButton =(locatorForSubmitBtn)=>{
  cy.get(locatorForSubmitBtn)
    .click({force: true})
}
export const verifyAlertErrorMessage = (errorMessage) => {
    cy.get(LOCATORS.alert,{timeout:20000})
      .should('exist')
      .should('be.visible')    

    cy.get(LOCATORS.alert)
      .contains(errorMessage)
      .should('be.visible')
      
}
export const fillUserInformation = (userInformation) => {
  if(userInformation.firstName){
    enterTextFieldValue(LOCATORS.firstName,userInformation.firstName)
  }
  if(userInformation.lastName){
    enterTextFieldValue(LOCATORS.lastName,userInformation.lastName)
  }
  if(userInformation.password){
    enterTextFieldValue(LOCATORS.password,userInformation.password)
  }  
  if(userInformation.address1){
    enterTextFieldValue(LOCATORS.address1,userInformation.address1)
  }
  if(userInformation.city){
    enterTextFieldValue(LOCATORS.city,userInformation.city)
  }
  if(userInformation.stateId){
    selectFromList(LOCATORS.stateId,userInformation.stateId)
  }
  if(userInformation.postalCode){
    enterTextFieldValue(LOCATORS.postalCode,userInformation.postalCode)
  }
  if(userInformation.mobilePhone){
    enterTextFieldValue(LOCATORS.mobilePhone,userInformation.mobilePhone)
  }
  if(userInformation.aliasAddress){
    enterTextFieldValue(LOCATORS.aliasAddress,userInformation.aliasAddress)
  }
  if(userInformation.birthDay){
    selectFromList(LOCATORS.daysMenuList,userInformation.birthDay)
  }
  if(userInformation.birthMonth){
    selectFromList(LOCATORS.monthsMenuList,userInformation.birthMonth)
  }
  if(userInformation.birthYear){
    selectFromList(LOCATORS.yearsMenuList,userInformation.birthYear)
  }
  if(userInformation.shouldEnableNewsLetterCheckBox){
    enableDisableCheckBox(LOCATORS.newsLetterCheckbox,userInformation.shouldEnableNewsLetterCheckBox)
  }
  if(userInformation.shouldEnableOfferCheckBox){
    enableDisableCheckBox(LOCATORS.offerCheckbox,userInformation.shouldEnableOfferCheckBox)
  }
  if(userInformation.companyName){
    enterTextFieldValue(LOCATORS.companyName,userInformation.companyName)
  }
  if(userInformation.otherDiscription){
    enterTextFieldValue(LOCATORS.otherDiscription,userInformation.otherDiscription)
  }
  if(userInformation.homePhone){
    enterTextFieldValue(LOCATORS.homePhone,userInformation.homePhone)
  }

}




