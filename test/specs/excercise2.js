const assert = require('assert');

describe('The Internet Testing page', () =>{
    it('should login succesfully', () => {
        browser.url('http://the-internet.herokuapp.com/');
        let login = $('#content>ul>li>a[href="/login"]');
        login.click();
        assert.strictEqual(browser.getUrl(), "http://the-internet.herokuapp.com/login");
        
        let username = $('#username');
        let password = $('#password');
        let LoginButton = $('.radius');

        username.setValue('tomsmith');
        password.setValue('SuperSecretPassword!');
        LoginButton.click();

        let secureHeader = $('.example>h2');
        assert.strictEqual(secureHeader.getText(), "Secure Area");
    });
});