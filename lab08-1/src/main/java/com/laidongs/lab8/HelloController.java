package com.laidongs.lab8;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

//请求方式注解，value是指请求路径，method是请求方法
	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public String say() {
		return "hello Spring Boot";

	}
	
	@RequestMapping(value = "/welcome", method = RequestMethod.GET)
	public String welcome() {
		return "welcome Spring Boot";

	}

}
