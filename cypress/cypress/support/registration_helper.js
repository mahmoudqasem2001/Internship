/// <reference types="cypress" />

export const URLS = {
    SIGNIN_PAGE_URL: 'http://automationpractice.com/index.php',
    REGISTER_PAGE_URL: 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation'
}
export const ERROR_MESSAGES={
    MISS_FILLING_PHONE_NUMBER: "You must register at least one phone number.",
    MISS_FILLING_LAST_NAME: "lastname is required.",
    MISS_FILLING_LAST_NAME: "firstname is required.",
    MISS_FILLING_PASSWORD: "passwd is required.",
    MISS_FILLING_ADDRESS1: "address1 is required.",
    MISS_FILLING_CITY: "city is required.",
    WRONG_POSTAL_CODE: "The Zip/Postal code you've entered is invalid. It must follow this format: 00000",
    MISS_SHOOSE_STATE: "This country requires you to choose a State",
    SMALL_PASSWORD:"passwd is invalid.",
    LARGE_PASSWORD:"passwd is too long. Maximum length: 32",
    INVALID_EMAIL: "Invalid email address"
}
export const COLORS={
    RED_ERROR:"rgb(241, 51, 64)"
}
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
//can make it general??
export const checkEmailMessageError = (inputLocator) => {
    cy.wait(10000)
    cy.get(inputLocator)
      .should('have.css', 'color', COLORS.RED_ERROR)
    cy.get(LOCATORS.alert)
      .should('be.visible', { timeout: 100000 })
    cy.get('li')
      .contains(ERROR_MESSAGES.INVALID_EMAIL)
      .should('be.visible')
}
export const inputTextField = (textFieldLocator, text) => {
    cy.get(textFieldLocator)
      .clear({ force: true })
      .type(text)
      .should('have.value', text)
}

export const checkUrl = (url) => {
    cy.url({ timeout: 20000 })
      .should('eq', url)

}
export const verifyTextFieldColorChanged = (textFieldLocator) => {
    cy.get(textFieldLocator)
      .should('have.css', 'color', COLORS.RED_ERROR)
}
export const selectFromList=(listLocator,value)=>{
    cy.get(listLocator)
      .select(value, { force: true })
      .should('have.value', value)
}
export const checkbox=(checkboxLocator)=>{
    cy.get(checkboxLocator)
      .check({ force: true })
      .should('be.checked')
}
export const fillOptionalFields = (day, month, year, companyName, otherDiscription, homePhone ) => {
    selectFromList(LOCATORS.daysMenuList,day)
    selectFromList(LOCATORS.monthsMenuList,month)
    selectFromList(LOCATORS.yearsMenuList,year)
    
    checkbox(LOCATORS.offerCheckbox)
    checkbox(LOCATORS.newsLetterCheckbox)

    inputTextField(LOCATORS.company_name,companyName)
    inputTextField(LOCATORS.otherDiscription,otherDiscription)
    inputTextField(LOCATORS.homePhone)
}
export const verifyAlertShown = () => {
    cy.get(LOCATORS.alert)
        .should('exist')
        .should('be.visible')
}
export const verifyAlertErrorMessage = (inputLocator) => {
    if (inputLocator === LOCATORS.password) {
        cy.get('li')
          .contains('passwd')       //How I specify if it long passwd or small??  
          .should('be.visible')
        
    }
    else if (inputLocator === LOCATORS.postalCode) {
        cy.get('li')
          .contains(ERROR_MESSAGES.WRONG_POSTAL_CODE)
          .should('be.visible')
    }
    else if (inputLocator === LOCATORS.mobilePhone) {
        cy.get('li')
          .contains(ERROR_MESSAGES.MISS_FILLING_PHONE_NUMBER)
          .should('be.visible')
    }
}
export const fillRequiredFields = (firstName, lastName, email, password, address1, city, stateId, postalCode, countryId, mobilePhone, aliasAddress) => {
    inputTextField(LOCATORS.firstName,firstName)
    inputTextField(LOCATORS.lastName,lastName)
    inputTextField(LOCATORS.password,password)
    inputTextField(LOCATORS.address1,address1)
    inputTextField(LOCATORS.city,city)
    selectFromList(LOCATORS.stateId,stateId)
    inputTextField(LOCATORS.postalCode,postalCode)
    cy.get(LOCATORS.countryId)            //By Default there is no other choice to choose 
      .should('have.value', countryId)
    inputTextField(LOCATORS.mobilePhone,mobilePhone)
    inputTextField(LOCATORS.aliasAddress,aliasAddress)
}




