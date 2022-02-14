package com.mariamcbride.booksapi.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mariamcbride.booksapi.models.Book;
import com.mariamcbride.booksapi.services.BookService;

@RestController
public class BooksApi {
	private final BookService bookService;
	// -------- Constructor -------- //
	public BooksApi(BookService bookService) {
		this.bookService = bookService;
	}
	// ------- Gets All Books ------- //
	@GetMapping("/api/books")
	public List<Book> index() {
		return bookService.allBooks();
	}
	// ------ Create New Books ------ //
	@PostMapping("/api/books")
	public Book create(
			@RequestParam(value="title") String title, 
			@RequestParam(value="description") String desc,
			@RequestParam(value="language") String lang, 
			@RequestParam(value="pages") Integer numOfPages) {
		Book book = new Book(title, desc, lang, numOfPages);
		return bookService.createBook(book);
	}
	// ------- View One Book ------- //
	@GetMapping("/api/books/{id}")
	public Book show(@PathVariable("id") Long id) {
		Book book = bookService.findBook(id);
		return book;
	}
	// ------ Update One Book ------ //
	@PutMapping("/api/books/{id}")
    public Book update(
        @PathVariable("id") Long id, 
        @RequestParam(value="title") String title, 
        @RequestParam(value="description") String desc, 
        @RequestParam(value="language") String lang,
        @RequestParam(value="pages") Integer numOfPages) {
        Book book = new Book(title, desc, lang, numOfPages);
        book.setId(id);
		book = bookService.updateBook(book);
        return book;
    }
	// ------ Delete One Book ------ //
	@DeleteMapping("/api/books/{id}")
    public void delete(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
    }

}
