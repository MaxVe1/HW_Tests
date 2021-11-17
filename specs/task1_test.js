// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
describe('Check app', function () {
    it('should login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('#spinner').waitForExist({ reverse: false, timeout: 5000 });
        await browser.pause(12000);      
        const navItems = await $$('.nav-item');

        const userText = await navItems[0].getText();
        console.log(`Logged In: ${userText === "John Walker ➥"}`); //проверяет действительно ли пользователь с таким логином вошел в систему
 
        const color = [];
       
        for (let i=1;i<=6;i++) { 
            
             const text = await navItems[i].getText();
             console.log(text);

            await browser.pause(3000);          
            navItems[i].moveTo();
            await browser.pause(3000); 
            color[i] = await navItems[i].getCSSProperty('background-color') 
            console.log(color[i]);      
            if(color[i].value === "rgba(255,0,0,1)"){
                throw new Error(`The menu Item ${text} has wrong color!`)
            }

            await browser.pause(1000);
        }
    });
});




