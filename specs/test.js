const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");
const chrome = require("selenium-webdriver/chrome");
function checkText(searchText, tableText){
  if (searchText !== tableText) {
      throw new Error(` "${searchText}" Not Equal To "${tableText}"`);
  }
  else{
      console.log(`${searchText} is OK`)
  }
}

// before(async function () {
//   await browser.url('C:/MV/PROG/Formes.html');
//   // const options = new chrome.Options().addArguments(
//   //   "--headless",
//   //   "--no-sandbox",
//   //   "--no-shm",
//   //   "--disable-gpu"
// });


describe("add user form", async function() {
  let driver;
  const url = "C:/MV/PROG/Formes.html";
  const url1 = "C:/MV/PROG/Redirect.html"; 
  before(async function () {
    await browser.url('C:/MV/PROG/Formes.html');
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
  it("Renders form", async () => {
    await driver.get(url);
    expect(
      await driver.findElement(By.css('[data-testid="user-form"]'))
    ).to.not.eql(null);
  });

  // it("check First Name ", async () => {
  //       checkText(
  //       await $('body > form > label:nth-child(1)').getText(),
  //       "First name"
  //     );
  // });
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



  //    it("Checks if submit button has correct text 2", async () => {
        
  //     console.log("TEXT:" + await $('body > form > input[type=submit]:nth-child(7)').getText());
  //     checkText(
        

  //       await $('body > form > input[type=submit]:nth-child(7)').getText(),
  //       "Submit"
  //     );
  // });
  // it("check Last Name ", async () => {
  //   await browser.url(url);  
  //   checkText(
  //       await $('body > form > label:nth-child(3)').getText(),
  //       "Last name"
  //     );
  // });
  
  // it("check Last Name ", async () => {
  //       checkText(
  //       await $('body > form > label:nth-child(5)').getText(),
  //       "role"
  //     );
  // });
  

  it("redirect to user", async () => {


    driver.findElement(By.id("#firstname")).sendKeys("Johnny");
    driver.findElement(By.id("#lastname")).sendKeys("Doe");
    driver.findElement(By.id("#role")).sendKeys("admin"); 
    driver.findElement(By.css('input[type=submit]')).click(); 
    // await $('#firstname').setValue('Johnny');
    // await $('#lastname').setValue('Doe');
    // await $('#role').setValue('admin');
    // await $('input[type=submit]').click();
    await browser.url('C:/MV/PROG/Redirect.html'); 
  
      //browser.url('http://webdriver.io');

      //var url1 = browser.getUrl();  
      expect(

       await browser.getUrl())
       .to.eql('file:///C:/MV/PROG/Redirect.html'); 
       
    //  // console.log(url);
    //   // outputs the following:
    //   // "http://webdriver.io"
      });


      it("First Name Exist ", async () => {
           
      await driver.get(url1); 
      const johnny1 = await driver.findElement(By.css('[data-testid="user-firstname"]'))
      //.not.eql(null);
       expect(
         johnny1
         ).to.not.eql(null); 
      })
      
      it("Last Name Exist ", async () => {
           
        await driver.get(url1); 
        const doe1 = await driver.findElement(By.css('[data-testid="user-lastname"]'))
        //.not.eql(null);
         expect(
           doe1
           ).to.not.eql(null); 
        })
      
        it("Admin Role Exist ", async () => {
           
          await driver.get(url1); 
          const admin1 = await driver.findElement(By.css('[data-testid="user-lastname"]'))
          //.not.eql(null);
           expect(
             admin1
             ).to.not.eql(null); 
          })


      it("Check Johnny", async () => {
        await driver.get(url1);

        const johnny = await driver.findElement(By.css('[data-testid="user-firstname"]')).getText();
        expect(
           johnny
        ).to.eql('Johnny');
       });
      
       it("Check Doe", async () => {
        await driver.get(url1);

        const doe = await driver.findElement(By.css('[data-testid="user-lastname"]')).getText();
        expect(
           doe
        ).to.eql('Doe');
       });

       it("Check admin", async () => {
        await driver.get(url1);

        const admin = await driver.findElement(By.css('[data-testid="user-role"]')).getText();
        expect(
           admin
        ).to.eql('admin');
       });
});
 

 
