const {
    startClientPC,
    startSatelite,
    stopClientPC,
    stopEarthServer,
    stopSatelite,
    stopMarsServer,
    startEarthServer,
    startMarsServer,
    sendMessage,
    assertResponse
} = require('./stubs/messageservice.stubs');

// REMOVE THE BELOW CODE BEFORE START THE EXERCISE

function startAllNodes() {
    startClientPC();
    const earthToken = startEarthServer();
    const marsToken = startMarsServer();
    startSatelite();
    return {
        earth: earthToken,
        mars: marsToken,
    }
}

function stopAllNodes(){
    stopMarsServer();
    stopEarthServer();
    stopSatelite();
    stopClientPC();
}

describe('Message Sending', function () {
    beforeEach('Start all nodes', async ()=> {
        startAllNodes(); 
    })

    it('should send message to Mars without error', function () {
        let tokens = startAllNodes();
        const response = sendMessage('Hello', 'Mars', tokens.mars);        
        assertResponse(response, 'Success');
    });

    it('should send message to Earth without error', function () {
        let tokens = startAllNodes();
        const response = sendMessage('Hello', 'Earth', tokens.earth);
        assertResponse(response, 'Success');    
    });

    it('should send message to Earth with "Security Error"', function () {
        const response = sendMessage('Hello', 'Earth', 'X0000');
        assertResponse(response, 'Security Error');
    });
    
    it('should send message to Mars with "Security Error"', function () {
        const response = sendMessage('Hello', 'Mars', 'X0000');
        assertResponse(response, 'Security Error');
    });

    it('should send message to Mars with "Service is unavailable" ', function () {
        let tokens = startAllNodes();        
        stopSatelite();
        const response = sendMessage('Hello', 'Mars', tokens.mars);        
        assertResponse(response, 'Service is unavailable');
    });

    it('should send message to Mars with "Service is unavailable', function () {
        stopSatelite();
        const response = sendMessage('Hello', 'Mars', 'X0000');        
        assertResponse(response, 'Service is unavailable');
    });

    AfterEach('Stop all nodes', async ()=> {
        stopAllNodes();
    })
})
