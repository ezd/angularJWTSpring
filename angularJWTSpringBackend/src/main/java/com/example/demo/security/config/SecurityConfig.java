package com.example.demo.security.config;

import com.example.demo.security.filter.JWTFilter;
import com.example.demo.security.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private static final String[] RESOURCES = {
            "/css/**","/js/**","/","/webjars/**","/login","/publicinfo","/contactus","/forgetPassword" //unused
            ,"/aboutus","/public/createUser","/h2-console/**","/public/authenticate"//used
    };

    @Autowired
    JWTFilter jwtFilter;

    @Autowired
    CustomUserDetailsService customUserDetailService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailService).passwordEncoder(mypasswordEncoder());
    }


    @Bean
    public BCryptPasswordEncoder mypasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(RESOURCES).permitAll()
                .antMatchers("/user/**").hasAnyAuthority("ADMIN", "USER")
                .antMatchers("/admin/**").hasAuthority("ADMIN")
//                .antMatchers("/user/**").hasAnyRole("ADMIN", "USER")
//                .antMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
//                .and() //removed because we are not using login page
//                .formLogin().permitAll()
//                .and()
//                .logout().permitAll()
                .and()
                .exceptionHandling()
        .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);//this is added to use token based security

        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Bean(name = BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }


}
