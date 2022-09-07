
/// <reference types="cypress" />


export const LOCATORS={
    womenMainCategory: '.sf-menu > :nth-child(1) > a',
    dressesMainCategory: '.sf-menu > :nth-child(2) > a',
    tShirtMainCategory: '.sf-menu > :nth-child(3) > a',
    topsSubCategory: '.submenu-container[title="Tops"]',
    dressesSubCatagory:'.submenu-container[title="Dresses"]',
    tShirtsSubSubCategory:'.submenu-container[title="T-shirts"]',
    blousesSubSubCategory:'.submenu-container[title="Blouses"]',
    casualDressesSubSubCategory: '.submenu-container[title="Casual Dresses"]',
    eviningDressesSubSubCategory:'.submenu-container[title="Evining Dresses"]',
    summerDressesSubSubCategory: '.submenu-container[title="Summer Dresses"]',
    casualDressesSubCategory: '.submenu-container[title="Casual Dresses"]',
    eviningDressesSubCategory:'.submenu-container[title="Evining Dresses"]',
    summerDressesSubCategory: '.submenu-container[title="Summer Dresses"]',
    gridViewIcon:'.icon-th-large',
    listViewIcon: '.icon-th-list',
    productDescription: '.product-desc',
    enabledFiltersContainer: '#enabled_filters',
    catalogsBlock: '#layered_block_left',
    categoryName:'.category-name',
    subCatagory: '.submenu-container',
    email:'#email',
    password:'#passwd',
    signInBtn:'.login',
    submitLogInBtn:'#SubmitLogin',
    catalogSubTitle:'.layered_subtitle',
    topsSubCategoryCheckbox:'#layered_category_4',
    dressesSubCatagoryCheckbox:'#layered_category_8',
    casualDressesCheckbox:'#layered_category_9',
    eviningDressesCheckbox:'#layered_category_10',
    summerDressesCheckbox:'#layered_category_11',
    smallSizeCheckbox:'#layered_id_attribute_group_1',
    mediumSizeCheckbox:'#layered_id_attribute_group_2',
    largSizeChecbox:'#layered_id_attribute_group_3',
    BeigeColorCheckbox:'#layered_id_attribute_group_7',
    whiteColorCheckbox:'#layered_id_attribute_group_8',
    blackColorCheckbox:'#layered_id_attribute_group_11',
    orangeColorCheckbox:'#layered_id_attribute_group_13',
    blueColorCheckbox:'#layered_id_attribute_group_14',
    greenColorCheckbox:'#layered_id_attribute_group_15',
    yellowColorCheckbox:'#layered_id_attribute_group_16',
    pinkColorCheckbox:'#layered_id_attribute_group_24',
    contonCheckbox:'#layered_id_feature_5',
    polyesterCheckbox:'#layered_id_feature_1',
    viscoseCheckbox:'#layered_id_feature_3',
    casualCheckbox:'#layered_id_feature_11',
    dressyCheckbox:'#layered_id_feature_16',
    girlyCheckbox:'#layered_id_feature_13',
    colorfulDressCheckbox:'#layered_id_feature_18',
    maxiDressCheckbox:'#layered_id_feature_21',
    midiDressCheckbox:'#layered_id_feature_20',
    shortDressCheckbox:'#layered_id_feature_19',
    shortSlaveCheckbox:'#layered_id_feature_17',
    inStockQuantityCheckbox:'#layered_quantity_1',
    fashionManufacturerCheckbox:'#layered_manufacturer_1',
    conditionNewCheckbox:'#layered_condition_new',
}
export const CATALOGS_NAME = {
  categories: {
      tops: 'Tops',
      dresses: 'Dresses',
      casualDresses: 'Casual Dresses',
      eviningDresses:'Evining Dresses',
      summerDresses:'Summer Dresses',
  },
  COLORS: {
    beige:'Beige',
    white:'White',
    black:'Black',
    orange:'Orange',
    blue:'Blue',
    green:'Green',
    yellow:'Yellow',
    pink:'Pink',
  },
  size: {
      small: 'S',
      medium: 'M',
      larg: 'L'
  },
  compositions: {
      cotton: 'Cotton',
      polyester:'Polyester',
      viscose: 'Viscose',
  },
  styles: {
      casual: 'Casual',
      dressy: 'Dressy',
      girly: 'Girly',
  },
  properties: {
      colorfulDress: 'Colorful Dress',
      maxiDress: 'Maxi Dress',
      midiDress :'Midi Dress',
      shortDress: 'Short Dress',
      shortSlave: 'Short Sleeve',
  },
  availability: {
      inStock: 'In stock',
  },
  manufacturer: {
      fashion: 'Fashion Manufacturer',
  },
  condition: {
      new: 'New',
  }
}
export const URLS={
    homePage:'http://automationpractice.com/index.php',
    myAccountPage:'http://automationpractice.com/index.php?controller=my-account',
}

