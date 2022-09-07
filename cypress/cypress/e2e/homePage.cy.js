/// <reference types="cypress" />

import * as homePageHelper from '../support/homePageHelper'
import { checkUrl } from './../support/registration_helper';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

const LOG_IN_INFORMATION={
    email: "sampleUser7@gmail.com",
    password: "mahmood12345",
}

const CATALOGS = {
    categories: {
        tShirts: true,
        dresses: false,
        casualDresses:false,
        eviningDresses:true,
        summerDresses:false,
    },
    size: {
        small: true,
        medium: false,
        larg: false,
    },
    color: 
        [
        '',
        'White',
        'Black',
        '',
        'Blue',
        'Green',
        '',
        'Pink'
        ],
    compositions: {
        cotton: false,
        polyester:true,
        viscose: false,
    },
    styles: {
        casual: true,
        dressy: false,
        girly: false,
    },
    properties: {
        colorfulDress: false,
        maxiDress: true,
        midiDress :false,
        shortDress: false,
        shortSlave: false,
    },
    availability: {
        inStock: false,
    },
    manufacturer: {
        fashion: true,
    },
    condition: {
        new: true,
    }
}

describe('Home page', () => {

    before('go to login page', () => {
        homePageHelper.visitsignInPage(homePageHelper.URLS.homePage)
    })
    it.only('Valid Login',()=>{
        homePageHelper.logIn(LOG_IN_INFORMATION.email,LOG_IN_INFORMATION.password)
        checkUrl(homePageHelper.URLS.myAccountPage)
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