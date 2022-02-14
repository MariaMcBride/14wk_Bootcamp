package com.mariamcbride.booksapi.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mariamcbride.booksapi.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
	// CrudRepository holds all the CRUD operations
	// Long is the datatype of the primary key
	// How JPA works to create custom queries following a certain format
	// depending on the method signature
	List<Book> findAll(); // this method retrieves all the books from the database

	List<Book> findByDescriptionContaining(String search); // this method finds books with descriptions containing the
															// search string

	Long countByTitleContaining(String search); // this method counts how many titles contain a certain string

	Long deleteByTitleStartingWith(String search); // this method deletes a book that starts with a specific title
}
