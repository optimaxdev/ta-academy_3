import { CartPage } from '@Components/cartPage/cartPage';
import { Mock } from '@Core/mock';
import { GetCartItemsMock } from '@Mocks/api/mockio/v2/id/get';

describe('UHC-1-int', () => {
    const mock = Mock.getInstance();
    let cartPage: CartPage;

    beforeAll(async () => {
        cartPage = new CartPage();
        mock.addMocks(new GetCartItemsMock());
    });

    afterAll(() => {
        cartPage.destroy();
    });

    test('Add cart item', async () => {
        await cartPage.fulfill();
        const cartList = await cartPage.getCartList();

        reporter.startStep('Open Modal Item and check modal item');
        const modalAddItem = await cartPage.OpenModalAddItem();
        expect(await cartPage.checkModalElement()).toBe(true);
        reporter.endStep();

        reporter.startStep('Fill  Input Texts and click Create');
        await modalAddItem.fillInputs();
        await modalAddItem.buttonCreateClick();
        expect(await cartPage.checkModalElement()).toBe(false);

        const [addItemElements] = (await cartList.getCartItems());
        expect(await addItemElements.getInputName()).toStrictEqual('Pepa Pig')
        expect(await addItemElements.getPriceForAll()).toStrictEqual(50);
        expect(await addItemElements.getPriceNewItem()).toStrictEqual(25)
        expect(await addItemElements.getInputQuantity()).toStrictEqual(2);
        reporter.endStep();

        reporter.startStep('Delete new item elemnts');
        await addItemElements.deleteItem();
        const updateCartList = await cartList.getCartItems();
        expect(updateCartList.includes(addItemElements)).toBe(false);
        reporter.endStep();

        
        reporter.startStep('Should check if the window is visible');
        const title = await cartPage.getHeaderTitle();
        expect(title).toStrictEqual('Shopping cart');
        reporter.endStep();
     
        
    });
});





