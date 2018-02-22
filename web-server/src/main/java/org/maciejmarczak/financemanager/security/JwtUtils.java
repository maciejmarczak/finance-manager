package org.maciejmarczak.financemanager.security;

import io.jsonwebtoken.Claims;
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
    private Integer duration;

    String createToken(User user) {
        return Jwts.builder()
                .claim(CustomClaims.USER_EMAIL, user.getEmail())
                .claim(CustomClaims.USER_ID, user.getId())
                .setExpiration(new Date(System.currentTimeMillis() + duration))
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    User parseToken(String token) {
        final Claims claims = Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token)
                .getBody();

        if (claims != null) {
            String email = claims.get(CustomClaims.USER_EMAIL, String.class);
            int id = claims.get(CustomClaims.USER_ID, Integer.class);

            User user = new User(email, token);
            user.setId(id);

            return user;
        }

        return null;
    }

    private static class CustomClaims {
        private static final String USER_EMAIL = "userEmail";
        private static final String USER_ID = "userId";
    }
}