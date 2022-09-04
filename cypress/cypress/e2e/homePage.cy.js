/// <reference types="cypress" />

import * as homePageHelper from '../support/homePageHelper'
import { checkUrl } from './../support/registration_helper';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

const CATEGORIES = {
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
    DRESSES:'Dresses',
    T_SHIRTS: 'T-shirts'
}
const CATALOGS = {
    categories: {
        tShirts: 'T-shirts',
        blouses: 'Blouses'
    },
    size: {
        small: 'S',
        medium: 'M',
        larg: 'L'
    },
    color: {
        white: 'White',
        black: 'Black'
    },
    compositions: {
        cotton: 'Cotton'
    },
    styles: {
        casual: 'Casual'
    },
    properties: {
        shortSlave: 'Short Sleeve'
    },
    availability: {
        inStock: 'In stock'
    },
    manufacturer: {
        fashion: 'Fashion Manufacturer'
    },
    condition: {
        new: 'New'
    }
}

describe('Home page', () => {

    before('visit home page', () => {
        homePageHelper.visitUrl(homePageHelper.URLS.homePage)
    })

    it("Verify sub menu lists shown ", () => {
        homePageHelper.verifySubMenuListShown(homePageHelper.LOCATORS.womenCategory)
        homePageHelper.verifySubMenuListShown(homePageHelper.LOCATORS.dressesCategory)
    })

    it('Verify going to sub list pages ', () => {//I have a Question here  
        homePageHelper.VerifyGoingTtoSubListPage(homePageHelper.LOCATORS.tShirtCategory,CATEGORIES.T_SHIRTS)
        homePageHelper.VerifyGoingTtoSubListPage(homePageHelper.LOCATORS.dressesCategory,CATEGORIES.DRESSES)
    })

    it('Verify enabled filters shown', () => {
        homePageHelper.checkCatalogBox(CATALOGS.size.small)
        homePageHelper.verifyEnabledFilterShown(CATALOGS.size.small)

        homePageHelper.checkCatalogBox(CATALOGS.styles.casual)
        homePageHelper.verifyEnabledFilterShown(CATALOGS.styles.casual)

        homePageHelper.checkCatalogBox(CATALOGS.condition.new)
        homePageHelper.verifyEnabledFilterShown(CATALOGS.condition.new)

    })

    it('Verify enable grid mode', () => {
        homePageHelper.verifyChangeViewListMode(homePageHelper.LOCATORS.gridViewIcon, true)
    })
    it('Verify enable list mode', () => {
        homePageHelper.verifyChangeViewListMode(homePageHelper.LOCATORS.listViewIcon, false)
    })

})