package com.isobar.ecom.Flipkart;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//@CucumberOptions(dryRun=true,monochrome=true,features="features")
@CucumberOptions(dryRun=false,monochrome=true,features= {"features/Test.feature"},glue="glue", format= {"pretty", "html:reports", "json:reports/test.json"} )
public class Runner {

}
