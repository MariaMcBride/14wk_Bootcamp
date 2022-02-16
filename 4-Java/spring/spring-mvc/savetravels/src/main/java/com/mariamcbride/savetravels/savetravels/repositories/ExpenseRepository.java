package com.mariamcbride.savetravels.savetravels.repositories;

import java.util.List;

import com.mariamcbride.savetravels.savetravels.models.Expense;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {
    List<Expense> findAll();

    List<Expense> findByDescriptionContaining(String search);

    Long countByNameContaining(String search);

    Long deleteByNameStartingWith(String search);
}
