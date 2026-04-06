package org.example.services;

import org.junit.jupiter.api.*;


public class CalculatorServiceTest {


    @BeforeAll
    public static void init(){
        System.out.println("executed first");
    }
    @Test
    //you can also make it disabled
    @Disabled
    public void addTwoNumbersTest(){
        int result=CalculatorService.addTwoNumbers(10,15);
        int expected=27;
        Assertions.assertEquals(expected,result,"test not matched");
    }

    @Test
    //you can add display name
    @DisplayName("Bhagyesh")
    public void sumAnyNumbersTest(){
        int result=CalculatorService.sumAnyNumbers(10,14,16,18);
        int expected=58;
        Assertions.assertEquals(expected,result);
    }
    @AfterAll
    public static void atlast(){
        System.out.println("executed at last");
    }
}

