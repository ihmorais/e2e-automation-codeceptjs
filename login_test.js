Feature('login');

Scenario('test login with success', ({ I }) => {
    I.amOnPage('https://www.facebook.com/');
    I.click('._6lux');
    I.fillField('#email', '{INSERT_EMAIL}');
    I.click('._6lux');
    I.fillField('#pass', '{INSERT_PASSWORD}');
    I.click('._6ltg');
    I.wait(3);
    I.amOnPage('https://www.facebook.com/');
    I.see('{INSERT_NAME OR OTHER ID}');
});
