require('chromedriver')

import { setWorldConstructor, setDefaultTimeout } from '@cucumber/cucumber'
import * as seleniumWebdriver from 'selenium-webdriver'
import * as chrome from 'selenium-webdriver/chrome'
import Scope from "./scope"

function CustomWorld({ attach, parameters }) {  
  this.attach = attach
  this.parameters = parameters  

  // Set default timeout to 20 seconds before a step fails.
  setDefaultTimeout(20000)
}

setWorldConstructor(CustomWorld)