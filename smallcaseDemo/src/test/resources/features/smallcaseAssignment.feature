Feature: Two compare price offered for product in two different shopping sites i.e. Flipkart.com and Amazon.com

  Scenario: Open Flipkart.com and Amazon.in and compare the the price of an product
#Case 1: With Flipkart
    Given Launch the chrome browser in mobile
    When open Flipkart site from search box
    And search for the product VU TV in flipkart.com
    And note the price and product name
#Case 2: With Amazon
    And open Amazon site from search box
    And search for the product VU TV in amazon.com
    And check for the price and product name
    Then Compare the Price between two different sites for same product

