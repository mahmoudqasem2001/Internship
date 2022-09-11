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
        tops: true,
        dresses: false,
        casualDresses:false,
        eviningDresses:false,
        summerDresses:false,
    },
    size: {
        small: true,
        medium: false,
        large: false,
    },
    color:[ 
        'Beige',
        'White',
        'Black',
        'Orange',
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

    before('vaild login ', () => {
        homePageHelper.visitsignInPage(homePageHelper.URLS.homePage)
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

    it.only('Verify enabled filters shown', () => {
        homePageHelper.verifyEnabledFilterShown(CATALOGS)
    })

    it('Verify enable grid mode', () => {
        homePageHelper.verifyChangeViewListMode(homePageHelper.LOCATORS.gridViewIcon, true)
    })
    it('Verify enable list mode', () => {
        homePageHelper.verifyChangeViewListMode(homePageHelper.LOCATORS.listViewIcon, false)
    })

})