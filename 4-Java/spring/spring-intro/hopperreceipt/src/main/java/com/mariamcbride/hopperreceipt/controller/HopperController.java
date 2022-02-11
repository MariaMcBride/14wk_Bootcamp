package com.mariamcbride.hopperreceipt.controller;

import java.util.HashMap;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HopperController {
	// class definition and imports here...
    @RequestMapping("/")
    public String index(Model model) {
            	
//      String name = "Grace Hopper";
//      String itemName = "Copper wire";
//      double price = 5.25;
//      String description = "Metal strips, also an illustration of nanoseconds.";
//      String vendor = "Little Things Corner Store";
    	
    	HashMap<String, Object> attributes = new HashMap<String, Object>();
    	attributes.put("name", "Grace Hopper");
    	attributes.put("itemName", "Copper wire");
    	attributes.put("price", 5.25);
    	attributes.put("description", "Metal strips, also an illustration of nanoseconds.");
    	attributes.put("vendor", "Little Things Corner Store");
    
//    	model.addAttribute("name", name);
//    	model.addAttribute("itemName", itemName);
//    	model.addAttribute("price", price);
//    	model.addAttribute("description", description);
//    	model.addAttribute("vendor", vendor);
    	
        model.addAllAttributes(attributes);
    
        return "index.jsp";
    }

}
