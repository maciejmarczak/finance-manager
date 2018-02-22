package org.maciejmarczak.financemanager.security;

import org.maciejmarczak.financemanager.user.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private static final String HEADER = "Authorization";
    private static final String TOKEN_PREFIX = "Bearer ";

    private final JwtUtils jwtUtils;

    JwtAuthorizationFilter(AuthenticationManager authenticationManager, JwtUtils jwtUtils) {
        super(authenticationManager);
        this.jwtUtils = jwtUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain chain) throws IOException, ServletException {

        final String header = request.getHeader(HEADER);

        if (header == null || !header.startsWith(TOKEN_PREFIX)) {
            chain.doFilter(request, response);
            return;
        }

        SecurityContextHolder.getContext().setAuthentication(getAuthentication(header));
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String header) {
        final String token = header.substring(TOKEN_PREFIX.length());
        final User user = jwtUtils.parseToken(token);

        if (user != null) {
            return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
        }

        return null;
    }
}
