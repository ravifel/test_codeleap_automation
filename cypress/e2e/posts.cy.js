/// <reference types="cypress"/>

import login_page from "../support/pages/login_page"
import posts_page from "../support/pages/posts_page"

const username = 'UserTest';
const post_title = 'Title Post Test'
const post_title_edited = 'Title Post Test Edited'
const post_content = 'Lorem ipsum dolor sit amet. Est inventore asperiores ea optio quia et consequatur incidunt est eius reiciendis ea expedita iure. Est eaque commodi in iure alias sed facilis ducimus nam laboriosam quam qui quos voluptas est ipsa voluptatibus. In internos enim est voluptatibus dolor sit voluptatum alias?'
const post_content_edited = 'Content Edited - Lorem ipsum dolor sit amet. Est inventore asperiores ea optio quia et consequatur incidunt est eius.'
const url_base = 'https://codeleap-frontend-test.netlify.app/'

describe('Posts Tests', () => {

    beforeEach('', () => {
        cy.visit('/')
        login_page.fill_username_field(username);
        login_page.click_login_button_enabled();
        cy.url().should('be.equal', 'https://codeleap-frontend-test.netlify.app/posts')
    })

    it('Validation of the attempt to create a Post without filled fields', () => {
        posts_page.click_button_create_post_disabled();
    })

    it('Validation of the attempt to create a Post with an empty Title field', () => {
        posts_page.fill_title_field(post_title);
        posts_page.click_button_create_post_disabled();
    })

    it('Validation of the attempt to create a Post with an empty Content field', () => {
        posts_page.fill_content_field(post_content);
        posts_page.click_button_create_post_disabled();
    })

    it('Validation of a successfully created Post', () => {
        posts_page.fill_title_field(post_title);
        posts_page.fill_content_field(post_content);
        posts_page.click_button_create_post_enabled();
        posts_page.post_created_with_success(post_title);
    })

    it('Validating the deletion of a post', () => {
        posts_page.delete_post();
    })

    it('Validation of editing only the "Title" of a post', () => {
        posts_page.click_icon_edit_post();
        posts_page.edit_title_field(post_title_edited);
        posts_page.click_button_edit_post_confirmation();
    })

    it('Validation of editing only the "Content" of a post', () => {
        posts_page.click_icon_edit_post();
        posts_page.edit_content_field(post_content_edited);
        posts_page.click_button_edit_post_confirmation();
    })

    it('Validation of editing the "Title" and "Content" of a post', () => {
        posts_page.click_icon_edit_post();
        posts_page.edit_title_field(post_title_edited);
        posts_page.edit_content_field(post_content_edited);
        posts_page.click_button_edit_post_confirmation();
    })

    it('Validate the display of posts from other users', () => {
        posts_page.delete_post();
    })

})