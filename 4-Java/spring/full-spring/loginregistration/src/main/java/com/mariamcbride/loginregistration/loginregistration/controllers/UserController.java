package com.mariamcbride.loginregistration.loginregistration.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import com.mariamcbride.loginregistration.loginregistration.models.LoginUser;
import com.mariamcbride.loginregistration.loginregistration.models.User;
import com.mariamcbride.loginregistration.loginregistration.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    // Bind empty User and LoginUser objects to the JSP
    // to capture the form input
    @GetMapping("/")
    public String index(HttpSession session, Model model) {
        if (session.getAttribute("user_id") != null) {
            return "redirect:/books";
        }
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index.jsp";
    }

    // ------------------- Register ------------------ //
    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("newUser") User newUser,
            BindingResult result, Model model, HttpSession session) {
        // TO-DO Later -- call a register method in the service
        // to do some extra validations and create a new user!
        userService.register(newUser, result);
        if (result.hasErrors()) {
            // Be sure to send in the empty LoginUser before
            // re-rendering the page.
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }
        // No errors!
        // TO-DO Later: Store their ID from the DB in session,
        // in other words, log them in.
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/books";
    }

    // -------------------- Login -------------------- //
    @PostMapping("/login")
    public String login(@Valid @ModelAttribute("newLogin") LoginUser newLogin,
            BindingResult result, Model model, HttpSession session) {
        // Add once service is implemented:
        User user = userService.login(newLogin, result);
        if (result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }
        // No errors!
        // TO-DO Later: Store their ID from the DB in session,
        // in other words, log them in.
        session.setAttribute("user_id", user.getId());
        return "redirect:/books";
    }

    // -------------------- Logout ------------------- //
    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

}
