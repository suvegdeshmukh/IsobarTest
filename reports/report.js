$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Test.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase a product",
  "description": "This feature file deals with product search and add to cart.\r\nIf a product is available in the web page, then it can be added to the cart.\r\nIf a product is not available, then it can posted on request by mail.",
  "id": "purchase-a-product",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Product on stock",
  "description": "",
  "id": "purchase-a-product;product-on-stock",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am able to access the http://www.flipkart.com",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for a \u003cproduct\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I choose the first autofill option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add the first product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to checkout the cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "purchase-a-product;product-on-stock;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 13,
      "id": "purchase-a-product;product-on-stock;;1"
    },
    {
      "cells": [
        "apple phone"
      ],
      "line": 14,
      "id": "purchase-a-product;product-on-stock;;2"
    },
    {
      "cells": [
        "sony tv"
      ],
      "line": 15,
      "id": "purchase-a-product;product-on-stock;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 57592710554,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Product on stock",
  "description": "",
  "id": "purchase-a-product;product-on-stock;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am able to access the http://www.flipkart.com",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for a apple phone",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I choose the first autofill option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add the first product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to checkout the cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.flipkart.com",
      "offset": 24
    }
  ],
  "location": "StepDefn.i_am_able_to_access_the_http_flipkart_com(String)"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 28560224296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple phone",
      "offset": 15
    }
  ],
  "location": "StepDefn.i_search_for_a_apple_phone(String)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 2780859101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_choose_the_first_autofill_option()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 6063367190,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_add_the_first_product_to_cart()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 16359861349,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_should_be_able_to_checkout_the_cart()"
});
formatter.result({
  "duration": 27263,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 3082735040,
  "status": "passed"
});
formatter.before({
  "duration": 6499551354,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Product on stock",
  "description": "",
  "id": "purchase-a-product;product-on-stock;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am able to access the http://www.flipkart.com",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I search for a sony tv",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I choose the first autofill option",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add the first product to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to checkout the cart",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.flipkart.com",
      "offset": 24
    }
  ],
  "location": "StepDefn.i_am_able_to_access_the_http_flipkart_com(String)"
});
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 19265765739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sony tv",
      "offset": 15
    }
  ],
  "location": "StepDefn.i_search_for_a_apple_phone(String)"
});
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 2176520883,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_choose_the_first_autofill_option()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 5541428564,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_add_the_first_product_to_cart()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 5965838478,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_should_be_able_to_checkout_the_cart()"
});
formatter.result({
  "duration": 64403,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 3272916422,
  "status": "passed"
});
});