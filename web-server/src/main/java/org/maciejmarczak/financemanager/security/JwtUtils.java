package org.maciejmarczak.financemanager.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.maciejmarczak.financemanager.user.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
class JwtUtils {

    @Value("${auth.jwt.secret}")
    private String secret;

    @Value("${auth.jwt.duration}")
    private Long duration;

    String createToken(User user) {
        return createToken(user.getEmail());
    }

    String createToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setExpiration(new Date(System.currentTimeMillis() + duration))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    User parseToken(String token) {
        final String email = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();

        if (email != null) {
            return new User(email, token);
        }

        return null;
    }
}