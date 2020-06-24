package com.example.demo.security.controller;

import com.example.demo.security.entity.User;
import com.example.demo.security.exception.UNAuthorizedException;
import com.example.demo.security.model.AuthenticationRequest;
import com.example.demo.security.model.CustomUserDetails;
import com.example.demo.security.model.TokenPayLoad;
import com.example.demo.security.repo.UserRepo;
import com.example.demo.security.service.UserRegistrationService;
import com.example.demo.security.utils.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class AuthenticationController {

    @Autowired
    UserRepo userRepo;

    @Autowired
    UserRegistrationService userRegistrationService;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @PostMapping("/authenticate")
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
}
