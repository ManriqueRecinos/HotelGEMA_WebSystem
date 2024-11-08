package com.HotelGema.HotelServer.services.auth;

import com.HotelGema.HotelServer.dto.SignupRequest;
import com.HotelGema.HotelServer.dto.UserDto;

public interface AuthService {
    UserDto createUser(SignupRequest signupRequest);
}
