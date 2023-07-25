package com.example.security.controllers;

import com.example.security.entities.User;
import com.example.security.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/home")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {
    @Autowired
    private UserService userservice;

//    Logger logger = LoggerFactory.getLogger(HomeController.class);
    @CrossOrigin(origins = "*")
    @GetMapping("/users")
    public List<User> getUser(){
//        this.logger.warn("This is working message");
        System.out.println("Hi");
        return userservice.getUser();
    }
    @GetMapping("/current-user")
    @CrossOrigin(origins = "*")
    public String getLoggedInUser(Principal principal){
        return principal.getName();
    }
}
