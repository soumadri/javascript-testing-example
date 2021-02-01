import { Given, When, Then } from '@cucumber/cucumber'
import Assert from 'cucumber-assert'
import {By} from 'selenium-webdriver'
import Scope from "../support/scope"

Given('that the app is loaded', async () => {  
  return true
});

When('all the UI elements are visible', { timeout: 60 * 1000 }, () => {  
  return true;
});

Then('I can see the counter value {int}', { timeout: 60 * 1000 }, async (numberOnScreen) => {
  let driverObject = Scope.getObject("driver");
  let number = await driverObject.findElement(By.id("count")).getText();    
  let result = (parseInt(number) === numberOnScreen);
  let assertionResult = Assert.equal(result, true, 'Expected result to be: ' + numberOnScreen);
  return assertionResult;
});
