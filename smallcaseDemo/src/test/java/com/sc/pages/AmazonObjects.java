package com.sc.pages;

import com.sc.utils.Constants;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class AmazonObjects extends BasePage{
    public String nameOfTheAzProduct;
    public String priceOfTheAzProduct;
    public int priceOfAmazon;

    public AmazonObjects(WebDriver driver) {
        super(driver);

    }
//Usage of Relative path was expected but could not use due to time contraint
    private By azSearchInputField = By.id("nav-search-keywords");
    private By productName = By.xpath("//div[@id=\"search\"]/span[3]/div[2]/div[3]/div/span/div/div/div[1]/div/div/a/div[1]/h2/span");
    private By productPrice = By.xpath("//div[@id=\"search\"]/span[3]/div[2]/div[3]/div/span/div/div/div[1]/div/div/a/div[3]/div[1]/div/span[1]/span[2]/span[2]");


    public void openShoppingSite() throws InterruptedException {
        driver.get(Constants.amazontURL);
        Thread.sleep(8000);
    }

    public void searchForTheProduct() throws InterruptedException {
        driver.findElement(azSearchInputField).click();
        driver.findElement(azSearchInputField).sendKeys("Vu tv 43 inch 4k ultra hd smart tv" + "\n");
        Thread.sleep(2000);
    }

    public void checkForThePrice() throws InterruptedException {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(10,200)");
        Thread.sleep(1000);
        priceOfTheAzProduct = driver.findElement(productPrice).getText();
        System.out.println(priceOfTheAzProduct);
        nameOfTheAzProduct = driver.findElement(productName).getText();
        System.out.println(nameOfTheAzProduct);
        String tag1 = nameOfTheAzProduct.substring(3);
        String tag2 = nameOfTheAzProduct.substring(3,6);
        String Final = tag1+tag2;
        priceOfAmazon = Integer.parseInt(Final.trim());
    }
}
