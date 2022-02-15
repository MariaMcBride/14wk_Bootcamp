package com.mariamcbride.booksapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.mariamcbride.booksapi.models.Book;
import com.mariamcbride.booksapi.services.BookService;

@Controller
public class BookController {
//  dependency injection to access the information in service:
//	private final BookService bookService;
//    
//    public BooksController(BookService bookService) {
//        this.bookService = bookService;
//    }
    // OR use @Autowired annotation to inject bean from service file 
    // to this file in place of doing the steps above
	@Autowired
	BookService bookService;
	
	@GetMapping("/books")
	public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
        return "index.jsp";
	}
	
	@GetMapping("/books/{bookId}")
	public String show(Model model,
			@PathVariable("bookId") Long bookId) {
//		System.out.println(bookId);
		Book book = bookService.findBook(bookId);
//		System.out.println(book);
		model.addAttribute("book", book);
		return "show.jsp";
	}
}
