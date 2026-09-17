import {test, expect} from '@playwright/test';

import {LoginPage} from '../pages/login';
import { ProductsPage } from '../pages/products';
import {readCSV} from '../utils/csvreader';

 const loginData = readCSV('testdata/logindata.csv');

 loginData.forEach((data) => {
    test(`Login Test - ${data.username}`, async ({page}) => {

    const Login = new LoginPage(page);
    const Products = new ProductsPage(page);

    await Login.gotoUrl();
    await Login.login(data.username, data.password);
    await Products.addItems();
    await Products.gotoCart();
    })
 });