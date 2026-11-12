import{test,expect} from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage'
import { RegistractionPage } from '../src/pages/RegistractionPage';
import fs from 'fs'
import{faker} from '@faker-js/faker'
import{parse} from 'csv-parse/sync'


type regdata ={
    firstName: string,
    lastName: string,
    telephone: string,
    password: string,
    subscribeNewsletter: string
}

   const file = fs.readFileSync('./testdata/registractiondata.csv','utf-8')
    const userdata:regdata[] = parse(file,{
        columns:true,
        skip_empty_lines:true,
        trim:true
    })

for(let user of userdata){
    test(`verify the user registraction for user ${user.firstName}`,async({page,baseURL})=>{

    const loginPage = new LoginPage(page);
    await loginPage.goToApplication(baseURL+'/opencart/index.php?route=account/login');
    const registerPage =await loginPage.navigateToRigister();
    let email = faker.internet.email();
    const isUserRegistered: boolean =  await registerPage.registerUser(
        user.firstName,
        user.lastName,
        email,
        user.telephone,
        user.password,
        user.subscribeNewsletter);
    expect(isUserRegistered).toBeTruthy();

})
}


