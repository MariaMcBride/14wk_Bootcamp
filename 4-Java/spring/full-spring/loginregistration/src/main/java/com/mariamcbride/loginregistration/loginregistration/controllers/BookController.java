package com.mariamcbride.loginregistration.loginregistration.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import com.mariamcbride.loginregistration.loginregistration.models.Book;
import com.mariamcbride.loginregistration.loginregistration.models.User;
import com.mariamcbride.loginregistration.loginregistration.services.BookService;
import com.mariamcbride.loginregistration.loginregistration.services.UserService;

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
public class BookController {

    @Autowired
    private UserService userService;

    @Autowired
    private BookService bookService;

    // ------------ Dashboard / Retrieve All ----------- //
    @GetMapping("/books")
    public String dashboard(HttpSession session, Model model) {
        // route guard
        // grab user from database using session id
        Long userId = (Long) session.getAttribute("user_id");
        // check to make sure user is logged in
        if (userId != null) {
            // grab user by id from the database
            User loggedUser = userService.findUser(userId);
            List<Book> books = bookService.allBooks();
            model.addAttribute("loggedUser", loggedUser);
            model.addAttribute("books", books);
            return "dashboard.jsp";
        } else {
            return "redirect:/";
        }
    }

    // ------------------ Create One ------------------ //
    // create new book form
    @GetMapping("/books/new")
    public String createBook(
            @ModelAttribute("book") Book book,
            Model model,
            HttpSession session) {
        // route guard
        Long userId = (Long) session.getAttribute("user_id");
        if (userId == null) {
            return "redirect:/";
        } else {
            User loggedUser = userService.findUser(userId);
            model.addAttribute("loggedUser", loggedUser);
            return "new.jsp";
        }
    }

    // submit new book
    @PostMapping("/books/new")
    public String submitBook(
            @Valid @ModelAttribute("book") Book book,
            BindingResult result,
            Model model,
            HttpSession session) {
        Long userId = (Long) session.getAttribute("user_id");
        if (result.hasErrors()) {
            User loggedUser = userService.findUser(userId);
            model.addAttribute("loggedUser", loggedUser);
            return "new.jsp";
        } else {
            User loggedUser = userService.findUser(userId);
            model.addAttribute("loggedUser", loggedUser);
            book.setUser(loggedUser);
            bookService.createBook(book);
            return "redirect:/books";
        }
    }

    // ------------------ Retrieve One ----------------- //
    @GetMapping("/books/{id}")
    public String viewBook(
            @PathVariable("id") Long id,
            Model model,
            HttpSession session) {
        // route guard
        // grab user from session for conditional rendering (on edit button)
        Long userId = (Long) session.getAttribute("user_id");
        if (userId != null) {
            User loggedUser = userService.findUser(userId);
            model.addAttribute("loggedUser", loggedUser);
            Book book = bookService.findBook(id);
            model.addAttribute("book", book);
            return "viewone.jsp";
        } else {
            return "redirect:/";
        }
    }

    // ------------------- Update One ------------------ //
    @GetMapping("/books/{id}/edit")
    public String editBook(
            @PathVariable("id") Long id,
            Model model,
            HttpSession session) {
        // route guard
        Long userId = (Long) session.getAttribute("user_id");
        if (userId != null) {
            Book book = bookService.findBook(id);
            model.addAttribute("book", book);
            model.addAttribute("users", userService.allUsers());
            return "edit.jsp";
        } else {
            return "redirect:/";
        }
    }

    // submit update
    @PutMapping("/books/{id}/edit")
    public String updateBook(
            @Valid @ModelAttribute("book") Book book,
            BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            // keeps title from disappearing when you submit an empty input field
            // Book book1 = bookService.findBook(book.getId());
            // book.setTitle(book1.getTitle());
            List<User> users = userService.allUsers();
            model.addAttribute("users", users);
            return "edit.jsp";
        } else {
            bookService.updateBook(book);
            return "redirect:/books/{id}";
        }
    }

    // Book Broker Assignment: Add new dashboard, borrow, return, and delete routes

    // ------------- Library / Retrieve All ------------ //
    @GetMapping("/bookmarket")
    public String library(HttpSession session, Model model) {
        // route guard
        Long userId = (Long) session.getAttribute("user_id");
        if (userId != null) {
            User loggedUser = userService.findUser(userId);
            List<Book> books = bookService.allBooks();
            List<Book> borrowedBooks = loggedUser.getBorrowedBooks();
            model.addAttribute("loggedUser", loggedUser);
            model.addAttribute("books", books);
            model.addAttribute("borrowedBooks", borrowedBooks);
            return "library.jsp";
        } else {
            return "redirect:/";
        }
    }

    // ------------------- Borrow One ------------------ //
    @PutMapping("/books/{id}/borrow")
    public String borrowBook(
            @PathVariable("id") Long id,
            HttpSession session) {
        Long userId = (Long) session.getAttribute("user_id");
        User borrower = userService.findUser(userId);
        Book book = bookService.findBook(id);
        book.setBorrower(borrower);
        bookService.createBook(book);
        return "redirect:/bookmarket";
    }

    // ------------------- Return One ------------------ //
    @PutMapping("/books/{id}/return")
    public String returnBook(
            @PathVariable("id") Long id,
            HttpSession session) {
        Book book = bookService.findBook(id);
        book.setBorrower(null);
        bookService.createBook(book);
        return "redirect:/bookmarket";
    }

    // ------------------- Delete One ------------------ //
    @DeleteMapping("/books/{id}/delete")
    public String deleteBook(@PathVariable("id") Long id) {
        bookService.deleteBook(id);
        return "redirect:/books";
    }
}
