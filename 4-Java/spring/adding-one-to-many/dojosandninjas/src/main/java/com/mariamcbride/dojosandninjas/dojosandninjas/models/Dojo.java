package com.mariamcbride.dojosandninjas.dojosandninjas.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "dojos")
public class Dojo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ------------------- Validations ------------------ //
    @NotNull
    @Size(min = 1, max = 200, message = "Field cannot be blank")
    private String location;

    @Column(updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;

    // ------------------ Relationships ----------------- //
    // @OneToMany: Defines a many-valued association with one-to-many multiplicity.
    // This may be used within an embeddable class contained within an entity class
    // to specify a relationship to a collection of entities. Notice that in this
    // case, our ninjas attribute is of type List<Ninja>.
    @OneToMany(mappedBy = "dojo", fetch = FetchType.LAZY)
    // @OneToMany(mappedBy="dojo"): This will map the ninjas attribute in the Dojo
    // class to the dojo attribute in the Ninja class.
    private List<Ninja> ninjas; // many (ninjas) always has the list

    // ------------------ Constructors ----------------- //
    public Dojo() {

    }

    // --------------- Getters & Setters --------------- //
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
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

    public List<Ninja> getNinjas() {
        return ninjas;
    }

    public void setNinjas(List<Ninja> ninjas) {
        this.ninjas = ninjas;
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