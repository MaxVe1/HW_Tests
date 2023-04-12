const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");
const chrome = require("selenium-webdriver/chrome");

describe("add user form", () => {
  let driver;
  const url = "http://localhost:3000";
  const url1 = "http://localhost:3000/user";
  before(function () {
    const options = new chrome.Options().addArguments(
      "--headless",
      "--no-sandbox",
      "--no-shm",
      "--disable-gpu"
    );
    driver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
  });

  after(async function () {
    await driver.quit();
  });

     it("renders form", async () => {
    await driver.get(url);
    expect(
      await driver.findElement(By.css('[data-testid="user-form"]'))
    ).to.not.eql(null);
     });

     it("Checks if firstname input is required", async () => {
    await driver.get(url);
    expect(
      await driver.findElement(By.css('[data-testid="firstname-input"]'))
    ).to.not.eql(null);
     });
  
     it("Checks if name input is required", async () => {
    await driver.get(url);
    expect(
      await driver.findElement(By.css('[data-testid="firstname-input"]'))
    ).to.not.eql(null);
    expect(
      await driver.findElement(By.css('[data-testid="lastname-input"]'))
    ).to.not.eql(null);
     });


     it("Checks if  input is required", async () => {
    await driver.get(url);
    expect(
      await driver.findElement(By.css('[data-testid="role-input"]'))
    ).to.not.eql(null);
     });

     it("Checks if submit button has correct text", async () => {
    await driver.get(url);
    const sub = await driver.findElement(By.css("input[value='Submit']")).getAttribute("value")
    expect(
      sub
    ).to.equal("Submit");
     });

     it("Checks the redirection to /user", async () => {
    //await driver.get(url);
    await driver.findElement(By.css('#firstname')).sendKeys("Johnny");
    await driver.findElement(By.css("#lastname")).sendKeys("Doe");
    await driver.findElement(By.css("#role")).sendKeys("admin"); 
    await driver.findElement(By.css('input[type=submit]')).click(); 
    expect(await driver.getCurrentUrl())
        .to.eql('http://localhost:3000/user');

     });  
     it("First Name Exist ", async () => {
      expect(
         await driver.findElement(By.css('[data-testid="user-firstname"]'))).to.not.eql(null);
     })  
     it("Last Name Exist ", async () => {
      expect(
         await driver.findElement(By.css('[data-testid="user-lastname"]'))).to.not.eql(null);
     }) 
     it("Role Exist ", async () => {
      expect(
         await driver.findElement(By.css('[data-testid="user-role"]'))).to.not.eql(null);
     })  
 
     it("Check admin", async () => {        
          expect(
           await driver.findElement(By.css('[data-testid="user-role"]')).getText()
        ).to.eql('admin');
     });
        
     it("Check johnny", async () => {        
        expect(
         await driver.findElement(By.css('[data-testid="user-firstname"]')).getText()
      ).to.eql('Johnny');
     });

     it("Check doe", async () => {        
        expect(
         await driver.findElement(By.css('[data-testid="user-lastname"]')).getText()
      ).to.eql('Doe');
     });
      
});
 

 
