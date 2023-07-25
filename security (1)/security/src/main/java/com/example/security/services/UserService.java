package com.example.security.services;

import com.example.security.entities.User;
import com.example.security.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {
//    private List<User> store=new ArrayList();
//    public UserService(){
//        store.add( new User(UUID.randomUUID().toString(),"Rahul Patnaik","rahulpatnaiknb@gmail.com"));
//        store.add(new User(UUID.randomUUID().toString(),"Satya Prakash Dwibedy","PDsatya@gmail.com"));
//        store.add(new User(UUID.randomUUID().toString(),"Snehasis Deb","deb@gmail.com"));
//        store.add(new User(UUID.randomUUID().toString(),"V Anjan Sampath","sampath@gmail.com"));
//    }
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getUser(){
        return userRepository.findAll();
    }

    public User createUser(User user) {
        user.setUserId(UUID.randomUUID().toString());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}
