import {text, expect} from '@playwright/test';


export class LoginPage {

    constructor (page) {
        this.page = page;
        this.username_txtbox = page.locator('//input[@id="user-name"]');
        this.password_txtbox = page.locator('//input[@id="password"]');
        this.loginBtn = page.locator('//input[@id="login-button"]');
    }

    async gotoUrl(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password){
        await this.username_txtbox.fill(username);
        await this.password_txtbox.fill(password);
        await this.loginBtn.click();
    }
}