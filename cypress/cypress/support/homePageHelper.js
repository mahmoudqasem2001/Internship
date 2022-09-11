
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
    largeSizeChecbox:'#layered_id_attribute_group_3',
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
      large: 'L'
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

export const checkFiltersCatalogeBox=(catalog)=>{
    if(catalog.categories != null){
      if(catalog.categories.tops){
        cy.get(CATALOG_LOCATORS.topsSubCategoryCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.categories.dresses){
        cy.get(CATALOG_LOCATORS.dressesSubCatagoryCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.categories.casualDresses){
        cy.get(CATALOG_LOCATORS.casualDressesCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.categories.eviningDresses){
        cy.get(CATALOG_LOCATORS.eviningDressesCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.categories.summerDresses){
        cy.get(CATALOG_LOCATORS.summerDressesCheckbox)
          .check({force: true})
          .should('be.checked')
      }
    }  

    if(catalog.size != null){
      if(catalog.size.small){
      cy.get(CATALOG_LOCATORS.smallSizeCheckbox)
        .check({force: true})
        .should('be.checked')
      }
      if(catalog.size.medium){
        cy.get(CATALOG_LOCATORS.mediumSizeCheckbox)
          .check({force: true})
          .should('be.checked')
        }
      if(catalog.size.large){
      cy.get(CATALOG_LOCATORS.largeSizeChecbox)
        .check({force: true})
        .should('be.checked')
      }
    }

    if(catalog.color != null){
      catalog.color.forEach(element => {
        cy.get(CATALOG_LOCATORS.catalogsBlock)
          .find('ul')
          .contains(element)
          .parent()
          .prev()
          .click({force: true})
      });
    }
    
    if(catalog.compositions != null){
      if(catalog.compositions.cotton){
        cy.get(CATALOG_LOCATORS.contonCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.compositions.polyester){
        cy.get(CATALOG_LOCATORS.polyesterCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.compositions.viscose){
        cy.get(CATALOG_LOCATORS.viscoseCheckbox)
          .check({force: true})
          .should('be.checked')
      }
    }

    if(catalog.styles != null){
      if(catalog.styles.casual){
        cy.get(CATALOG_LOCATORS.casualCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.styles.dressy){
        cy.get(CATALOG_LOCATORS.dressyCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.styles.girly){
        cy.get(CATALOG_LOCATORS.girlyCheckbox)
          .check({force: true})
          .should('be.checked')
      }
    }

    if(catalog.properties != null){
      if(catalog.properties.colorfulDress){
        cy.get(CATALOG_LOCATORS.colorfulDressCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.properties.maxiDress){
        cy.get(CATALOG_LOCATORS.maxiDressCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.properties.midiDress){
        cy.get(CATALOG_LOCATORS.midiDressCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.properties.shortDress){
        cy.get(CATALOG_LOCATORS.shortDressCheckbox)
          .check({force: true})
          .should('be.checked')
      }
      if(catalog.properties.shortSlave){
        cy.get(CATALOG_LOCATORS.shortSlaveCheckbox)
          .check({force: true})
          .should('be.checked')
      }
    }

    if(catalog.availability != null){
      if(catalog.availability.inStock){
        cy.get(CATALOG_LOCATORS.inStockQuantityCheckbox)
          .check({force: true})
          .should('be.checked')
      }
    }

    if(catalog.manufacturer != null){
      if(catalog.manufacturer.fashion){
        cy.get(CATALOG_LOCATORS.fashionManufacturerCheckbox)
          .check({force: true})
          .should('be.checked')
      }
    }

    if(catalog.condition != null){
      if(catalog.condition.new){
        cy.get(CATALOG_LOCATORS.conditionNewCheckbox)
          .check({force: true})
          .should('be.checked')
      }
    }
}

export const verifyEnabledFilterShown=(catalog)=>{
  if(catalog.categories != null){
    if(catalog.categories.tops){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.categories.tops,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.categories.dresses){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.categories.dresses,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.categories.casualDresses){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.categories.casualDresses,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.categories.eviningDresses){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.categories.eviningDresses,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.categories.summerDresses){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.categories.summerDresses,{timeout: 10000})
        .should('be.visible')
    }
  }  

  if(catalog.size != null){
    if(catalog.size.small){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.size.small,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.size.medium){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.size.medium,{timeout: 10000})
        .should('be.visible')
      }
    if(catalog.size.large){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.size.large,{timeout: 10000})
        .should('be.visible')
    }
  }

  if(catalog.color != null){
    catalog.color.forEach(element => {
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(element,{timeout: 10000})
        .should('be.visible')
    });
  }
  
  if(catalog.compositions != null){
    if(catalog.compositions.cotton){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.compositions.cotton,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.compositions.polyester){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.compositions.polyester,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.compositions.viscose){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.compositions.viscose,{timeout: 10000})
        .should('be.visible')
    }
  }

  if(catalog.styles != null){
    if(catalog.styles.casual){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.styles.casual,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.styles.dressy){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.styles.dressy,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.styles.girly){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.styles.girly,{timeout: 10000})
        .should('be.visible')
    }
  }

  if(catalog.properties != null){
    if(catalog.properties.colorfulDress){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.properties.colorfulDress,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.properties.maxiDress){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.properties.maxiDress,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.properties.midiDress){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.properties.midiDress,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.properties.shortDress){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.properties.shortDress,{timeout: 10000})
        .should('be.visible')
    }
    if(catalog.properties.shortSlave){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.properties.shortSlave,{timeout: 10000})
        .should('be.visible')
    }
  }

  if(catalog.availability != null){
    if(catalog.availability.inStock){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.availability.inStock,{timeout: 10000})
        .should('be.visible')
    }
  }

  if(catalog.manufacturer != null){
    if(catalog.manufacturer.fashion){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.manufacturer.fashion,{timeout: 10000})
        .should('be.visible')
    }
  }

  if(catalog.condition != null){
    if(catalog.condition.new){
      cy.get(LOCATORS.enabledFiltersContainer)
        .contains(CATALOGS_NAME.condition.new,{timeout: 10000})
        .should('be.visible')
    }
  }
}
