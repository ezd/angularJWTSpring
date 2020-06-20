package com.example.demo.security.model;

import com.example.demo.security.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewUserDetail{

    private String userPublicId;

    @NotNull(message = "Full name can not be empty")
    @Size(min = 2,message = "Full name should be at least 2 characters")
    private String userFullName;
    @NotNull(message = "Phone can not be empty")
    @Size(min = 10,message = "Phone number should be at least 10 digit")
    private String phoneNumber;
    @Size(min = 6,max = 20,message = "Password should be at least 6 and max 20 characters")
    @NotNull(message = "Password name can not be empty")
    private String userPassword;
    @NotNull(message = "Email name can not be empty")
    @Email(message = "Email should be in proper format")
    private String email;

}
