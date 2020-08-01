package com.example.demo.security.controller;

import com.example.demo.security.entity.User;
import com.example.demo.security.exception.UNAuthorizedException;
import com.example.demo.security.model.*;
import com.example.demo.security.repo.UserRepo;
import com.example.demo.security.service.UserRegistrationService;
import com.example.demo.security.utils.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
//@RequestMapping("/public")
@CrossOrigin(origins = "*",maxAge = 3600)
public class AuthenticationController {

    @Autowired
    UserRepo userRepo;

    @Autowired
    UserRegistrationService userRegistrationService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @PostMapping("/public/authenticate")
    public TokenPayLoad authenticate(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getUserName(),
                            authenticationRequest.getPassword()));
        } catch (Exception e) {
            throw new UNAuthorizedException("Username or/and password is not correct.");
        }
        User userByUserName = userRepo.findByUserName(authenticationRequest.getUserName());
        CustomUserDetails customUserDetails = new CustomUserDetails(userByUserName);
        String generatedToken = jwtTokenUtil.generateToken(customUserDetails);
        return new TokenPayLoad(generatedToken,userByUserName.getUserPublicId());

    }

    @PostMapping(value = "/public/createUser")
    ResponseEntity<NewUserDetail> createUser(@RequestBody NewUserDetail userDetail) throws Exception{
        System.out.println("it is coming to save the user");
        NewUserDetail savedUserDetail=null;
        if(!userRegistrationService.isUserNameExists(userDetail.getEmail())) {

            savedUserDetail = userRegistrationService.saveUser(userDetail);
            return ResponseEntity.created(new URI("/users/createUser"))
                    .body(savedUserDetail);
        }else{
            return new ResponseEntity(userDetail, HttpStatus.CONFLICT);
        }


    }


    @GetMapping("/user/resource")
    public MockUserResource resource(){
        return new MockUserResource("somename","someValue");
    }

    @GetMapping("/user/dosomething")
    public String usertesting(){
        return "user Testing works";
    }
}
