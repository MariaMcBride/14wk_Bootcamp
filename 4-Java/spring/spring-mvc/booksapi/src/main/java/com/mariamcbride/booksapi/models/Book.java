package com.mariamcbride.booksapi.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

// These two annotations tell Spring the following:
@Entity // specifies that this class is an entity and is related to the database
@Table(name = "books") // there is a table named "books" in the database
public class Book {
	@Id // primary key is going to be auto-generated with "@GeneratedValue"
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	// -------- Validations -------- //
	@NotNull
	@Size(min = 5, max = 200, message = "Title must be at least 5 characters.")
	private String title;
	@NotNull
	@Size(min = 5, max = 200, message = "Description cannot exceed 200 characters.")
	private String description;
	@NotNull
	@Size(min = 3, max = 40, message = "Language must be at least 3 characters.")
	private String language;
	@NotNull
	@Min(value = 100, message = "Must be at least 100 pages.")
	private Integer numberOfPages;
	// This will not allow the createdAt column to be updated after creation
	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

	// -------- Constructor -------- //
	public Book() {
    }
    public Book(String title, String desc, String lang, int pages) {
        this.title = title;
        this.description = desc;
        this.language = lang;
        this.numberOfPages = pages;
    }
    
    // ----- Getters & Setters ----- //
    /**
	 * @return the id
	 */
	public Long getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}
	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}
	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	/**
	 * @return the language
	 */
	public String getLanguage() {
		return language;
	}
	/**
	 * @param language the language to set
	 */
	public void setLanguage(String language) {
		this.language = language;
	}
	/**
	 * @return the numberOfPages
	 */
	public Integer getNumberOfPages() {
		return numberOfPages;
	}
	/**
	 * @param numberOfPages the numberOfPages to set
	 */
	public void setNumberOfPages(Integer numberOfPages) {
		this.numberOfPages = numberOfPages;
	}
	/**
	 * @return the createdAt
	 */
	public Date getCreatedAt() {
		return createdAt;
	}
	/**
	 * @param createdAt the createdAt to set
	 */
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	/**
	 * @return the updatedAt
	 */
	public Date getUpdatedAt() {
		return updatedAt;
	}
	/**
	 * @param updatedAt the updatedAt to set
	 */
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	@PrePersist // runs the method right before the object is created
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate // runs a method when the object is modified
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
}
