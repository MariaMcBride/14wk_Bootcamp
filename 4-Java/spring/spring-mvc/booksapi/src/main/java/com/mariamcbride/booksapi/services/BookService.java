package com.mariamcbride.booksapi.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.mariamcbride.booksapi.models.Book;
import com.mariamcbride.booksapi.repositories.BookRepository;

@Service
public class BookService {
    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }

    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }

    // update a book
    public Book updateBook(Book book, Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book book1 = optionalBook.get();
            book1.setTitle(book.getTitle());
            book1.setDescription(book.getDescription());
            book1.setLanguage(book.getLanguage());
            book1.setNumberOfPages(book.getNumberOfPages());
            return bookRepository.save(book1);
        } else {
            return null;
        }
    }

    // delete a book
    public String delete(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            bookRepository.deleteById(id);
            return "Deleted";
        } else {
            return "No book to delete";
        }
    }

}
