package com.sc.stepDef;

import com.sc.pages.AmazonObjects;
import com.sc.pages.FlipkartObjects;
import com.sc.utils.DriverFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.junit.Assert;

import static org.junit.Assert.fail;

public class ComparePriceSteps extends DriverFactory {

    private FlipkartObjects  flipkartObjects = new FlipkartObjects(driver);
    private AmazonObjects amazonObjects = new AmazonObjects(driver);


    @Given("Launch the chrome browser in mobile$")
    public void launch_the_chrome_browser_in_mobile() throws Exception {
        Assert.assertNotNull("Failed to launch the Chrome browser", driver);
    }


    @And("open (.*) site from search box")
    public void open_flipkat_com_from_search_box(String siteName) throws InterruptedException {
        switch (siteName){
            case "Flipkart":
                System.out.println("Opening flipkart.com Site");
                flipkartObjects.openShoppingSite();
                break;
            case "Amazon":
                System.out.println("Opening Amazon.in Site");
                amazonObjects.openShoppingSite();
                break;
            default:
                fail("Invalid option");
        }
        
    }
    
    @And("search for the product VU TV in flipkart.com")
    public void search_for_the_product_vu_tv( ) throws InterruptedException {
        flipkartObjects.searchForTheProduct();
    }

    @And("^note the price and product name$")
    public void noteThePriceAndProductName() {
        flipkartObjects.noteThePrice();
    }

    @And("^search for the product VU TV in amazon.com$")
    public void searchForTheProductVUTVInAmazonCom() throws InterruptedException {
        amazonObjects.searchForTheProduct();
    }

    @And("^check for the price and product name$")
    public void checkForThePriceAndProductName() throws InterruptedException {
        amazonObjects.checkForThePrice();
    }

    @And("^Compare the Price between two different sites for same product$")
    public void compareThePriceBetweenTwoDifferentSitesForSameProduct() {
        if(flipkartObjects.flipKartPrice > amazonObjects.priceOfAmazon){
            System.out.println("Amazon.in provides the product to cheaper price");
        }else if(flipkartObjects.flipKartPrice == amazonObjects.priceOfAmazon){
            System.out.println("Price at both site are same...");
        }else System.out.println("Flipkart.com provides the product to cheaper price");
        System.out.println("Happy Shopping ......");
    }
}
