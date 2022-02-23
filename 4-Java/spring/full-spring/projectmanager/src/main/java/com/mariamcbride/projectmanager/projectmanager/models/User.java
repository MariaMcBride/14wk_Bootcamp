package com.mariamcbride.projectmanager.projectmanager.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ------------------- Validations ------------------ //
    @NotEmpty(message = "First name is required!")
    @Size(min = 2, max = 30, message = "First name must be between 2 and 30 characters.")
    private String firstName;

    @NotEmpty(message = "Last name is required!")
    @Size(min = 2, max = 30, message = "Last name must be between 2 and 30 characters.")
    private String lastName;

    @NotEmpty(message = "Email is required!")
    @Email(message = "Please enter a valid email.")
    private String email;

    @NotEmpty(message = "Password is required!")
    @Size(min = 8, max = 128, message = "Password must be between 8 and 128 characters.")
    private String password;

    @Transient // used only for confirmation and won't be stored in the database
    @NotEmpty(message = "Field is required!")
    @Size(min = 8, max = 128, message = "Passwords must match.")
    private String confirm;

    // -------------- Created at/Updated at ------------- //
    @Column(updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;

    // ------------------ Relationships ----------------- //
    // 1:M - one team leader can create many projects
    @OneToMany(mappedBy = "leader", fetch = FetchType.LAZY)
    private List<Project> newProjects;

    // M:M - many users can join many projects
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "projects_users", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "project_id"))
    private List<Project> projects;

    // Sensei Bonus: 1:M - one member can have many tasks
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    private List<Task> tasks;

    // ------------------ Constructors ----------------- //
    public User() {
    }

    // --------------------- Method -------------------- //
    @PrePersist
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

    // --------------- Getters & Setters --------------- //
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirm() {
        return confirm;
    }

    public void setConfirm(String confirm) {
        this.confirm = confirm;
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

    public List<Project> getNewProjects() {
        return newProjects;
    }

    public void setNewProjects(List<Project> newProjects) {
        this.newProjects = newProjects;
    }

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

}
