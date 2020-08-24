$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/smallcaseAssignment.feature");
formatter.feature({
  "name": "Two compare price offered for product in two different shopping sites i.e. Flipkart.com and Amazon.com",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Open Flipkart.com and Amazon.in and compare the the price of an product",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the chrome browser in mobile",
  "keyword": "Given "
});
formatter.match({
  "location": "ComparePriceSteps.launch_the_chrome_browser_in_mobile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open Flipkart site from search box",
  "keyword": "When "
});
formatter.match({
  "location": "ComparePriceSteps.open_flipkat_com_from_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search for the product VU TV in flipkart.com",
  "keyword": "And "
});
formatter.match({
  "location": "ComparePriceSteps.search_for_the_product_vu_tv()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "note the price and product name",
  "keyword": "And "
});
formatter.match({
  "location": "ComparePriceSteps.noteThePriceAndProductName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "open Amazon site from search box",
  "keyword": "And "
});
formatter.match({
  "location": "ComparePriceSteps.open_flipkat_com_from_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search for the product VU TV in amazon.com",
  "keyword": "And "
});
formatter.match({
  "location": "ComparePriceSteps.searchForTheProductVUTVInAmazonCom()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: Returned value cannot be converted to WebElement: {message\u003dunknown error: unknown sessionId\n  (Session info: chrome\u003d84.0.4147.125)\n  (Driver info: chromedriver\u003d2.37.544337 (8c0344a12e552148c185f7d5117db1f28d6c9e85),platform\u003dMac OS X 10.15.2 x86_64)}\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027PasannaD-MBA\u0027, ip: \u0027fe80:0:0:0:c0f:64a5:424d:9c9d%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.2\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: AndroidDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat com.sc.pages.AmazonObjects.searchForTheProduct(AmazonObjects.java:29)\n\tat com.sc.stepDef.ComparePriceSteps.searchForTheProductVUTVInAmazonCom(ComparePriceSteps.java:53)\n\tat ✽.search for the product VU TV in amazon.com(features/smallcaseAssignment.feature:11)\nCaused by: java.lang.ClassCastException: com.google.common.collect.Maps$TransformedEntriesMap cannot be cast to org.openqa.selenium.WebElement\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:331)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementById(DefaultGenericMobileDriver.java:69)\n\tat io.appium.java_client.AppiumDriver.findElementById(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementById(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat com.sc.pages.AmazonObjects.searchForTheProduct(AmazonObjects.java:29)\n\tat com.sc.stepDef.ComparePriceSteps.searchForTheProductVUTVInAmazonCom(ComparePriceSteps.java:53)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:78)\n\tat cucumber.api.TestStep.run(TestStep.java:61)\n\tat cucumber.api.TestCase.run(TestCase.java:28)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:99)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:108)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.step({
  "name": "check for the price and product name",
  "keyword": "And "
});
formatter.match({
  "location": "ComparePriceSteps.checkForThePriceAndProductName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Compare the Price between two different sites for same product",
  "keyword": "Then "
});
formatter.match({
  "location": "ComparePriceSteps.compareThePriceBetweenTwoDifferentSitesForSameProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});