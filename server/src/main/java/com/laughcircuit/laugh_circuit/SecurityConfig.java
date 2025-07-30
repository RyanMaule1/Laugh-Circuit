// File: SecurityConfig.java
package com.laughcircuit.laugh_circuit;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable() // disable CSRF for simplicity
            .authorizeHttpRequests((authz) -> authz
                .anyRequest().permitAll()
            )
            .formLogin().disable(); // disable form-based login
        return http.build();
    }
}
