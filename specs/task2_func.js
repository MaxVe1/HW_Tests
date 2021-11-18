
describe('Check app', function () {
    it('click on hide button', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();

        await browser.pause(8000);
        await browser.execute(() => {
            const elemToRemove = document.querySelector('.navbar');
            elemToRemove.remove();
        });

        await browser.pause(3000);
        await $("//button[text()='alert']").click();
        await browser.pause(3000);
        await browser.acceptAlert();
        
        await browser.pause(10000);
        
    });
});


