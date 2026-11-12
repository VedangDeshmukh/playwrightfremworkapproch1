//import{test,expect} from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage'
import { HomePage } from '../src/pages/HomePage'
import { ResultPage } from '../src/pages/ResultPage'
import{test,expect} from '../fixtures/loginfixture'


const searchproductData = [

    {searchkey:"macbook",searchcount:3},
    {searchkey:"samsung",searchcount:2},
    {searchkey:"imac",searchcount:1},
    {searchkey:"autotest",searchcount:0},



]

for(let product of searchproductData){
    test(`verify product is able to search for product =${product.searchkey}`,async({homePage})=>{

    // const loginPage = new LoginPage(page);
    // await loginPage.goToApplication('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // const homePage:HomePage= await loginPage.doLogin("toncrusetest26@gmail.com","Admin@123")
    expect(await homePage.checkLogoutLinkVisisble()).toBeTruthy();

  const resultPage =await homePage.doProductSearch(product.searchkey);
    expect(await resultPage.getSearchCount()).toBe(product.searchcount)
    
})
}
