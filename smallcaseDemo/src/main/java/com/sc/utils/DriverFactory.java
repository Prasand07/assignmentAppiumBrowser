package com.sc.utils;

import com.google.common.collect.ImmutableMap;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.URL;

public class DriverFactory {
    public static WebDriver driver;

    public static WebDriver getDriver() throws Exception {
        System.out.println("Getting capabilities...");
        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("deviceOrientation", "portrait");
        caps.setCapability("deviceName", "Moto");
        caps.setCapability("platformVersion","7.1.1");
        caps.setCapability("platformName","Android");
        caps.setCapability(MobileCapabilityType.BROWSER_NAME, "Chrome");
        caps.setCapability("appium:chromeOptions", ImmutableMap.of("w3c", false));
        caps.setCapability("udid","ZH33L2254L");

       return driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), caps);
    }
}


