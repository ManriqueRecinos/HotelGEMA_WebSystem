package com.HotelGema.HotelServer.services.admin.rooms;

import com.HotelGema.HotelServer.dto.RoomDto;
import com.HotelGema.HotelServer.dto.RoomsResponseDto;

public interface RoomsService {

    boolean postRoom(RoomDto roomDto);
    RoomsResponseDto getAllRooms(int pageNumber);
    RoomDto getRoomById(Long id);
    boolean updateRoom(Long id, RoomDto roomDto);
    void deleteRoom(Long id);
}
