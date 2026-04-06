package org.example.services;

import org.junit.*;

public class CalculatorServiceTest {

    //before class is use to excute the first
    @BeforeClass
    public static void init(){
        System.out.println("this will executed first");
    }

    @Test(timeout = 2000)   //you can add timeout also if it take more than 2 sec it will failede
    public void addTwoNumbersTest() throws InterruptedException{
       int result= CalculatorService.addTwoNumbers(12,45);
       Thread.sleep(3000);
       int expected=57;
       Assert.assertEquals(expected,result);
    }


    //will excute only before the case not like BeforeClass
    @Before
    public  void beforeEach(){
        System.out.println("will run before the given case only");
    }

    @Test
    public void sumAnyNumbersTest(){
        int result=CalculatorService.sumAnyNumbers(12,13,14,15);
        int expected=54;
        Assert.assertEquals(expected,result);
    }


    //run after the all the test cases are passe\
    @AfterClass
    public static void cleanUp(){
        System.out.println("will excute after the all test cases are excuted");
    }

}

