package org.example.services;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

public class AssertExample {
    @Test
    public void test1(){
        List<Integer> list1= Arrays.asList(10,20,30,40);
        List<Integer> list2= Arrays.asList(10,20,30,40);
        Assertions.assertIterableEquals(list1,list2);
    }


}
