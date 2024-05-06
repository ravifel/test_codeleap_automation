/// <reference types="cypress"/>

const elements = {
    fields: {
        title: 'input',
        content: 'textarea',
        title_edit: ':nth-child(1) > input',
        content_edit: ':nth-child(2) > textarea'
    },
    buttons: {
        create_post: '.btn-fill',
        confirmation_edit_post: '#b66adc8c-dfb3-44a9-a8ac-bf5352b371ad > form > button'
    },
    icons: {
        edit_post: '[aria-label="Edit your post Teste Post 18"]',
        delete_post: '[aria-label="Delete your post Teste Post 20"] > path'
    },
    validates: {
        post_created: '[aria-describedby="post-69070-description"] > .header > h2',
        confirmation_message_delete_browser: 'Are you sure you want to delete this item?'
    }
}

export default {
    click_button_create_post_enabled() {
        cy.get(elements.buttons.create_post)
            .should('be.enabled')
            .and('not.be.disabled')
            .click()
    },

    click_button_create_post_disabled() {
        cy.get(elements.buttons.create_post)
            .should('be.disabled')
    },

    fill_title_field(post_title) {
        cy.get(elements.fields.title)
            .should('be.visible')
            .type(post_title)
    },

    fill_content_field(post_content) {
        cy.get(elements.fields.content)
            .should('be.visible')
            .type(post_content)
    },

    post_created_with_success(post_title) {
        cy.get(elements.validates.post_created)
            .should('be.visible')
            .should('have.text', post_title)
    },

    click_icon_edit_post() {
        cy.get(elements.icons.edit_post)
            .should('be.visible')
            .click();
    },

    edit_title_field(post_title_edited) {
        cy.get(elements.fields.title_edit)
            .should('be.visible')
            .clear()
            .type(post_title_edited)
    },

    edit_content_field(post_content_edited) {
        cy.get(elements.fields.content_edit)
            .should('be.visible')
            .clear()
            .type(post_content_edited)
    },

    click_button_edit_post_confirmation() {
        cy.get(elements.buttons.confirmation_edit_post)
            .should('be.visible')
            .click()
    },

    delete_post() {
        cy.get(elements.icons.delete_post)
            .should('be.visible')
            .click();

        cy.on('window:alert', (text) => {
            expect(text).to.contains(elements.validates.confirmation_message_delete_browser);
        });
    },

    validate_display_posts_of_others_users(username) {
        cy.get('#root > div > main > section > article:nth-child(18) > section > span > h3')
            .should('be.visible')
            .should('not.have.text', username)
    }

}