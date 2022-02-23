package com.mariamcbride.projectmanager.projectmanager.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import com.mariamcbride.projectmanager.projectmanager.models.LoginUser;
import com.mariamcbride.projectmanager.projectmanager.models.User;
import com.mariamcbride.projectmanager.projectmanager.services.UserService;

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
        // if logged in, redirect to dashboard
        if (session.getAttribute("user_id") != null) {
            return "redirect:/dashboard";
        }
        model.addAttribute("newUser", new User());
        model.addAttribute("newLogin", new LoginUser());
        return "index.jsp";
    }

    // ------------------- Register ------------------ //
    @PostMapping("/register")
    public String register(
            @Valid @ModelAttribute("newUser") User newUser,
            BindingResult result,
            Model model,
            HttpSession session) {
        // call a register method in the service
        // to do some extra validations and create a new user
        userService.register(newUser, result);
        if (result.hasErrors()) {
            model.addAttribute("newLogin", new LoginUser());
            return "index.jsp";
        }
        // Store their ID from the DB in session to log them in
        session.setAttribute("user_id", newUser.getId());
        return "redirect:/dashboard";
    }

    // -------------------- Login -------------------- //
    @PostMapping("/login")
    public String login(
            @Valid @ModelAttribute("newLogin") LoginUser newLogin,
            BindingResult result,
            Model model,
            HttpSession session) {
        // Add once service is implemented:
        User user = userService.login(newLogin, result);
        if (result.hasErrors()) {
            model.addAttribute("newUser", new User());
            return "index.jsp";
        }
        session.setAttribute("user_id", user.getId());
        return "redirect:/dashboard";
    }

    // -------------------- Logout ------------------- //
    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

}
