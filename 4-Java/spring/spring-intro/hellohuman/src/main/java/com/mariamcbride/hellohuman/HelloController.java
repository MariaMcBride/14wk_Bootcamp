package com.mariamcbride.hellohuman;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HelloController {

	@RequestMapping("")
	public String index(
//			@RequestParam(value="name", required=false) String name,
			@RequestParam(value="firstName", required=false) String firstName,
			@RequestParam(value="lastName", required=false) String lastName,
			@RequestParam(value="times", required=false) Integer times) {
		
//		if (name == null) 
//			return "Hello Human";
		if (times != null) {
			String result = "";
			for (int i = 0; i < times; i++)
				result += ("Hello " + firstName + " ");
			return result;
		}
		else if (lastName == null && firstName != null) 
			return "Hello " + firstName;
		else if (firstName != null && lastName != null)
			return "Hello " + firstName + " " + lastName;
		else return "Hello Human";
						
	}

}
