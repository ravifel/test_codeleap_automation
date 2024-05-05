/// <reference types="cypress"/>

import login_page from "../support/pages/login_page"

const username = 'UserTest';

describe('Login Tests', () => {

    beforeEach('', () => {
        cy.visit('/')
    })

    it('Username Field Empty', () => {
        login_page.click_login_button_disabled();
    })

    it('Login with Success', () => {
        login_page.fill_username_field(username);
        login_page.click_login_button_enabled();
        login_page.validate_success_login();
    })

})