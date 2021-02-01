import { Given, When, Then } from '@cucumber/cucumber'
import Assert from 'cucumber-assert'
import Scope from "../support/scope"
import {By} from 'selenium-webdriver'

Given('that the app loaded', async () => {
  return Scope.getObject("isAppLoaded");
});

When('user clicks on the {string} button', { timeout: 60 * 1000 }, async (buttonName) => {
  let driverObject = Scope.getObject("driver");
  await driverObject.findElement(By.id(buttonName)).click()
  return true;
});

Then('I can see the incremented counter value {int}', { timeout: 60 * 1000 }, async (numberOnScreen) => {
  let driverObject = Scope.getObject("driver");
  let number = await driverObject.findElement(By.id("count")).getText();    
  let result = (parseInt(number) === numberOnScreen);
  let assertionResult = Assert.equal(result, true, 'Expected result to be: ' + numberOnScreen);
  return assertionResult;
});