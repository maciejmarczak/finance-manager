package org.maciejmarczak.financemanager.security;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import org.maciejmarczak.financemanager.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public User register(@Valid @RequestBody User user) {
        return authService.register(user);
    }

    @GetMapping("/check-email-taken/{email:.+}")
    public JsonNode checkEmailTaken(@PathVariable("email") String email) {
        return JsonNodeFactory.instance
                .objectNode()
                .put("taken", authService.isEmailTaken(email));
    }
}
