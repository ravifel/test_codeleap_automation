/// <reference types="cypress"/>

const elements = {
    fields: {
        username: 'input'
    },
    buttons: {
        enter: '.btn-fill'
    },
    validates: {
        inside_posts_page: '.standard-form > :nth-child(2) > p'
    }
}

export default {
    fill_username_field(username) {
        cy.get(elements.fields.username)
            .should('be.visible')
            .type(username)
    },

    click_login_button_enabled() {
        cy.get('.btn-fill')
            .should('be.enabled')
            .and('not.be.disabled')
            .click()
    },

    click_login_button_disabled() {
        cy.get('.btn-fill')
            .should('be.disabled')
    },

    validate_success_login() {
        cy.get(elements.validates.inside_posts_page)
            .should('be.visible')
            .should('have.text', 'Title')
    }
}