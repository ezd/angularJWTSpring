package com.example.demo.security.repo;

import com.example.demo.security.entity.User;
import com.example.demo.security.model.NewUserDetail;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User, Integer> {
    User findByUserName(String userName);
}
