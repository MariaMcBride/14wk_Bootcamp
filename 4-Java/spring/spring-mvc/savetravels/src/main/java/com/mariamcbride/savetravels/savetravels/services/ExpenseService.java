package com.mariamcbride.savetravels.savetravels.services;

import java.util.List;
import java.util.Optional;

import com.mariamcbride.savetravels.savetravels.models.Expense;
import com.mariamcbride.savetravels.savetravels.repositories.ExpenseRepository;

import org.springframework.stereotype.Service;

@Service
public class ExpenseService {
    private final ExpenseRepository expenseRepository;

    // ------------------ Constructor ------------------ //
    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    // ------------------ Retrieve All ----------------- //
    public List<Expense> allExpenses() {
        return expenseRepository.findAll();
    }

    // ------------------- Create One ------------------ //
    public Expense createExpense(Expense b) {
        return expenseRepository.save(b);
    }

    // ------------------ Retrieve One ----------------- //
    public Expense findExpense(Long id) {
        Optional<Expense> optionalExpense = expenseRepository.findById(id);
        if (optionalExpense.isPresent()) {
            return optionalExpense.get();
        } else {
            return null;
        }
    }

    // ------------------- Update One ------------------ //
    public Expense updateExpense(Expense expense) {
        Optional<Expense> optionalExpense = expenseRepository.findById(expense.getId());
        if (optionalExpense.isPresent()) {
            return expenseRepository.save(expense);
        } else {
            return null;
        }
    }

    // ------------------- Delete One ----------------- //
    public String delete(Long id) {
        Optional<Expense> optionalExpense = expenseRepository.findById(id);
        if (optionalExpense.isPresent()) {
            expenseRepository.deleteById(id);
            return "Deleted";
        } else {
            return "No expense to delete";
        }
    }

}