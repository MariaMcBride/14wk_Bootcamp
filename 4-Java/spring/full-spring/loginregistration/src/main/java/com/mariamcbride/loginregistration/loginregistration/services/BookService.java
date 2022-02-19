package com.mariamcbride.loginregistration.loginregistration.services;

import java.util.List;
import java.util.Optional;

import com.mariamcbride.loginregistration.loginregistration.models.Book;
import com.mariamcbride.loginregistration.loginregistration.repositories.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    // ------------------ Retrieve All ----------------- //
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    // ------------------- Create One ------------------ //
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }

    // ------------------ Retrieve One ----------------- //
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            return optionalBook.get();
        } else
            return null;
    }

    // ------------------- Update One ------------------ //
    public Book updateBook(Book book) {
        Optional<Book> optionalBook = bookRepository.findById(book.getId());
        if (optionalBook.isPresent()) {
            return bookRepository.save(book);
        } else
            return null;
    }

    // ------------------- Delete One ------------------ //
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

}
