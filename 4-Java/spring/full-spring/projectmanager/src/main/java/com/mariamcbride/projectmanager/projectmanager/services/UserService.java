package com.mariamcbride.projectmanager.projectmanager.services;

import java.util.List;
import java.util.Optional;

import com.mariamcbride.projectmanager.projectmanager.models.LoginUser;
import com.mariamcbride.projectmanager.projectmanager.models.User;
import com.mariamcbride.projectmanager.projectmanager.repositories.UserRepository;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // ------------------ Register ----------------- //
    // This method will be called from the controller
    // whenever a user submits a registration form.
    public User register(User newUser, BindingResult result) {
        // Reject if email is taken (present in database) / unique validation
        if (userRepository.findByEmail(newUser.getEmail()).isPresent()) {
            result.rejectValue("email", "Unique", "This email is already taken!");
        }
        // Reject if password doesn't match confirmation
        if (!newUser.getPassword().equals(newUser.getConfirm())) {
            result.rejectValue("confirm", "Matches", "Both passwords must match!");
        }
        // Return null if result has errors
        if (result.hasErrors()) {
            return null;
            // Hash and set password, save user to database
        } else {
            String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
            newUser.setPassword(hashed);
            return userRepository.save(newUser);
        }
    }

    // ------------------- Login ------------------- //
    // This method will be called from the controller
    // whenever a user submits a login form.
    public User login(LoginUser newLogin, BindingResult result) {
        if (result.hasErrors()) {
            return null;
        }
        // Reject if user email doesn't exist in the DB
        Optional<User> potentialUser = userRepository.findByEmail(newLogin.getEmail());
        if (!potentialUser.isPresent()) {
            result.rejectValue("email", "Unique", "Email doesn't exist!");
            return null;
        }
        // Reject if BCrypt password match fails
        User user = potentialUser.get();
        if (!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
            result.rejectValue("password", "Matches", "Invalid Password!");
        }
        // Return user object if no errors
        if (result.hasErrors()) {
            return null;
        } else {
            return user;
        }
    }

    // ------------------ Retrieve All ----------------- //
    public List<User> allUsers() {
        return userRepository.findAll();
    }

    // ------------------ Retrieve One ----------------- //
    public User findUser(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else
            return null;
    }

}
