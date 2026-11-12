import{test as base,expect,Page} from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage'
import { HomePage } from '../src/pages/HomePage'


type myFixture = {
    homePage : HomePage
}

export const test = base.extend<myFixture>({
         homePage : async({page,baseURL},use,testinfo)=>{
                    const loginPage = new LoginPage(page);
                    await loginPage.goToApplication(baseURL+`/opencart/index.php?route=account/login`)
                    const username:string = testinfo.project.metadata.username;
                    const password:string=testinfo.project.metadata.password;
                  const homePage= await loginPage.doLogin(username,password);
                  expect(await homePage.checkLogoutLinkVisisble()).toBeTruthy();

                  await use(homePage);
                  
            }
        })

export{expect}        