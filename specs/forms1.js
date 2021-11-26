// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('should login and check color', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/index.html?quick');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
                
        await browser.pause(1000);       
        
        await $("//a[contains(@href, './formManager.html')]").click();
        await $('#email').setValue('one@mail.com');
        await $('#password').setValue('12345');
        await $('#address1').setValue('Main Street');
        await $('#address2').setValue('1234');
        await $('#state').$('option:nth-child(2)').click();
        await $('#zip').setValue('10001');
        await $('#description').setValue('New user created');
        await $('#dashboard > div > div > div > form > button').click();        

        await browser.pause(500);

        await $("//a[contains(@href, './formManager.html')]").click();
        await $('#email').setValue('two@mail.com');
        await $('#password').setValue('54321');
        await $('#address1').setValue('Green Street');
        await $('#address2').setValue('1234');
        await $('#state').$('option:nth-child(2)').click();
        await $('#zip').setValue('50005');
        await $('#description').setValue('Added new user');
        await $('#dashboard > div > div > div > form > button').click();

        if ( await $("//*[@id='users-table']/div[2]/div/div[1]/div[1]").getText() !="one@mail.com" ||
             await $("//*[@id='users-table']/div[2]/div/div[1]/div[2]").getText() !="manager" ||
             await $("//*[@id='users-table']/div[2]/div/div[1]/div[3]").getText() !="Main Street" ||
             await $("//*[@id='users-table']/div[2]/div/div[1]/div[4]").getText() !="1234" ||
             await $("//*[@id='users-table']/div[2]/div/div[1]/div[6]").getText() !="US" ||
             await $("//*[@id='users-table']/div[2]/div/div[1]/div[7]").getText() !="10001" ||
             await $("//*[@id='users-table']/div[2]/div/div[1]/div[8]").getText() !="New user created" ||
             await $("//*[@id='users-table']/div[2]/div/div[1]/div[11]").getText() !="country"
        )     
        {
            throw new Error("Incorrect Values");
        }            
                  
        if ( await $("//*[@id='users-table']/div[2]/div/div[2]/div[1]").getText() !="two@mail.com" ||
             await $("//*[@id='users-table']/div[2]/div/div[2]/div[2]").getText() !="manager" ||
             await $("//*[@id='users-table']/div[2]/div/div[2]/div[3]").getText() !="Green Street" ||
             await $("//*[@id='users-table']/div[2]/div/div[2]/div[4]").getText() !="1234" ||
             await $("//*[@id='users-table']/div[2]/div/div[2]/div[6]").getText() !="US" ||
             await $("//*[@id='users-table']/div[2]/div/div[2]/div[7]").getText() !="50005" ||
             await $("//*[@id='users-table']/div[2]/div/div[2]/div[8]").getText() !="Added new user" ||
             await $("//*[@id='users-table']/div[2]/div/div[2]/div[11]").getText() !="country"
        )        
        {
            throw new Error("Incorrect Values");
        }              
        await browser.pause(2000);
    });
});   
                
        
         





