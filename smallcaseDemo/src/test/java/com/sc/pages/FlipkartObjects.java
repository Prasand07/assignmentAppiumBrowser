package com.sc.pages;

import com.sc.utils.Constants;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class FlipkartObjects extends BasePage  {
    public String  nameOfTheFkProduct;
    public String priceOfTheFkProduct;
    public int flipKartPrice;


    public FlipkartObjects(WebDriver driver) {
        super(driver);
    }

    //Usage of Relative path was expected but could not use due to time contraint
    private By fkSearchInputField = By.xpath("//div[@id=\"container\"]/div/div[1]/div[1]/div[3]/div[1]/div[1]/div/div[1]/div/div/div[4]/div/a/div/div/div/img");
    private By fkCloseVoicePopUp = By.xpath("//div[@id=\"container\"]/div/div[1]/div[1]/div[1]/div[1]/a[3]");
    private By fkSearchForItem = By.id("input-searchsearchpage-input");
    private By fkProductName = By.xpath("//div[@id=\"_parentCtr_\"]/div[1]/div/div[1]/div/div/div/div/div[1]/div[2]/div[1]/div/div/div");
    private By fkProductPrice = By.xpath("//div[@id=\"_parentCtr_\"]/div[1]/div/div[1]/div/div/div/div/div[1]/div[2]/div[3]/div/div[1]");


    public void openShoppingSite() throws InterruptedException {
        driver.get(Constants.flipkartURL);
        Thread.sleep(8000);
    }

    public void searchForTheProduct() throws InterruptedException {
        driver.findElement(fkSearchInputField).click();
        Thread.sleep(2000);
        driver.findElement(fkCloseVoicePopUp).click();
        Thread.sleep(1000);
        driver.findElement(fkSearchForItem).sendKeys("Vu tv 43 inch" + "\n");
        Thread.sleep(5000);

    }

    public void noteThePrice() {
        nameOfTheFkProduct = driver.findElement(fkProductName).getText();
        System.out.println(nameOfTheFkProduct);
        priceOfTheFkProduct = driver.findElement(fkProductPrice).getText();
        String tag1 = priceOfTheFkProduct.substring(1,3);
        String tag2 = priceOfTheFkProduct.substring(4,7);
        String Final = tag1 + tag2;
        System.out.println(Final);
        System.out.println(priceOfTheFkProduct);
        flipKartPrice = Integer.parseInt(Final.trim());
    }

}
