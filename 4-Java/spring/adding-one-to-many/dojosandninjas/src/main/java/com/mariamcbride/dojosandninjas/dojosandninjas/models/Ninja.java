package com.mariamcbride.dojosandninjas.dojosandninjas.models;

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
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "ninjas")
public class Ninja {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ------------------- Validations ------------------ //
    @Size(min = 2, message = "First name must be at least 2 characters")
    private String firstName;
    @Size(min = 2, message = "Last name must be at least 2 characters")
    private String lastName;
    @Min(value = 1, message = "Field cannot be blank")
    private int age;

    @Column(updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;

    // ------------------ Relationships ----------------- //
    // @ManyToOne: Defines a single-valued association to another entity class that
    // has many-to-one multiplicity. This may be used within an embeddable class to
    // specify a relationship from the embeddable class to an entity class. Notice
    // that our dojo attribute is referring to the dojo_id. Therefore, this
    // attribute gives the the dojo that a specific ninja belongs to.
    @ManyToOne(fetch = FetchType.LAZY) // every ninja created has to have a dojo
    // @JoinColumn(name="dojo_id"): Defines mapping for composite foreign keys. It
    // indicates that the corresponding table to this entity has a foreign_key to
    // the referenced table.
    @JoinColumn(name = "dojo_id")
    private Dojo dojo; // referenced by "mappedBy in Dojo model"

    // ------------------ Constructors ----------------- //
    public Ninja() {

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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
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

    public Dojo getDojo() {
        return dojo;
    }

    public void setDojo(Dojo dojo) {
        this.dojo = dojo;
    }

    // --------------- Methods --------------- //
    @PrePersist // runs the method right before the object is created
    protected void onCreate() {
        this.createdAt = new Date();
    }

    @PreUpdate // runs a method when the object is modified
    protected void onUpdate() {
        this.updatedAt = new Date();
    }

}
