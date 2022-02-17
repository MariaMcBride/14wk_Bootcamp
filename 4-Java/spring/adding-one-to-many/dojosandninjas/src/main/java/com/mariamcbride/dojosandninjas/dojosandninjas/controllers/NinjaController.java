package com.mariamcbride.dojosandninjas.dojosandninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import com.mariamcbride.dojosandninjas.dojosandninjas.models.Dojo;
import com.mariamcbride.dojosandninjas.dojosandninjas.models.Ninja;
import com.mariamcbride.dojosandninjas.dojosandninjas.services.DojoService;
import com.mariamcbride.dojosandninjas.dojosandninjas.services.NinjaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class NinjaController {
    @Autowired
    private DojoService dojoService;

    @Autowired
    private NinjaService ninjaService;

    // ------------------- Create One ------------------ //
    @GetMapping("/ninjas")
    public String newNinja(
            @ModelAttribute("ninja") Ninja ninja,
            Model model) {
        List<Dojo> dojos = dojoService.allDojos();
        model.addAttribute("dojos", dojos);
        return "newninja.jsp";
    }

    // Submit new
    @PostMapping("/ninjas")
    public String create(
            @Valid @ModelAttribute("ninja") Ninja ninja,
            BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            List<Dojo> dojos = dojoService.allDojos();
            model.addAttribute("dojos", dojos);
            return "newninja.jsp";
        } else {
            ninjaService.createNinja(ninja);
            return String.format("redirect:/dojos/%s", ninja.getDojo().getId());
        }
    }

}
