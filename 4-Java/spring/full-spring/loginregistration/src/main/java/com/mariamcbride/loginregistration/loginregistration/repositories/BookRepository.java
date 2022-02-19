package com.mariamcbride.loginregistration.loginregistration.repositories;

import java.util.List;

import com.mariamcbride.loginregistration.loginregistration.models.Book;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
    List<Book> findAll();
}
