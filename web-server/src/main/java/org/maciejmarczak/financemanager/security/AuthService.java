package org.maciejmarczak.financemanager.security;

import org.maciejmarczak.financemanager.user.User;
import org.maciejmarczak.financemanager.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AuthService {

    private final UserService userService;
    private final JwtUtils jwtUtils;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(UserService userService, PasswordEncoder passwordEncoder,
                JwtUtils jwtUtils) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }

    public User register(User user) {
        if (isEmailTaken(user.getEmail())) {
            throw new EmailAlreadyTakenException();
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userService.save(user);

        user.setToken(jwtUtils.createToken(user));

        return user;
    }

    public boolean isEmailTaken(String email) {
        return userService.findByEmail(email) != null;
    }
}
