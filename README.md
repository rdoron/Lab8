# Lab8_Starter 

Rachel Doron 

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   1. within a github action that runs whenever code is pushed 

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   no because with unit testing you can't test how indavidual components interact with each other on an application/feature level. So you cannot test if writing a message and then sending that same message is working properly for the message feature. 

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   yes because there are not many moving parts to this feature. It just needs to find out wheather or not there are 80 characters. 

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   it would run the tests with a browser UI 

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
    describe('Basic user flow for SPA ', () => {
    beforeAll(async () => {
    await page.goto('http://127.0.0.1:5501');
    const setting = await page.$('img');
    await setting.click();
    await page.waitForTimeout(500);
    });

