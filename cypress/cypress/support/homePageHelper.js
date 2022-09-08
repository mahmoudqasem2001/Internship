
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
    categoryName:'.category-name',
    subCatagory: '.submenu-container',
    email:'#email',
    password:'#passwd',
    signInBtn:'.login',
    submitLogInBtn:'#SubmitLogin',
    
}

export const CATALOG_LOCATORS={
      catalogsBlock: '#layered_block_left',
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
  size: {
      small: 'S',
      medium: 'M',
      larg: 'L'
  },
  color: {
    beige:'Beige',
    white:'White',
    black:'Black',
    orange:'Orange',
    blue:'Blue',
    green:'Green',
    yellow:'Yellow',
    pink:'Pink',
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
export const IS_COLOR=true;
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
export const verifyEnabledFilterShown=(catalog)=>{
    checkFiltersCatalogeBox(CATALOGS_NAME.categories.tops,catalog.categories.tops)
    shouldFilteredCatalogVisible(CATALOGS_NAME.categories.tops,catalog.categories.tops)

    checkFiltersCatalogeBox(CATALOGS_NAME.categories.dresses,catalog.categories.dresses)
    shouldFilteredCatalogVisible(CATALOGS_NAME.categories.dresses,catalog.categories.dresses)
    
    checkFiltersCatalogeBox(CATALOGS_NAME.categories.casualDresses,catalog.categories.casualDresses)
    shouldFilteredCatalogVisible(CATALOGS_NAME.categories.casualDresses,catalog.categories.casualDresses)

    checkFiltersCatalogeBox(CATALOGS_NAME.categories.eviningDresses,catalog.categories.eviningDresses)
    shouldFilteredCatalogVisible(CATALOGS_NAME.categories.eviningDresses,catalog.categories.eviningDresses)

    checkFiltersCatalogeBox(CATALOGS_NAME.categories.summerDresses,catalog.categories.summerDresses)
    shouldFilteredCatalogVisible(CATALOGS_NAME.categories.summerDresses,catalog.categories.summerDresses)

    checkFiltersCatalogeBox(CATALOGS_NAME.size.small,catalog.size.small)
    shouldFilteredCatalogVisible(CATALOGS_NAME.size.small,catalog.size.small)

    checkFiltersCatalogeBox(CATALOGS_NAME.size.medium,catalog.size.medium)
    shouldFilteredCatalogVisible(CATALOGS_NAME.size.medium,catalog.size.medium)

    checkFiltersCatalogeBox(CATALOGS_NAME.size.larg,catalog.size.larg)
    shouldFilteredCatalogVisible(CATALOGS_NAME.size.larg,catalog.size.larg)

    checkFiltersCatalogeBox(CATALOGS_NAME.color.beige,catalog.color.beige, IS_COLOR)
    shouldFilteredCatalogVisible(CATALOGS_NAME.color.beige,catalog.color.beige)

    checkFiltersCatalogeBox(CATALOGS_NAME.color.white,catalog.color.white, IS_COLOR)
    shouldFilteredCatalogVisible(CATALOGS_NAME.color.white,catalog.color.white)

    checkFiltersCatalogeBox(CATALOGS_NAME.color.black,catalog.color.black, IS_COLOR)
    shouldFilteredCatalogVisible(CATALOGS_NAME.color.black,catalog.color.black)

    checkFiltersCatalogeBox(CATALOGS_NAME.color.orange,catalog.color.orange, IS_COLOR)
    shouldFilteredCatalogVisible(CATALOGS_NAME.color.orange,catalog.color.orange)

    checkFiltersCatalogeBox(CATALOGS_NAME.color.blue,catalog.color.blue, IS_COLOR)
    shouldFilteredCatalogVisible(CATALOGS_NAME.color.blue,catalog.color.blue)

    checkFiltersCatalogeBox(CATALOGS_NAME.color.green,catalog.color.green, IS_COLOR)
    shouldFilteredCatalogVisible(CATALOGS_NAME.color.green,catalog.color.green)

    checkFiltersCatalogeBox(CATALOGS_NAME.color.yellow,catalog.color.yellow, IS_COLOR)
    shouldFilteredCatalogVisible(CATALOGS_NAME.color.yellow,catalog.color.yellow)

    checkFiltersCatalogeBox(CATALOGS_NAME.color.pink,catalog.color.pink, IS_COLOR)
    shouldFilteredCatalogVisible(CATALOGS_NAME.color.pink,catalog.color.pink)

    checkFiltersCatalogeBox(CATALOGS_NAME.compositions.cotton,catalog.compositions.cotton)
    shouldFilteredCatalogVisible(CATALOGS_NAME.compositions.cotton,catalog.compositions.cotton)

    checkFiltersCatalogeBox(CATALOGS_NAME.compositions.polyester,catalog.compositions.polyester)
    shouldFilteredCatalogVisible(CATALOGS_NAME.compositions.polyester,catalog.compositions.polyester)

    checkFiltersCatalogeBox(CATALOGS_NAME.compositions.viscose,catalog.compositions.viscose)
    shouldFilteredCatalogVisible(CATALOGS_NAME.compositions.viscose,catalog.compositions.viscose)

    checkFiltersCatalogeBox(CATALOGS_NAME.styles.casual,catalog.styles.casual)
    shouldFilteredCatalogVisible(CATALOGS_NAME.styles.casual,catalog.styles.casual)

    checkFiltersCatalogeBox(CATALOGS_NAME.styles.dressy,catalog.styles.dressy)
    shouldFilteredCatalogVisible(CATALOGS_NAME.styles.dressy,catalog.styles.dressy)

    checkFiltersCatalogeBox(CATALOGS_NAME.styles.girly,catalog.styles.girly)
    shouldFilteredCatalogVisible(CATALOGS_NAME.styles.girly,catalog.styles.girly)

    checkFiltersCatalogeBox(CATALOGS_NAME.properties.colorfulDress,catalog.properties.colorfulDress)
    shouldFilteredCatalogVisible(CATALOGS_NAME.properties.colorfulDress,catalog.properties.colorfulDress)

    checkFiltersCatalogeBox(CATALOGS_NAME.properties.maxiDress,catalog.properties.maxiDress)
    shouldFilteredCatalogVisible(CATALOGS_NAME.properties.maxiDress,catalog.properties.maxiDress)

    checkFiltersCatalogeBox(CATALOGS_NAME.properties.midiDress,catalog.properties.midiDress)
    shouldFilteredCatalogVisible(CATALOGS_NAME.properties.midiDress,catalog.properties.midiDress)

    checkFiltersCatalogeBox(CATALOGS_NAME.properties.shortDress,catalog.properties.shortDress)
    shouldFilteredCatalogVisible(CATALOGS_NAME.properties.shortDress,catalog.properties.shortDress)

    checkFiltersCatalogeBox(CATALOGS_NAME.properties.shortSlave,catalog.properties.shortSlave)
    shouldFilteredCatalogVisible(CATALOGS_NAME.properties.shortSlave,catalog.properties.shortSlave)

    checkFiltersCatalogeBox(CATALOGS_NAME.availability.inStock,catalog.availability.inStock)
    shouldFilteredCatalogVisible(CATALOGS_NAME.availability.inStock,catalog.availability.inStock)

    checkFiltersCatalogeBox(CATALOGS_NAME.manufacturer.fashion,catalog.manufacturer.fashion)
    shouldFilteredCatalogVisible(CATALOGS_NAME.manufacturer.fashion,catalog.manufacturer.fashion)

    checkFiltersCatalogeBox(CATALOGS_NAME.condition.new,catalog.condition.new)
    shouldFilteredCatalogVisible(CATALOGS_NAME.condition.new,catalog.condition.new)

  
}
export const checkFiltersCatalogeBox=(catalogName, shouldCheckCatalog, isColor)=>{
    if(isColor == true){
      if(shouldCheckCatalog != false){
        cy.get(CATALOG_LOCATORS.catalogsBlock)
          .find('ul')
          .contains(catalogName)
          .parent()
          .prev()
          .click({force: true})
      }
    }
    else{
      if(shouldCheckCatalog == true){
        cy.get(CATALOG_LOCATORS.catalogsBlock)
          .find('ul')
          .contains(catalogName)
          .parent()
          .prev()
          .find('input')
          .check({force: true})
      }
    }  
}
export const shouldFilteredCatalogVisible=(filterdCatalogName, shouldBeFilterd)=>{
  //cy.wait(3000)
  if(shouldBeFilterd == true){
    cy.get(LOCATORS.enabledFiltersContainer)
      .contains(filterdCatalogName,{timeout: 10000})
      .should('be.visible')
  }
}
