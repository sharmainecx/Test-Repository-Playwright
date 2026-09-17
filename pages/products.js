import {test, expect} from '@playwright/test';

export class ProductsPage{
    constructor(page){
        this.page=page;

        this.backpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.tshirtBtn = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.redshirtBtn = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.cartBtn = page.locator('[data-test="shopping-cart-link"]');
    }

    async addItems(){
        await this.backpackBtn.click();
        await this.tshirtBtn.click();
        await this.redshirtBtn.click();

    }

    async gotoCart(){
        await this.cartBtn.click();
    }
}