import { LoginPage } from '../src/pages/LoginPage'
import { HomePage } from '../src/pages/HomePage';

import{test,expect} from '../fixtures/loginfixture'




test('verify the login to the application',async({homePage})=>{

    //     let loginPage = new LoginPage(page);
    //     await loginPage.goToApplication('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    //   const homePage:HomePage= await loginPage.doLogin("toncrusetest26@gmail.com","Admin@123")
    //   expect(await homePage.checkLogoutLinkVisisble()).toBeTruthy();
    //  // expect(atcualtile).toEqual('My Account')

     expect(await homePage.page.title()).toEqual('My Account');

})

test('verify the in-valid login to the application',async({page})=>{

        let loginPage = new LoginPage(page);
        await loginPage.goToApplication('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
       await loginPage.doLogin("tsetest26@gmail.com","An@123")
        const message:string|null = await loginPage.getWareningMessage();
      expect(message).toBe(' Warning: No match for E-Mail Address and/or Password.')

})