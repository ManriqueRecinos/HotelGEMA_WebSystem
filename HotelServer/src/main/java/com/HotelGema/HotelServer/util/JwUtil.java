package com.HotelGema.HotelServer.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;


import java.security.Key;
import java.util.Date;
import java.util.Map;

@Component
public class JwUtil {

    private String generateToken(Map<String, Object> extraClaims, UserDetails details) {
        return Jwts.builder().setClaims(extraClaims).setSubject(details.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000*60*60*24))
                .signWith(SignatureAlgorithm.HS256,getSigningKey()).compact();
    }

    private Key getSigningKey() {

        byte[] keyBytes = Decoders.BASE64.decode("413F4428472B4B625065536858566D59703373367639792442264529484D6351");
        return Keys.hmacShaKeyFor(keyBytes);
    }

}
