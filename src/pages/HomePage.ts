import { Locator, Page } from "@playwright/test";
import { ElementUtil } from "../../utils/ElementUtil";
import{ResultPage} from "../pages/ResultPage"
import { LoginPage } from "./LoginPage";

export class HomePage{

     page:Page;
    private eleUtil:ElementUtil;

    private readonly searchbox:Locator;
    private readonly searchicon:Locator;
    private readonly logoutlink:Locator;
    private readonly loginlink:string;

    
    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(this.page)

        this.searchbox = this.page.getByRole('textbox', { name: 'Search' });
        this.searchicon = this.page.getByRole('button').filter({ hasText: /^$/ });
        this.logoutlink = this.page.getByRole('link', { name: 'Logout' })
        this.loginlink = `//a[text()='Login']`
    }

    public async checkLogoutLinkVisisble():Promise<boolean>{
       return await this.eleUtil.isVisible(this.logoutlink,0);
    }

    public async doProductSearch(productname:string):Promise<ResultPage>{

        await this.eleUtil.fillText(this.searchbox,productname);
        await this.eleUtil.click(this.searchicon);
        return new ResultPage(this.page)
    }
    public async doLogOut():Promise<LoginPage>{
        await this.eleUtil.click(this.logoutlink,0);
        await this.eleUtil.click(this.loginlink,0)
        return new LoginPage(this.page)
    }


    



}