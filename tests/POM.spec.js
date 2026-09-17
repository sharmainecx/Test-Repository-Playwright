import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login';
import { ProductsPage } from '../pages/products';
//import {readCSV} from '../utils/csvreader';
import { readData } from '../utils/dataReader';

const loginData = readData('testdata/logindata.csv');

loginData.forEach((data) => {
   test(`Login Test - ${data.username}`, async ({ page }) => {

      const Login = new LoginPage(page);
      const Products = new ProductsPage(page);

      await test.step('Open URL', async () => {
         await Login.gotoUrl();
      })

      await test.step('Enter username and password', async () => {
         await Login.login(data.username, data.password);
      });

      await test.step('Add Items to Cart', async () => {
         await Products.addItems();
      });

      await test.step('Open Shopping Cart', async () => {
         await Products.gotoCart();
      });
   })
});