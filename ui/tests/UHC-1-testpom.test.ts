import { expect, test } from '@Test';
import { AccountLinks,MyAccountItem,} from '@Components/homePage/homePage/header/topSide/nav/myAccount/myAccountItem';
import { InputText } from '@Components/homePage/information/inputForm';
import { randomEmail } from './randomEmail';



test.describe('UHC-1-testpom', () => {
    test('Registration ...', async ({ page, homePage, categoryPage }) => {
        const myAccount = homePage.Header.TopSide.Nav.MyAccount;

        await test.step('Preconditions steps | e.g. Open Home page', async () => {
            await homePage.open();
        });

        await test.step('test-step 1 Check if navigation text is visible', async () => {
            const navText = homePage.Header.TopSide.NavText;
            expect(await navText.isVisible()).toBe(true);
        });

        await test.step('test-step 2-3 Open My Account Checks Items', async () => {
            await myAccount.clickAccount();
            expect(await myAccount.MyAccountItem.isVisible()).toBe(true);
        });

        await test.step('test-step 4 Click My Account Item "Log In"', async () => {
            const myAccountItem = myAccount.MyAccountItem;
            await myAccountItem.clickLogin(AccountLinks.Login);
            expect(await homePage.CreateButton.isVisible()).toBe(true);
        });

        await test.step('test-step 5 Open Registration Window', async () => {
            await homePage.CreateButton.clickCreateButton();
            expect(await homePage.InputForm.isVisible()).toBe(true);
            expect(await homePage.CreateButton.isVisible()).toBe(false);
        });

        await test.step('test-step 6 Fill Registration Form', async () => {
            await homePage.InputForm.typeOnInput(InputText.Firstname, 'Ivan');
            await homePage.InputForm.typeOnInput(InputText.Lastname, 'Ivanov');
            await homePage.InputForm.typeOnInput(InputText.Email, randomEmail());
            await homePage.InputForm.typeOnInput(InputText.Password, 'Test1234');

            await homePage.InputForm.create();

            await expect(async () => {
                expect(await homePage.CreateButton.isVisible()).toBe(false);
                expect(await homePage.WelcomePopUp.isVisible()).toBe(false);
                expect(await homePage.WelcomePopUp.innerText()).toStrictEqual('Get Started');
            }).toPass();
        });

        await test.step('test-step 7 Close PopUp', async () => {
            await homePage.WelcomePopUp.closePopup();

            expect(await myAccount.innerText()).toStrictEqual('My AccountOrder TrackingExchanges & ReturnsSign out');
            
        });

        await test.step('test-step 8 Sing Out In My Account', async () => {
            await myAccount.clickAccount();
            expect(await myAccount.MyAccountItem.isVisible()).toBe(true);

            await myAccount.MyAccountItem.clickLogin(AccountLinks.SignOut);
        });
    });
});
