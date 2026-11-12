//import { test, expect } from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage';
import { HomePage } from '../src/pages/HomePage';
import { ResultPage } from '../src/pages/ResultPage';
import { ProductInfoPage } from '../src/pages/ProductInfoPage';
import{test,expect} from '../fixtures/loginfixture'


test('verify the product header', async ({ homePage }) => {

    // let loginPage = new LoginPage(page);
    // await loginPage.goToApplication('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // const homePage: HomePage = await loginPage.doLogin("toncrusetest26@gmail.com", "Admin@123")
    // expect(await homePage.checkLogoutLinkVisisble()).toBeTruthy();
    let ResultPage = await homePage.doProductSearch("macbook");
    const productInfoPage = await ResultPage.selectProduct("MacBook Pro");

    let product_header: string | null = await productInfoPage.getProductHeader();
    expect(product_header).toBe("MacBook Pro")

})

test('verify the product images', async ({ homePage }) => {

    // let loginPage = new LoginPage(page);
    // await loginPage.goToApplication('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // const homePage: HomePage = await loginPage.doLogin("toncrusetest26@gmail.com", "Admin@123")
    // expect(await homePage.checkLogoutLinkVisisble()).toBeTruthy();
    let ResultPage = await homePage.doProductSearch("macbook");
    const productInfoPage = await ResultPage.selectProduct("MacBook Pro");

    let productimage_count: number = await productInfoPage.getImagesCount();
    expect(productimage_count).toBe(4)

})


const productdata = [{
    
}]

test('verify the product details meta data', async ({ homePage }) => {

    // let loginPage = new LoginPage(page);
    // await loginPage.goToApplication('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // const homePage: HomePage = await loginPage.doLogin("toncrusetest26@gmail.com", "Admin@123")
    // expect(await homePage.checkLogoutLinkVisisble()).toBeTruthy();
    let ResultPage = await homePage.doProductSearch("macbook");
    const productInfoPage = await ResultPage.selectProduct("MacBook Pro");

    const productfulldetails: Map<string, string | number> = await productInfoPage.getProductFullDetails();

    expect.soft(productfulldetails.get('productheader')).toBe("MacBook Pro");
    expect.soft(productfulldetails.get('Brand')).toBe("Apple");

    expect.soft(productfulldetails.get('Product Code')).toBe("Product 18");

    expect.soft(productfulldetails.get('Reward Points')).toBe("800");
        expect.soft(productfulldetails.get('Availability')).toBe("Out Of Stock");


})

test('verify the product price data', async ({ homePage }) => {

    // let loginPage = new LoginPage(page);
    // await loginPage.goToApplication('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // const homePage: HomePage = await loginPage.doLogin("toncrusetest26@gmail.com", "Admin@123")
    // expect(await homePage.checkLogoutLinkVisisble()).toBeTruthy();
    let ResultPage = await homePage.doProductSearch("macbook");
    const productInfoPage = await ResultPage.selectProduct("MacBook Pro");

    const productfulldetails: Map<string, string | number> = await productInfoPage.getProductFullDetails();

    expect.soft(productfulldetails.get('price')).toBe("$2,000.00");
    expect.soft(productfulldetails.get('taxprice')).toBe("$2,000.00");




})