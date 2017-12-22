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
    },
    {
      "cells": [
        "Fila shoe"
      ],
      "line": 16,
      "id": "purchase-a-product;product-on-stock;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 41125134979,
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
  "duration": 34492405807,
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
  "duration": 1910057776,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_choose_the_first_autofill_option()"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 9775055740,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_add_the_first_product_to_cart()"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 19618076554,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_should_be_able_to_checkout_the_cart()"
});
formatter.result({
  "duration": 29238,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 3575145588,
  "status": "passed"
});
formatter.before({
  "duration": 4807460211,
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
  "duration": 18429660123,
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
  "duration": 1930979985,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_choose_the_first_autofill_option()"
});
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 5237687712,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_add_the_first_product_to_cart()"
});
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 13295571183,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_should_be_able_to_checkout_the_cart()"
});
formatter.result({
  "duration": 26867,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 2334661690,
  "status": "passed"
});
formatter.before({
  "duration": 4835262848,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Product on stock",
  "description": "",
  "id": "purchase-a-product;product-on-stock;;4",
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
  "name": "I search for a Fila shoe",
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
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 17730744658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fila shoe",
      "offset": 15
    }
  ],
  "location": "StepDefn.i_search_for_a_apple_phone(String)"
});
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 1890809646,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_choose_the_first_autofill_option()"
});
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 4853329603,
  "status": "passed"
});
formatter.match({
  "location": "StepDefn.i_add_the_first_product_to_cart()"
});
formatter.result({
  "duration": 32126966704,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"_3wU53n\"}\n  (Session info: chrome\u003d63.0.3239.84)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027WKS60051\u0027, ip: \u0027172.21.64.34\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.34.522940 (1a76f96f66e3ca..., userDataDir: C:\\Users\\SUVEG~1.DES\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 63.0.3239.84, webStorageEnabled: true}\nSession ID: 2c057923155c2ec8d58011a65fd69a2f\n*** Element info: {Using\u003dclass name, value\u003d_3wU53n}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:457)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:391)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat glue.StepDefn.i_add_the_first_product_to_cart(StepDefn.java:83)\r\n\tat ✽.And I add the first product to cart(features/Test.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefn.i_should_be_able_to_checkout_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 1878737089,
  "status": "passed"
});
});