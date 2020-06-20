package com.example.demo.security.entity;

import com.example.demo.security.enums.RoleEnum;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue
    Integer id;
    String name;

    public Role(RoleEnum roleEnum) {
        super();
        this.name = roleEnum.getRoleName();
    }

    @ManyToMany(mappedBy="roles",fetch=FetchType.EAGER)
    private Set<User> users=new HashSet<>();

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }



}
