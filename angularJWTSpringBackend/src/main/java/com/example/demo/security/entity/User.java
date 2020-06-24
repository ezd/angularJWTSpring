package com.example.demo.security.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue
    Integer id;
    String userName;
    String passWord;
    boolean isLocked;
    boolean isEnabled;
    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(name="role_user",joinColumns=@JoinColumn(name="user_id"),inverseJoinColumns=@JoinColumn(name="role_id"))
    private Set<Role> roles=new HashSet<>();
    Date createdOn;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String userPublicId;
}
