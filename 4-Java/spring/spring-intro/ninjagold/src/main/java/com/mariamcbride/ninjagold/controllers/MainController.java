package com.mariamcbride.ninjagold.controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Random;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
	public ArrayList<String> activities = new ArrayList<String>();

	@GetMapping("/gold")
	public String index(HttpSession session) {
		if (session.getAttribute("gold") == null) {
			session.setAttribute("gold", 0);
		}
		if (session.getAttribute("activities") == null) {
			session.setAttribute("activities", new ArrayList<String>());
			session.setAttribute("activities", activities);
			// session.setAttribute("multiMap", new HashMap<>());
		}
		return "index.jsp";
	}

	@PostMapping("/gold/process")
	public String processGold(
			HttpSession session,
			@RequestParam(value = "propertyType") String propertyType) {
		Random randomGenerator = new Random();
		Date newDate = new Date();
		String message = "You entered a ";
		String gained = "gained";
		Integer gold = (Integer) session.getAttribute("gold");
		Integer moreGold;
		Collections.reverse(activities);
		message += propertyType + " and " + gained + " " + gold + " gold. " + "(" + newDate + ")";
		// Map<String, ArrayList<Integer>> multiMap = new HashMap<>();
		// multiMap.put("farm", new ArrayList<Integer>(Arrays.asList(10, 20)));
		// multiMap.put("cave", new ArrayList<Integer>(Arrays.asList(5, 10)));
		// multiMap.put("house", new ArrayList<Integer>(Arrays.asList(2, 5)));
		// multiMap.put("casino", new ArrayList<Integer>(Arrays.asList(-50, 50)));
		// multiMap.put("spa", new ArrayList<Integer>(Arrays.asList(5, 20)));
		if (propertyType.equals("farm")) {
			moreGold = randomGenerator.nextInt(21 - 10) + 10;
			// gold = (Integer) session.getAttribute("gold");
			ArrayList<String> activities = (ArrayList<String>) session.getAttribute("activities");
			session.setAttribute("gold", gold + moreGold);
			activities.add(message);
		} else if (propertyType.equals("cave")) {
			moreGold = randomGenerator.nextInt(11 - 5) + 5;
			// gold = (Integer) session.getAttribute("gold");
			ArrayList<String> activities = (ArrayList<String>) session.getAttribute("activities");
			session.setAttribute("gold", gold + moreGold);
			activities.add(message);
		} else if (propertyType.equals("house")) {
			moreGold = randomGenerator.nextInt(6 - 2) + 2;
			// gold = (Integer) session.getAttribute("gold");
			ArrayList<String> activities = (ArrayList<String>) session.getAttribute("activities");
			session.setAttribute("gold", gold + moreGold);
			activities.add(message);
		} else if (propertyType.equals("casino")) {
			Integer odds = randomGenerator.nextInt(2) + 1;
			// gold = (Integer) session.getAttribute("gold");
			moreGold = randomGenerator.nextInt(51 - 50) + 50;
			if (odds == 1) {
				session.setAttribute("gold", gold + moreGold);
				ArrayList<String> activities = (ArrayList<String>) session.getAttribute("activities");
				session.setAttribute("gold", gold + moreGold);
				activities.add(message);
			} else {
				moreGold = -moreGold;
				gained = "lost";
				session.setAttribute("gold", gold - moreGold);
				ArrayList<String> activities = (ArrayList<String>) session.getAttribute("activities");
				session.setAttribute("gold", gold + moreGold);
				activities.add(message);
			}
		}
		return "redirect:/gold";
	}

	@GetMapping("/reset")
	public String reset(HttpSession session) {
		session.setAttribute("gold", 0);
		session.setAttribute("activities", null);
		return "redirect:/gold";
	}
}

// String location = propertyType.substring(0, propertyType.indexOf(""));
// String message = "You entered a ";
// String gained = "gained";
// Random randomGenerator = new Random();
// Date newDate = new Date();
// int min;
// int max;
// Integer moreGold = 0;
// Integer gold = (Integer) session.getAttribute("gold");
// ArrayList<String> activities = (ArrayList<String>)
// session.getAttribute("activities");
// Collections.reverse(activities);
// switch(location) {
// case "casino":
// min = -50; max = 50;
// moreGold = randomGenerator.nextInt(min, max);
// if (randomGenerator.nextInt(1)==1) {
// moreGold = -moreGold;
// gained = "lost";
// }
// break;
// case "farm":
// min = 10; max = 20;
// moreGold = randomGenerator.nextInt(min, max);
// break;
// case "cave":
// min = 5; max = 10;
// moreGold = randomGenerator.nextInt(min, max);
// break;
// case "house":
// min = 2; max = 5;
// moreGold = randomGenerator.nextInt(min, max);
// break;
// case "spa":
// min = 5; max = 21;
// moreGold = randomGenerator.nextInt(min, max);
// break;
// }
// gold += moreGold;
// message += location + " and " + gained + " " + gold + " gold. " + "(" +
// newDate + ")";
// session.setAttribute("gold", gold);
// activities.add(message);