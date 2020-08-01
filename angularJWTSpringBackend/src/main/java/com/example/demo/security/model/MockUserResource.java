package com.example.demo.security.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MockUserResource {

    private String resourceName;
    private String resourceValue;
}
