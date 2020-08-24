package com.sc.stepDef;

import com.sc.utils.DriverFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;

public class Hooks {

    private AppiumDriverLocalService service = AppiumDriverLocalService.buildDefaultService();

    private AppiumDriver driver = null;
    @Before
    public void initialize() throws Exception {
        service.start();
        System.out.println("Starting the execution");
        driver = (AppiumDriver) DriverFactory.getDriver();
    }

    @After
    public void quit() throws Exception{
        System.out.println("Closing the app");
        service.stop();
    }
}
