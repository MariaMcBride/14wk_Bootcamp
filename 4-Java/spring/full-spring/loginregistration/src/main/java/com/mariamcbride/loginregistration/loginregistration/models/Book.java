package com.mariamcbride.loginregistration.loginregistration.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ------------------- Validations ------------------ //
    @NotEmpty(message = "Title cannot be blank.")
    @Size(min = 2, max = 50, message = "Title must be at least 2 characters.")
    private String title;
    @NotEmpty(message = "Author cannot be blank.")
    @Size(min = 2, max = 50, message = "Author must be at least 2 characters.")
    private String author;
    @NotEmpty(message = "Thoughts cannot be blank.")
    @Size(min = 2, max = 1000, message = "Thoughts must be at least 2 characters and cannot exceed 1000 characters.")
    private String thoughts;

    // -------------- Created at/Updated at ------------- //
    @Column(updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    // ------------------ Relationships ----------------- //
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    // ------------------ Constructors ----------------- //
    public Book() {
    }

    // public Book(Long id,
    // String title,
    // String author,
    // String thoughts,
    // Date createdAt,
    // Date updatedAt,
    // User user) {
    // this.id = id;
    // this.title = title;
    // this.author = author;
    // this.thoughts = thoughts;
    // this.createdAt = createdAt;
    // this.updatedAt = updatedAt;
    // this.user = user;
    // }

    // --------------- Getters & Setters --------------- //
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getThoughts() {
        return thoughts;
    }

    public void setThoughts(String thoughts) {
        this.thoughts = thoughts;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
