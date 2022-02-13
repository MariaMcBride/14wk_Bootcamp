package com.mariamcbride.omikujiform.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class FormController {

	// Make a request mapping for the url /omikuji to render the main page showing
	// the omikuji form:
	@GetMapping("/omikuji")
	public String index() {
		return "index.jsp";
	}

	// Include a request mapping to handle processing the information from the form,
	// store the form input into session and redirect to the /omikuji/show route:
	@PostMapping("/omikuji/submit")
	public String formData(HttpSession session, 
			@RequestParam(value = "number") Integer number,
			@RequestParam(value = "city") String city, 
			@RequestParam(value = "person") String person,
			@RequestParam(value = "occupation") String occupation, 
			@RequestParam(value = "thing") String thing,
			@RequestParam(value = "nice") String nice) {
		session.setAttribute("number", number);
		session.setAttribute("city", city);
		session.setAttribute("person", person);
		session.setAttribute("occupation", occupation);
		session.setAttribute("thing", thing);
		session.setAttribute("nice", nice);
		return "redirect:/omikuji/show";
	}

	// Make a request mapping for the url /omikuji/show that renders a page with a
	// blue box with a message. Include an anchor tag that goes back to /omikuji:
	@GetMapping("/omikuji/show")
	public String show(HttpSession session, Model model) {
		/*
		 * model.addAttribute("number", session.getAttribute("number"));
		 * model.addAttribute("city", session.getAttribute("city"));
		 * model.addAttribute("person", session.getAttribute("person"));
		 * model.addAttribute("occupation", session.getAttribute("occupation"));
		 * model.addAttribute("thing", session.getAttribute("thing"));
		 * model.addAttribute("nice", session.getAttribute("nice"));
		 */
		return "omikuji.jsp";
	}

}