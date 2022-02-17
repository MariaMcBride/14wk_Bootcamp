package com.mariamcbride.dojosandninjas.dojosandninjas.controllers;

import java.util.List;

import javax.validation.Valid;

import com.mariamcbride.dojosandninjas.dojosandninjas.models.Dojo;
import com.mariamcbride.dojosandninjas.dojosandninjas.services.DojoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;

@Controller
public class DojoController {
    @Autowired
    private DojoService dojoService;

    @GetMapping("/")
    public String index() {
        return "redirect:/dojos";
    }

    // ------------------ Create One / Retrieve All ----------------- //
    @GetMapping("/dojos")
    public String index(
            @ModelAttribute("dojo") Dojo dojo,
            Model model) {
        List<Dojo> dojos = dojoService.allDojos();
        model.addAttribute("dojos", dojos);
        return "newdojo.jsp";
    }

    // Submit new
    @PostMapping("/dojos")
    public String create(
            @Valid @ModelAttribute("dojo") Dojo dojo,
            BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            List<Dojo> dojos = dojoService.allDojos();
            model.addAttribute("dojos", dojos);
            return "newdojo.jsp";
        } else {
            dojoService.createDojo(dojo);
            return "redirect:/dojos";
        }
    }

    // ------------------ Retrieve One ----------------- //
    @GetMapping("/dojos/{id}")
    public String show(@PathVariable("id") Long id, Model model) {
        Dojo dojo = dojoService.findDojo(id);
        model.addAttribute("dojo", dojo);
        return "dojoninjas.jsp";
    }

}
