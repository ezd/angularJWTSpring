package com.example.demo.security.service.impl;

import com.example.demo.security.entity.Role;
import com.example.demo.security.entity.User;
import com.example.demo.security.enums.RoleEnum;
import com.example.demo.security.model.NewUserDetail;
import com.example.demo.security.repo.RoleRepo;
import com.example.demo.security.repo.UserRepo;
import com.example.demo.security.service.UserRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    RoleRepo roleRepo;

    @Override
    public NewUserDetail saveUser(NewUserDetail newUserDetail) {
        User user = new User();
        user.setUserName(newUserDetail.getEmail());
        user.setPassWord(newUserDetail.getUserPassword());
        user.setCreatedOn(new Date());
        user.setEnabled(true);
        user.setLocked(false);

        Role userRole=new Role(RoleEnum.USER);
        Set<Role> userRoleset=new HashSet<>();
        userRoleset.add(userRole);
        user.setRoles(userRoleset);

        user.setPhoneNumber(newUserDetail.getPhoneNumber());
        user.setUserFullName(newUserDetail.getUserFullName());
        user.setUserPublicId(UUID.randomUUID().toString());

        for(Role role:user.getRoles()) {
            roleRepo.save(role);
        }

        user.setPassWord(BCrypt.hashpw(user.getPassWord(), BCrypt.gensalt()));
        User savedUser = userRepo.save(user);
        newUserDetail.setUserPublicId(savedUser.getUserPublicId());
        return newUserDetail;


    }

    @Override
    public NewUserDetail saveUser(NewUserDetail newUserDetail, Set<Role> roles) {
        User user = new User();
        user.setUserName(newUserDetail.getEmail());
        user.setPassWord(newUserDetail.getUserPassword());
        user.setCreatedOn(new Date());
        user.setEnabled(true);
        user.setLocked(false);

        user.setRoles(roles);

        user.setPhoneNumber(newUserDetail.getPhoneNumber());
        user.setUserFullName(newUserDetail.getUserFullName());
        user.setUserPublicId(UUID.randomUUID().toString());

        for(Role role:roles) {
            roleRepo.save(role);
        }

        user.setPassWord(BCrypt.hashpw(user.getPassWord(), BCrypt.gensalt()));
        User savedUser = userRepo.save(user);
        newUserDetail.setUserPublicId(savedUser.getUserPublicId());
        return newUserDetail;
    }

    public boolean isUserNameExists(String userName){
        User userInfo=userRepo.findByUserName(userName);
        if(userInfo!=null)
            return true;
        return false;

    }
}
