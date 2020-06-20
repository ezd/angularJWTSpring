package com.example.demo.security.service;

import com.example.demo.security.entity.Role;
import com.example.demo.security.entity.User;
import com.example.demo.security.model.NewUserDetail;

import java.util.Set;

public interface UserRegistrationService {
    NewUserDetail saveUser(NewUserDetail user);
    NewUserDetail saveUser(NewUserDetail user, Set<Role> roles);
    boolean isUserNameExists(String email);
}
