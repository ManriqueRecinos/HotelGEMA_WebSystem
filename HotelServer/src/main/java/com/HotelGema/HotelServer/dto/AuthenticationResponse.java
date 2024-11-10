package com.HotelGema.HotelServer.dto;

import com.HotelGema.HotelServer.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {

    private String jwt;
    private String userId;
    private UserRole userRole;

}
