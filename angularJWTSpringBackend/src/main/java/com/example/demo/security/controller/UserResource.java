package com.example.demo.security.controller;

import org.springframework.web.bind.annotation.*;


@RestController()
//@RequestMapping("/user")
@CrossOrigin(origins = "*",maxAge = 3600)
public class UserResource {

}
