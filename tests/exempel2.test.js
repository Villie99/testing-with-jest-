const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');


const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); 

beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

afterAll(async() => {
    await driver.quit();
}, defaultTimeout);



test("Push an item to the stack and check if it works", async () => {
    const push = await driver.findElement(By.id('push'));
    await push.click();

    const alert = await driver.switchTo().alert();
    await alert.sendKeys("Benjamin");
    await alert.accept();

    const stack = await driver.findElement(By.id("top_of_stack")).getText();
    //expect(stack).toEqual("Kalle");//fail
    expect(stack).toEqual("Benjamin"); //pass


    });

 