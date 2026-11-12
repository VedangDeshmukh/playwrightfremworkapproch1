import { Locator, Page, expect } from '@playwright/test'
import { time } from 'node:console';


type flexibleLocator = string | Locator;

export class ElementUtil {

    private page: Page;
    private defaultTimeOut: number = 3000;

    constructor(page: Page, timeoute: number = 3000) {
        this.page = page;
        this.defaultTimeOut = timeoute;
    }


    public getLocator(locator: flexibleLocator, index?: number): Locator {

        if (typeof locator === 'string') {
            if (index) {
                return this.page.locator(locator).nth(index);
            } else {
                return this.page.locator(locator).first();
            }
        } else {
            if (index) {
                return locator.nth(index)
            } else {
                return locator.first();
            }
        }
    }

    public async fillText(locator: flexibleLocator, text: string, timeoute?: number, index?: number): Promise<void> {
       await this.getLocator(locator, index).fill(text, { timeout: timeoute || this.defaultTimeOut })
        console.log(`filled the text on elemnt ${locator}`)
    }

    public async fillTextSequentely(locator: flexibleLocator, text: string, delay?: number, index?: number, timeout?: number) {
       await this.getLocator(locator, index).pressSequentially(text, { delay: delay, timeout: timeout || this.defaultTimeOut })
    }

    public async click(locator: flexibleLocator, timeout?: number, index?: number): Promise<void> {
       await this.getLocator(locator, index).click({ timeout: timeout || this.defaultTimeOut })
        console.log(`clickied on element ${locator}`)
    }

    public async dblClick(locator: flexibleLocator, timeout?: number, index?: number): Promise<void> {
      await this.getLocator(locator, index).dblclick({ timeout: timeout || this.defaultTimeOut })
        console.log(`click on element ${locator} `)

    }

    public async rightClick(locator: flexibleLocator, index?: number, timeout?: number): Promise<void> {

       await this.getLocator(locator, index).click({ button: 'right' ,timeout:timeout||this.defaultTimeOut});
        console.log(`click on element ${locator} `)

    }

    public async clearText(locator: flexibleLocator, index?: number): Promise<void> {
       await this.getLocator(locator, index).clear();
        console.log(`clear the text of element ${locator}`)
    }

    public async getText(locator: flexibleLocator, index?: number,timeout?:number): Promise<string> {
        const text:string = await this.getLocator(locator, index).innerText({timeout:timeout||this.defaultTimeOut});
        return text;
    }

    public async getTextContent(locator:flexibleLocator,index?:number,timeout?:number):Promise<string|null>{
        const text:string|null = await this.getLocator(locator,index).textContent({timeout:timeout||this.defaultTimeOut})
        return text
    }

    public async getAllTextList(locator:flexibleLocator):Promise<string[]>{
        const allelementTextList:string[] = await this.getLocator(locator).allInnerTexts();
        return allelementTextList;
    }

    public async getAttributeValue(locator:flexibleLocator,attribute:string,index?:number,timeout?:number):Promise<string| null>{
       const attributevalue:string|null= await this.getLocator(locator,index).getAttribute(attribute,{timeout:timeout||this.defaultTimeOut});
       return attributevalue;
    }

     async getInputValue(locator: flexibleLocator): Promise<string | null>{
        return await this.getLocator(locator).inputValue({ timeout: this.defaultTimeOut });
    }

 //============================ Element Visibility & State Check ================//

   /**
     * check element is hidden
     */
    async isVisible(locator: flexibleLocator, index?: number): Promise<boolean>{
        return await this.getLocator(locator, index).isVisible({timeout: this.defaultTimeOut});
    }

    /**
     * check element is hidden
     */
    async isHidden(locator: flexibleLocator): Promise<boolean>{
        return await this.getLocator(locator).isHidden({timeout: this.defaultTimeOut});
    }

    /**
     * check element is enabled
     */
    async isEnabled(locator: flexibleLocator): Promise<boolean>{
        return await this.getLocator(locator).isEnabled({timeout: this.defaultTimeOut});
    }

    /**
     * check element is disabled
     */
    async isDisabled(locator: flexibleLocator): Promise<boolean>{
        return await this.getLocator(locator).isDisabled({timeout: this.defaultTimeOut});
    }

    /**
     * check element is checked (radio/checkbox)
     */
    async isChecked(locator: flexibleLocator): Promise<boolean>{
        return await this.getLocator(locator).isChecked({timeout: this.defaultTimeOut});
    }

    /**
     * check element is checked (radio/checkbox)
     */
    async isEditable(locator: flexibleLocator): Promise<boolean>{
        return await this.getLocator(locator).isEditable({timeout: this.defaultTimeOut});
    }    

    //====================wait utils===========//

    /**
     * wait for element to be visible
     */
     async waitForElementVisible(locator: flexibleLocator, timeout: number = 5000): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'visible', timeout });
            console.log(`waited for element to be visible `);
            return true;
        }
        catch {
            return false;
        }
     }
    
    /**
     * wait for element to be attached to DOM
     */
     async waitForElementAttached(locator: flexibleLocator, timeout: number = 5000): Promise<boolean> {
        try {
            await this.getLocator(locator).waitFor({ state: 'attached', timeout });
            console.log(`waited for element to be visible `);
            return true;
        }
        catch {
            return false;
        }
     }
    
    /**
     * wait for page load state
     */
    async waitForPageLoad(state: 'load' | 'domcontentloaded' | 'networkidle' = 'load'): Promise<void> {
        await this.page.waitForLoadState(state);
        console.log(`waitd for page load state: ${state}`);
    }


    /**
     * wait for a specific timeout (static)
     */
    async sleep(timeout: number): Promise<void>{
        this.page.waitForTimeout(timeout);
        console.log(`waited for ${timeout} ms`);
    }

    //********************Drop Down Utils/Select Based Drop Downs ****************/
    async selectByText(locator: flexibleLocator, text: string) {
        await this.getLocator(locator).selectOption({ label: text }, { timeout: this.defaultTimeOut });
        console.log(`selected option ${text} from drop down ${locator}`);
    }

    async selectByValue(locator: flexibleLocator, value: string) {
        await this.getLocator(locator).selectOption({ value: value }, { timeout: this.defaultTimeOut });
        console.log(`selected option ${value} from drop down ${locator}`);
    }

    async selectByIndex(locator: flexibleLocator, index: number) {
        await this.getLocator(locator).selectOption({ index: index }, { timeout: this.defaultTimeOut });
        console.log(`selected option ${index} from drop down ${locator}`);
    }





}