export const CATEGORIES = {
  WOMEN: {
      tops: {
          tshirts: 'T-shirts',
          Blouses: 'Blouses',
      },
      dresses: {
          casualDresses: 'Casual Dresses',
          eveningDresses: 'Evening Dresses',
          summerDresses: 'Summer Dresses',
      }
  },
  dresses:{
      casualDresses: 'CASUAL DRESSES',
      eveningDresses: 'EVINING DRESSES',
      summerDresses: 'SUMMER DRESSES',
  },
  T_SHIRTS: 'T-SHIRTS'
}
export const visitsignInPage=(homePageurl)=>{
    cy.visit(homePageurl)
    cy.get(LOCATORS.signInBtn)
      .click({force: true})
}
export const logIn=(email,password)=>{
    cy.get(LOCATORS.email)
      .clear({force: true})
      .type(email)

    cy.get(LOCATORS.password)
      .clear({force: true})
      .type(password)

    cy.get(LOCATORS.submitLogInBtn)
      .click({force: true})    
}
export const verifySubCategoryShown=(categoryLocator)=>{
    cy.get(categoryLocator)
      .trigger('mouseover',{force: true})//why hover does not work ?
      .find(LOCATORS.subCatagory)
      .should('be.visible')
}
export const VerifyGoingToMainCategotyPage = (categoryLocator,catagoryName)=>{
    cy.get(categoryLocator)
      .click({force: true})
    cy.wait(1000)
    cy.get(LOCATORS.categoryName)
      .contains(catagoryName)
      .should('be.visible')
} 
export const verifyChangeViewListMode=(viewListIconLocator, shouldBeGrid)=>{
  cy.get(viewListIconLocator)
    .click({force: true})
  if(shouldBeGrid == true){
    cy.get(LOCATORS.productDescription)
      .should('have.css','display','none')
  }
  else{
    cy.get(LOCATORS.productDescription)
      .should('be.visible')
  }
}
export const checkFiltersCatelogeBox=(catalogs)=>{
      for (let index = 0; index < catalogs.color.length; index++) {
        const element = array[index];
        if(element === COLORS.beige){
          cy.get(LOCATORS.BeigeColorCheckbox)
            .click({force: true})
          verifyEnabledFilterShown(COLORS.beige)   
        }
        else if(element === COLORS.white){
          cy.get(LOCATORS.whiteColorCheckbox)
            .click({force: true})
          verifyEnabledFilterShown(COLORS.white) 
        }
        else if(element === COLORS.black){
          cy.get(LOCATORS.blackColorCheckbox)
            .click({force: true})
          verifyEnabledFilterShown(COLORS.black) 
        }
        else if(element === COLORS.orange){
          cy.get(LOCATORS.orangeColorCheckbox)
            .click({force: true})
          verifyEnabledFilterShown(COLORS.orange)
        }
        else if(element === COLORS.blue){
          cy.get(LOCATORS.blueColorCheckbox)
            .click({force: true})
          verifyEnabledFilterShown(COLORS.blue)
        }
        else if(element === COLORS.green){
          cy.get(LOCATORS.greenColorCheckbox)
            .click({force: true})
          verifyEnabledFilterShown(COLORS.green) 
        }
        else if(element === COLORS.yellow){
          cy.get(LOCATORS.yellowColorCheckbox)
            .click({force: true})
          verifyEnabledFilterShown(COLORS.yellow) 
        }
        else if(element === COLORS.pink){
          cy.get(LOCATORS.pinkColorCheckbox)
            .click({force: true})
          verifyEnabledFilterShown(COLORS.pink) 
        }
      }
    if(catalogs.categories.tShirts){
      enableDisablecheckBox(LOCATORS.topsSubCategoryCheckbox,catalogs.categories.tShirts)
      verifyEnabledFilterShown(CATALOGS_NAME.categories.tShirts)
    }
    if(catalogs.categories.dresses){
      enableDisablecheckBox(LOCATORS.dressesSubCatagoryCheckbox,catalogs.categories.dresses)
      verifyEnabledFilterShown(CATALOGS_NAME.categories.dresses)
    }
    if(catalogs.categories.casualDresses){
      enableDisablecheckBox(LOCATORS.casualDressesCheckbox,catalogs.categories.casualDresses)
      verifyEnabledFilterShown(CATALOGS_NAME.categories.casualDresses)
    }
    if(catalogs.categories.eviningDresses){
      enableDisablecheckBox(LOCATORS.eviningDressesCheckbox,catalogs.categories.eveningDresses)
      verifyEnabledFilterShown(CATALOGS_NAME.categories.eviningDresses)
    }
    if(catalogs.categories.summerDresses){
      enableDisablecheckBox(LOCATORS.summerDressesCheckbox,catalogs.categories.summerDresses)
      verifyEnabledFilterShown(CATALOGS_NAME.categories.summerDresses)
    }
    if(catalogs.size.small){
      enableDisablecheckBox(LOCATORS.smallSizeCheckbox,catalogs.size.small)
      verifyEnabledFilterShown(CATALOGS_NAME.size.small)
    }
    // cy.get(LOCATORS.catalogsBlock)
    //   .find('ul')
    //   .contains(catalogName)
    //   .parent()
    //   .prev()
    //   .find('input')
    //   .check({force: true})
}
export const enableDisablecheckBox =(checkBoxLocator,shouldEnabled)=>{
    if(shouldEnabled == true){
      cy.get(checkBoxLocator)
        .check({force})
        .should('be.checked')
    }
    else{
      cy.get(checkBoxLocator)
        .uncheck({force})
        .should('not.be.checked')
    }
}
export const verifyEnabledFilterShown=(filteredCatalogName)=>{
    cy.get(LOCATORS.enabledFiltersContainer)
      .contains(filteredCatalogName,{timeout: 10000})
      .should('be.visible')
}