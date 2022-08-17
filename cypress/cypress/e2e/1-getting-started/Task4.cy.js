/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

const array = ['buy', 'play', 'sleep'];
const array2 = ['shopping', 'eat'];

describe.only('To Do List', () => {

    before('visit URL', () => {
        cy.visit('https://example.cypress.io/todo')

    })


    it(' adding new items', () => {
        for (let index = 0; index < array.length; index++) {
            //cy.wait(1000)
            const element = array[index]
            cy.get('[data-test=new-todo]').type(`${element}{enter}`, { delay: 100 })
            cy.get('.todo-list li').should('have.length', index + 3)
                .last()
                .should('have.text', element)

        }
    })


    it.skip('Verify items added', () => {

        cy.get('.todo-list').within(() => {
            array.forEach(element => {
                cy.get('li').contains(element).should('exist').should('be.visible')
            })

        })
    })
    //---------Check----------//
    it('verify items checked', () => {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            cy.get('.todo-list li').contains(element).parents('li').within(() => {
                cy.get('input').check({ force: true })
                cy.get('input').should('be.checked')

            })
        }

    })
    it('can show completed items', () => {
        cy.get('[href="#/completed"]').click({ force: true })

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            cy.get('.todo-list li').contains(element).parents('li').within(() => {
                cy.get('input').should('be.checked')

            })
        }
    })

    it('show all items added', () => {
        cy.get('[href="#/"]').contains('All').click({ force: true })
        array.forEach(element => {
            cy.get('.todo-list li').contains(element).parents('li').should('exist').should('be.visible')
        })
    })

    it('verify items active', () => {
        cy.get('[href="#/active"]').click({ force: true })
            cy.get('.todo-list li').find('input').should('not.be.checked')
    })







    ///-----uncheck--------//
    it(' unchecking items', () => {

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            cy.get('.todo-list li').contains(element).parents('li').within(() => {
                cy.get('input').uncheck({ force: true })
                cy.get('input').should('not.be.checked')

            })
        }
    })




    it.skip('check if number of items is increased', () => {
        for (let index = 0; index < array2.length; index++) {
            //cy.wait(1000)
            const element = array2[index]
            cy.get('[data-test=new-todo]').type(`${element}{enter}`, { delay: 100 })
            cy.get('.todo-list li').should('have.length', index + 5)
                .last()
                .should('have.text', element)
            cy.contains('items left').get('strong').should('have.html', `${index + 5}`)//is this line essntional??

        }


    })


})

describe.skip('using beforeEach', () => {
    const element = 'buy'
    beforeEach('add  "buy" item and check it', () => {
        cy.visit('https://example.cypress.io/todo')
        cy.get('[data-test=new-todo]').type(`${element}{enter}`)

        cy.contains('Pay electric bill')
            .parent()
            .find('input[type=checkbox]')
            .check()
    })

    it('verify items checked', () => {
        cy.contains('Pay electric bill')
            .parents('li')
            .should('have.class', 'completed')
    })


    it.only('check if number of items is increased', () => {
        cy.get('[data-test=new-todo]').type('work{enter}', { force: true })
        cy.contains('items left').get('strong').should('have.html', '3')//is this line essntional??
    })
    
    it('verify items completed', () => {
        cy.get('[href="#/completed"]').click({ force: true })

    })

    it('verify items active', () => {
        cy.get('[href="#/active"]').click({ force: true })


    })
    it('show clear botton', () => {
        //---remove the first check---//
        cy.contains('Pay electric bill')
            .parent()
            .find('input[type=checkbox]')
            .uncheck()
        //----make a check to anothor element----//
        cy.get('input').eq(3).check()
        cy.contains('Clear completed').should('have.css', 'display', 'block')
    })
    it('verify deleting an item', () => {
        cy.get('.destroy.todo-button').eq(0).click({ force: true })

    })

    it('verify check all items ', () => {
        cy.get('[for="toggle-all"]').click({ force: true })
        cy.get('input[type=checkbox]').should('be.checked')
    })

})

