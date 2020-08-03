package com.example.demo.security.utils;

import com.example.demo.security.entity.Role;
import com.example.demo.security.entity.User;
import com.example.demo.security.enums.RoleEnum;
import com.example.demo.security.model.NewUserDetail;
import com.example.demo.security.service.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Component
public class DataInitialization {

    @Autowired
    UserRegistrationService userRegistrationService;

    @PostConstruct
    void init(){
        Role adminRole=new Role(RoleEnum.ADMIN);
        Set<Role> adminRoleset=new HashSet<>();
        adminRoleset.add(adminRole);
        String adminUUID = UUID.randomUUID().toString();

        String userUUID = UUID.randomUUID().toString();
        Role userRole=new Role(RoleEnum.USER);
        Set<Role> userRoleset=new HashSet<>();
        userRoleset.add(userRole);
        NewUserDetail newUserDetail = new NewUserDetail(userUUID,"Alemayew", "testma","4699871814","123456","user@gmail.com");
        NewUserDetail newAdminDetail = new NewUserDetail(userUUID,"Miftah","Kemal ","4699871815","adminadmin","admin@gmail.com");

        userRegistrationService.saveUser(newUserDetail,userRoleset);
        userRegistrationService.saveUser(newAdminDetail,adminRoleset);

    }
}
