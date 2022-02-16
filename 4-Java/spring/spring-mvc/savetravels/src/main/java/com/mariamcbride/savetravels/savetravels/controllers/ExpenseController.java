package com.mariamcbride.savetravels.savetravels.controllers;

import java.util.List;

import javax.validation.Valid;

import com.mariamcbride.savetravels.savetravels.models.Expense;
import com.mariamcbride.savetravels.savetravels.services.ExpenseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@Controller
public class ExpenseController {
    @Autowired
    ExpenseService expenseService;

    // ------------------ Retrieve All / Create One ----------------- //
    @GetMapping("/expenses")
    public String index(
            Model model,
            @ModelAttribute("expense") Expense expense) {
        List<Expense> expenses = expenseService.allExpenses();
        model.addAttribute("expenses", expenses);
        return "index.jsp";
    }

    // Submit new
    @PostMapping("/expenses/submit")
    public String create(
            @Valid @ModelAttribute("expense") Expense expense,
            BindingResult result) {
        if (result.hasErrors()) {
            return "index.jsp";
        } else {
            expenseService.createExpense(expense);
            return "redirect:/expenses";
        }
    }

    // ------------------ Retrieve One ----------------- //
    @GetMapping("/expenses/{id}")
    public String show(Model model, @PathVariable("id") Long id) {
        Expense expense = expenseService.findExpense(id);
        model.addAttribute("expense", expense);
        return "show.jsp";
    }

    // ------------------- Update One ------------------ //
    @GetMapping("/expenses/{id}/edit")
    public String edit(@PathVariable("id") Long id, Model model) {
        Expense expense = expenseService.findExpense(id);
        model.addAttribute("expense", expense);
        return "edit.jsp";
    }

    // Submit updates
    @PutMapping("/expenses/{id}")
    public String update(
            @PathVariable("id") Long id,
            @Valid @ModelAttribute("expense") Expense expense, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
            System.out.println();
            expenseService.updateExpense(expense, id);
            return "redirect:/expenses";
        }
    }

    // ------------------- Delete One ----------------- //
    @DeleteMapping("/expenses/{id}")
    public String destroy(@PathVariable("id") Long id) {
        expenseService.delete(id);
        return "redirect:/expenses";
    }
}