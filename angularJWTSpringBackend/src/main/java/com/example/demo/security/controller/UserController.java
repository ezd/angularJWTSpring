package com.example.demo.security.controller;

import com.example.demo.security.model.NewUserDetail;
import com.example.demo.security.service.UserRegistrationService;
import com.example.demo.security.utils.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRegistrationService userRegistrationService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping(value = "/createUser")
    ResponseEntity<NewUserDetail> createUser(@RequestBody NewUserDetail userDetail) throws Exception{
        System.out.println("it is coming to save the user");
        NewUserDetail savedUserDetail=null;
        if(!userRegistrationService.isUserNameExists(userDetail.getEmail())) {

            savedUserDetail = userRegistrationService.saveUser(userDetail);
            final String token = jwtTokenUtil.generateToken(savedUserDetail.getEmail());
            HttpHeaders responseHeaders=new HttpHeaders();
            responseHeaders.add("Authorization","Bearer "+token);
            return ResponseEntity.created(new URI("/users/createUser")).headers(responseHeaders).body(savedUserDetail);
        }else{
            return new ResponseEntity(userDetail, HttpStatus.CONFLICT);
//                throw new SQLException("User by email id:"+userDetail.getEmail()+" already exisits");
            //throw new CustomeException("Email already in use");
        }


    }
}
