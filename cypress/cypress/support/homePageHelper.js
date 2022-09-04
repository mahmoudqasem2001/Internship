
/// <reference types="cypress" />

export const LOCATORS={
    womenCategory: '.sf-menu > :nth-child(1) > a',
    dressesCategory: '.sf-menu > :nth-child(2) > a',
    tShirtCategory: '.sf-menu > :nth-child(3) > a',
    upperBodyProducts: '.submenu-container[title="Tops"]',
    dressesProduct:'.submenu-container[title="Dresses"]',
    gridViewIcon:'.icon-th-large',
    listViewIcon: '.icon-th-list',
    productDescription: '.product-desc',
    enabledFiltersContainer: '#enabled_filters',
    catalogsBlock: '#layered_block_left',
    catagoryName:'.category-name',
}

export const URLS={
    homePage:'http://automationpractice.com/index.php',
}
export const visitUrl=(url)=>{
    cy.visit(url)
}

export const verifySubMenuListShown=(menuListLocator)=>{
    cy.get(menuListLocator)
      .trigger('mouseover',{force: true})//why hover does not work ?
      .find('.submenu-container')
      .should('be.visible')
}
export const VerifyGoingTtoSubListPage = (catagoryLocator,catagoryName)=>{
    cy.get(catagoryLocator)
      .click({force: true})
    cy.wait(1000)
    cy.get(LOCATORS.catagoryName)
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
export const checkCatalogBox=(catalogName)=>{
    cy.get(LOCATORS.catalogsBlock)
      .find('ul')
      .contains(catalogName)
      .parent()
      .prev()
      .find('input')
      .check({force: true})
}
export const verifyEnabledFilterShown=(filteredCatalogName)=>{
    cy.wait(8000)
    cy.get(LOCATORS.enabledFiltersContainer)
      .contains(filteredCatalogName,{timeout: 10000})
      .should('be.visible')
}