import{expect,Locator,Page} from '@playwright/test'
import { ElementUtil } from '../../utils/ElementUtil';


export class ProductInfoPage{

    private readonly page;
    private eleUtil:ElementUtil;



    private readonly productImages:Locator;
    private readonly productHeadr:Locator;
    private readonly productMetaData:Locator;
    private readonly productPriceData:Locator;

    private readonly productmap = new Map<string,string|number>()

    constructor(page:Page){
        this.page = page;
        this.eleUtil = new ElementUtil(this.page)

        this.productImages = page.locator(`.thumbnails>li`);
        this.productHeadr = page.locator('h1');
        this.productMetaData = page.locator(`(//div[@class='col-sm-4']/ul[@class='list-unstyled'])[1]/li`);
        this.productPriceData = page.locator(`(//div[@class='col-sm-4']/ul[@class='list-unstyled'])[2]/li`);
        


    }

    public async getProductHeader():Promise<string>{
      const header:string=  await this.eleUtil.getText(this.productHeadr);
      console.log("geth the Product Header=",header)
      return header;
    }

    public async getImagesCount():Promise<number>{
        await this.eleUtil.waitForElementVisible(this.productImages)
       return await this.productImages.count();
    }

    async getProductFullDetails():Promise<Map<string,string|number>>{

     const header:string = await this.getProductHeader();
     this.productmap.set("productheader",header)

     this.productmap.set("imagecount",await this.getImagesCount())

        await this.getProductMetaData();
        await this.getProductPrice();

        console.log(`Full Product Details for Product:",${this.getProductHeader()}`)
        await this.displayproductData();

        return this.productmap;
    }

    private async displayproductData(){
        for(const[key,value] of this.productmap){
            console.log(key,value)
        }
    }


    private async getProductMetaData(){
     //  let productdetails:string[] = await this.eleUtil.getAllTextList(this.productMetaData);
              let productdetails:string[] = await this.productMetaData.allInnerTexts();
       console.log('size of product details :',productdetails.length);
                for(let productdata of productdetails){
                    let metadata:string[] = productdata.split(":")
                    let metakey:string = metadata[0].trim();
                    let metavalue:string= metadata[1].trim();

                    this.productmap.set(metakey,metavalue)
                }

    }


    private async getProductPrice(){
      let productpriceData:string[] = await this.productPriceData.allInnerTexts();
      let productprice = productpriceData[0].trim();
      let producttaxprice = productpriceData[1].split(":")[1].trim();

      this.productmap.set('price',productprice);
      this.productmap.set('taxprice',producttaxprice);

    }




}