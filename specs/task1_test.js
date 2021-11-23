// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('should login and check color', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $("#spinner").waitForDisplayed({ reverse: true, timeout: 10000 });
 
        const navItems = await $$('.nav-item');
        const userText = await navItems[0].getText();

        console.log(`Logged In: ${userText === "John Walker ➥"}`); //проверяет действительно ли пользователь с таким логином вошел в систему

        for (const item of navItems){
        const text = await item.getText();
        console.log(text);
        item.moveTo();
        await browser.pause(2000);
        const color = await item.getCSSProperty('background-color');
        console.log(color);
        
        if(color.value === "rgba(255,0,0,1)"){
            throw new Error(`The menu Item ${text} has wrong color!`);
        }
        }
    });
});




