package com.mariamcbride.booksapi.controllers;

import java.util.List;

import javax.validation.Valid;

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
import org.springframework.web.bind.annotation.RequestMethod;

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
	// Get all books
	@GetMapping("/books")
	public String index(Model model) {
        List<Book> books = bookService.allBooks();
        model.addAttribute("books", books);
//      System.out.println(books);
        return "index.jsp";
	}
	// Get one book
	@GetMapping("/books/{bookId}")
	public String show(Model model,
			@PathVariable("bookId") Long bookId) {
//		System.out.println(bookId);
		Book book = bookService.findBook(bookId);
//		System.out.println(book);
		model.addAttribute("book", book);
		return "show.jsp";
	}
	// Route to form page
	@GetMapping("/books/new")
	public String newBook(@ModelAttribute("book") Book book) {
		return "new.jsp";
	}	
	// Submit new
	@PostMapping("/books/submit")
	public String create(@Valid @ModelAttribute("book") Book book,
			BindingResult result) {
//	    @RequestParam("title") String title,
//	    @RequestParam("description") String description,
//	    @RequestParam("language") String language,
//	    @RequestParam("pages") Integer pages) 
		if (result.hasErrors()) {
			return "new.jsp";
		}
	    // CODE TO MAKE A NEW BOOK AND SAVE TO THE DB
//	    Book book = new Book(title, description, language, pages);
	    bookService.createBook(book);
	    return "redirect:/books";
	}
	// Edit book page
	@GetMapping("/books/{bookId}/edit")
    public String edit(@PathVariable("bookId") Long bookId, Model model) {
        Book book = bookService.findBook(bookId);
        model.addAttribute("book", book);
        return "edit.jsp";
    }
    // Submit updates
    @PutMapping("/books/{bookId}")
    public String update(
    		@PathVariable("bookId") Long bookId,
    		@Valid @ModelAttribute("book") Book book, BindingResult result) {
        if (result.hasErrors()) {
            return "edit.jsp";
        } else {
        	System.out.println();
            bookService.updateBook(book, bookId);
            return "redirect:/books";
        }
    }
    // Delete book
    @DeleteMapping("/books/{bookId}")
    public String destroy(@PathVariable("bookId") Long bookId) {
        bookService.delete(bookId);
        return "redirect:/books";
    }

}
