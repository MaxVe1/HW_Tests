// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('send forms', async function () {
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
         
        await browser.pause(2000);
    });
});




