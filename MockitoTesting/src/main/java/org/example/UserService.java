package org.example;


public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean validateUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }

    public boolean validateUserWhenUserNotThere(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user ==null ;
    }
}
