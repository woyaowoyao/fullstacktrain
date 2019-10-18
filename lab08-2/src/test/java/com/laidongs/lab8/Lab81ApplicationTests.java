package com.laidongs.lab8;

import org.aspectj.lang.annotation.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import org.junit.Assert;

@RunWith(SpringRunner.class)
@SpringBootTest
public class Lab81ApplicationTests {


//	    private Calculation unit;
	    @Before(value = "")
	    public void before(){
//	        unit = new Calculation();
	    }
	    
		@Test
	    public void testAdd(){
	        Assert.assertEquals(Calculation.add(1, 2), 3);
	        Assert.assertEquals(Calculation.add(100, 5), 105);
	        Assert.assertEquals(Calculation.add(0, 0), 0);
	        Assert.assertEquals(Calculation.add(Integer.MAX_VALUE, 0), Integer.MAX_VALUE);
	        Assert.assertEquals(Calculation.add(Integer.MIN_VALUE, 0), Integer.MIN_VALUE);
	    }	    
	    @Test
	    public void testSub(){
	        Assert.assertEquals(Calculation.sub(1, 2), -1);
	        Assert.assertEquals(Calculation.sub(100, 5), 95);
	        Assert.assertEquals(Calculation.sub(0, 0), 0);
	        Assert.assertEquals(Calculation.sub(-1, 0), -1);
	        Assert.assertEquals(Calculation.sub(Integer.MAX_VALUE, 0), Integer.MAX_VALUE);
	        Assert.assertEquals(Calculation.sub(Integer.MIN_VALUE, 0), Integer.MIN_VALUE);
	    }
	}