const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");
const chrome = require("selenium-webdriver/chrome");

describe("add user form", () => {
  let driver;
  const url = "http://uitestingplayground.com/sampleapp";
  
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

  it("Check url in browser", async () => {
     
    await driver.get(url);
      expect(
       await driver.getCurrentUrl())
       .to.equal('http://uitestingplayground.com/sampleapp'); 

  }); 

  it("Check if submit button has correct text Log In", async () => {
    
    const sub = await driver.findElement(By.css("#login")).getText()
    expect(
      sub
    ).to.equal("Log In");
  });

  it("Check empty form", async () => {
        
    await driver.get(url);
    driver.findElement(By.css('#login')).click(); 
    const logStatus = await driver.findElement(By.css('#loginstatus')).getText();
       
    expect(
    logStatus
    ).to.equal("Invalid username/password");

  });  

  it("Check login form without password", async () => {
        
      await driver.get(url);
      driver.findElement(By.name("User name")).sendKeys("Johnny");      
      driver.findElement(By.css('#login')).click(); 
      const logStatus = await driver.findElement(By.css('#loginstatus')).getText();
      expect(
      logStatus
       ).to.equal("Invalid username/password");

  });  
  
  it("Check password without login ", async () => {
        
    await driver.get(url);
    driver.findElement(By.xpath("//input[@placeholder='********']")).sendKeys("pwd");     
    driver.findElement(By.css('#login')).click(); 
    const logStatus = await driver.findElement(By.css('#loginstatus')).getText();
    expect(
    logStatus
     ).to.equal("Invalid username/password");

}); 

  it("Check send login and pwd", async () => {
        
    await driver.get(url);
    driver.findElement(By.xpath("//input[@placeholder='User Name']")).sendKeys("Johnny");
    driver.findElement(By.xpath("//input[@placeholder='********']")).sendKeys("pwd");
    driver.findElement(By.css('#login')).click(); 
    const logStatus = await driver.findElement(By.css('#loginstatus')).getText();
    expect(
      logStatus
     ).to.equal("Welcome, Johnny!");

  }); 

  it("Check if submit button has correct text Log Out", async () => {
  
  const sub = await driver.findElement(By.css("#login")).getText()
  expect(
    sub
  ).to.equal("Log Out");
  });

  it("Check logout", async () => {        
 
  driver.findElement(By.css('#login')).click(); 
  const logStatus = await driver.findElement(By.css('#loginstatus')).getText();
  expect(
    logStatus
   ).to.equal("User logged out.");

  }); 
      
});
 

 
