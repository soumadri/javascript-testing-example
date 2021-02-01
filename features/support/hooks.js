import { AfterAll, BeforeAll } from '@cucumber/cucumber'
import Scope from "./scope"
import * as seleniumWebdriver from 'selenium-webdriver'
import * as chrome from 'selenium-webdriver/chrome'

BeforeAll(async () => {
  var options = new chrome.Options()
  options.addArguments('window-size=1440,900')

  if (undefined === Scope.getObject("driver") || null === Scope.getObject("driver")) {  //Ensure to create only single browser instance
    let driver = new seleniumWebdriver.Builder()
      .withCapabilities(seleniumWebdriver.Capabilities.chrome())
      .setChromeOptions(options)
      .forBrowser('chrome')
      .build()

      Scope.addObject("driver", driver)

      await driver.get("http://localhost:1234")
      Scope.addObject("isAppLoaded",true);
  }   
});

AfterAll(async () => {
  await Scope.getObject("driver").quit();
});