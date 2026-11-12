import{expect,Locator,Page} from '@playwright/test'
import { ElementUtil } from '../../utils/ElementUtil';
import { HomePage } from './HomePage';
import { RegistractionPage } from './RegistractionPage';

export class LoginPage{

    private readonly page;
    private eleUtil:ElementUtil;
    private readonly emailFiled:string;
    private readonly passwordFiled:string;
    private readonly loginBtn:Locator;
    private readonly warningMessage:Locator;
    private readonly registerLink:Locator;

    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(this.page)
        this.emailFiled = "#input-email";
        this.passwordFiled = "#input-password";
        this.loginBtn = this.page.getByRole('button',{name:'Login'});
        this.warningMessage = this.page.getByText('Warning: No match for E-Mail');
        this.registerLink = this.page.getByRole('link',{name:'Register'});
    }

    public async goToApplication(url:string):Promise<void>{
        await this.page.goto(url)
    }

    public async getWareningMessage():Promise<string|null>{
           const message:string|null =await this.eleUtil.getText(this.warningMessage);
           console.log('get the warning message =',message)
           return message;
    }

    public async doLogin(username:string,password:string):Promise<HomePage>{
           await this.eleUtil.fillText(this.emailFiled,username);
           await this.eleUtil.fillText(this.passwordFiled,password);
           await this.eleUtil.click(this.loginBtn);

            
         const title:string = await this.page.title();
         console.log('get the title of page =',title)
           return new HomePage(this.page);
    }

    public async navigateToRigister():Promise<RegistractionPage>{
        await this.eleUtil.click(this.registerLink,0);
        return new RegistractionPage(this.page)
    }



}