// REMOVE THE BELOW CODE BEFORE START THE EXERCISE
const json = {
    "email": "123@mail.com",
	"password": "user",
    "address1": "Long street",
    "address2": "123",
    "city": "Berlin",
    "zip": "22022",
    "description": "New User!!!!!"     
}

async function fillFormUsingJson(jsonValues){
 
    const keys = Object.keys(jsonValues)
    const values = Object.values(jsonValues)

    console.log("VALUES:" + values);
    console.log("KEYS:" + keys);  
    
    for(const field in values){
        await $(`#${keys[field]}`).setValue(values[field]);
        
    }

    // for(let i=0;i<keys.length;i++){ //ok work
    //     await $(`#${keys[i]}`).setValue(values[i]);
    // }
         
}


describe('Check app', function () {
    it('should login and check color', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/index.html?quick');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        
        await browser.pause(1000);
        await $ ("#first-nav-block > li:nth-child(7) > a").click();
                 
        fillFormUsingJson(json);
        await browser.pause(1000); 
        await $("#dashboard > div > div > div > form > button").click();       
        await browser.pause(4000);
    });
});




