package com.mariamcbride.loginregistration.loginregistration.repositories;

import java.util.Optional;

import com.mariamcbride.loginregistration.loginregistration.models.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> findByEmail(String email);

}
