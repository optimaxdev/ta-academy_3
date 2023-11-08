import type { Options } from '@Test';
import { test, expect } from '@Test';

test.describe('UHC-0 (test ID)', () => {
    test(' Registration new customer with valid data and checking user data reset after logout (test btnlogin)', async ({
        page,
        baseURL,
    }: Options) => {
        await page.goto(baseURL, { waitUntil: 'domcontentloaded' });

        const myAccount = page.locator('//*[contains(@class,"myAccount__arrowIcon___2R-t_")]');
        await myAccount.hover();


        const btnClickLogin = page.locator('//div[contains(@class, "topStripMenuDropdown__dropdownContent___3xHDa")]/ul/li[1]/button');
        await btnClickLogin.click();
    

        
        expect( await page.locator('baseIcon__container___9d_Y1').isVisible()).toBe(false);
       

        const btnCreateAccount = page.locator('//*[contains(@class,"sc-kgKVFY geUAfL bordered")]');
        await btnCreateAccount.click();


        expect(await page.locator('//h2[contains(@class, "loginPopup__title___2aSiN")]').isVisible()).toBe(true)

        

        expect( await page.locator('//*[contains(@class,"sc-kgKVFY geUAfL bordered")]').isVisible()).toBe(true);

        const fillFormFirstName = page.locator('//*[text()= "First Name"]');
        await fillFormFirstName.type('Ivan');

        // await page.locator('//*[text()= "First Name"]').fill('Ivan');

        const fillFormLastName = page.locator('//*[text()= "Last Name"]');
        await fillFormLastName.type('Ivanov');
        
       // await page.locator('//*[text()= "Last Name"]').fill('Ivanov');


        const fillFormEmail = page.locator('//*[text()= "Email"]');
        const alphabet = "qwertyuiuolasdfghjklzxcvbnm";
        let  res = "";
          if(res.length <10){
            res += alphabet[Math.floor(Math.random()* alphabet.length -1)]
          }
        const newEmail = res + (Math.round(Math.random()*10000) + "@gmail.com");
        await fillFormEmail.type(newEmail);

        // await page.locator('//*[text()= "Email"]').fill('test@test.com');
        
        const fillFormPassword = page.locator('//*[text()= "Password"]');
        await fillFormPassword.type('Test1234');

        // await page.locator('//*[text()= "Password"]').fill('Test1234');

        const buttonCreateAccount = page.locator('//button[@aria-label="Create new account"]');
        await buttonCreateAccount.click();

        expect(await page.locator('//button[@aria-label="Create new account"]').isVisible()).toBe(true);

        await expect(async () => {
            const popUpTitle = page.locator('//h2[contains(., "Welcome")]');
            const popUpTitleText = await popUpTitle.textContent();
            expect(popUpTitleText).toStrictEqual('Welcome, Ivan');
             }).toPass();

       const welcomePopUpSubTitle = page.locator('//p[contains(@class, "welcomePopup__subtitle___21xeJ")]')
       const  welcomePopUpSubTitleText = await welcomePopUpSubTitle.textContent();
    
       expect(welcomePopUpSubTitleText).toStrictEqual("You can start enjoying everything we have to offer")


       const closePopUp = page.locator('//button[@aria-label="Close"]');
       await closePopUp.click();

       expect(await page.locator('//div[contains(@class,"rc-dialog-content")]').isVisible()).toBe(false);


       const userHello = page.locator('//*[contains(@class,"myAccount__arrowIcon___2R-t_")]');
       await userHello.hover();

       const btnSignOut = page.locator('//ul[contains(@class, "myAccount__logged___35v2L")]/li[4]');
       await btnSignOut.click();


       const resultSignOut = page.locator('//div[contains(@class, "myAccount__title___3VN4o")]');
       const resultSignOutText= await resultSignOut.textContent();
       expect(resultSignOutText).toStrictEqual('My Account');


    


       });
    });

    

   