package org.example;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.junit.jupiter.api.Assertions.*;

public class UserServiceTest {

    @Test
    public void ValidateUser_Success() {

        UserRepository mockRepo = Mockito.mock(UserRepository.class);
        User mockUser = new User("john", "1234");
        Mockito.when(mockRepo.findByUsername("john")).thenReturn(mockUser);

        UserService userService = new UserService(mockRepo);


        boolean result = userService.validateUser("john", "1234");


        assertTrue(result);
    }

//create a test case that will user don't exist it will pass
    @Test
    public void User_Not_Exist_Then_Successful() {
        UserRepository mockRepo = Mockito.mock(UserRepository.class);


        UserService userService = new UserService(mockRepo);

        boolean result = userService.validateUserWhenUserNotThere("jonny", "1234");

        assertTrue(result);
    }
}


