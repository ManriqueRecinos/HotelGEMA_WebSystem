package com.HotelGema.HotelServer.services.customer.rooms;


import com.HotelGema.HotelServer.dto.RoomsResponseDto;

public interface RoomService {
    RoomsResponseDto getAvailableRooms(int pageNumber);
}
