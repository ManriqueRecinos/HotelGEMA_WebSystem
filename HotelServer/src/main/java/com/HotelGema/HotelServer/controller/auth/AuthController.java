package com.HotelGema.HotelServer.controller.auth;

import com.HotelGema.HotelServer.dto.SignupRequest;
import com.HotelGema.HotelServer.dto.UserDto;
import com.HotelGema.HotelServer.services.auth.AuthService;
import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<?> signupUser(@RequestBody SignupRequest signupRequest) {
        try{
            UserDto createdUser = authService.createUser(signupRequest);
            return new ResponseEntity<>(createdUser, HttpStatus.OK);
        }catch(EntityExistsException entityExistsException){
            return new ResponseEntity<>("Usuario ya existente", HttpStatus.NOT_ACCEPTABLE);
        }catch (Exception e){
            return new ResponseEntity<>("Usuario no creado, intentalo mas tarde", HttpStatus.BAD_REQUEST);
        }
    }
}
