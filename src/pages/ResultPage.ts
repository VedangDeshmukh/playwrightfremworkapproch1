import{expect,Locator,Page} from '@playwright/test'
import { ElementUtil } from '../../utils/ElementUtil';
import { ProductInfoPage } from './ProductInfoPage';


export class ResultPage{

    private readonly page;
    private eleUtil:ElementUtil;

    private readonly productresult:string;

    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(this.page)
        this.productresult = ".product-thumb";

    }


    public async getSearchCount():Promise<number>{
        return  await this.page.locator(this.productresult).count();
    }

    public async selectProduct(productname:string):Promise<ProductInfoPage>{
        await this.page.getByText(`${productname}`).click();
        console.log('click on the product=',productname)
        return new ProductInfoPage(this.page)



    }


}