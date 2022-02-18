package com.mariamcbride.loginregistration.loginregistration.services;

import java.util.Optional;

import com.mariamcbride.loginregistration.loginregistration.models.LoginUser;
import com.mariamcbride.loginregistration.loginregistration.models.User;
import com.mariamcbride.loginregistration.loginregistration.repositories.UserRepository;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // TO-DO: Write register and login methods!

    // This method will be called from the controller
    // whenever a user submits a registration form.
    // TO-DO: Additional validations!
    public User register(User newUser, BindingResult result) {
        // TO-DO - Reject values or register if no errors:
        // Reject if email is taken (present in database) / unique validation
        if (userRepository.findByEmail(newUser.getEmail()).isPresent()) {
            result.rejectValue("email", "Unique", "This email is already in use!");
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

    // This method will be called from the controller
    // whenever a user submits a login form.
    // TO-DO: Additional validations!
    public User login(LoginUser newLogin, BindingResult result) {
        // TO-DO - Reject values:
        if (result.hasErrors()) {
            return null;
        }
        // Find user in the DB by email
        // Reject if NOT present
        Optional<User> potentialUser = userRepository.findByEmail(newLogin.getEmail());
        if (!potentialUser.isPresent()) {
            result.rejectValue("email", "Unique", "Unknown email!");
            return null;
        }
        // Reject if BCrypt password match fails
        User user = potentialUser.get();
        if (!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
            result.rejectValue("password", "Matches", "Invalid Password!");
        }
        // Return null if result has errors
        // Otherwise, return the user object
        if (result.hasErrors()) {
            return null;
        } else {
            return user;
        }
    }
}
