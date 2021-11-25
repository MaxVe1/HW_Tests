// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
async function waitForText(selector, text, timeOut) {
    await browser.waitUntil(
        async () => (await $(selector).getText()) === text,
        {
            timeout: timeOut,
            timeoutMsg: `expected text to be different after ${timeOut} ms`            
        }        
    );
}
describe('Check app', function () {
    it('should work function waitUntil', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/index.html?quick');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        
        await browser.pause(1000);
        await $ ("#status").click();

        waitForText('#status', 'Loading..', 3500);
        waitForText('#status', 'Active', 5000); 
        

        await browser.pause(2000);
    });
});




