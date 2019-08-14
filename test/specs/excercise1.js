const assert = require('assert');

describe('Gorilla Logic page', () => {
    it('should have the right URL', () => {
        browser.url('https://band.gorillalogic.com');
        console.log(browser.getTitle());
        browser.url('https://gorillalogic.com');
        let url = browser.getUrl();
        console.log(url);
        assert.strictEqual(url, 'https://gorillalogic.com/');
    });
});