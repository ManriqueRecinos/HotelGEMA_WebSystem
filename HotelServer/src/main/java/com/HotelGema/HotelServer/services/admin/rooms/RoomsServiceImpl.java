package com.HotelGema.HotelServer.services.admin.rooms;

import com.HotelGema.HotelServer.dto.RoomDto;
import com.HotelGema.HotelServer.entity.Room;
import com.HotelGema.HotelServer.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RoomsServiceImpl implements RoomsService{
    private final RoomRepository roomRepository;

    public boolean postRoom(RoomDto roomDto) {
        try{
            Room room = new Room();

            room.setName(roomDto.getName());
            room.setPrice(roomDto.getPrice());
            room.setType(roomDto.getType());
            room.setAvailable(roomDto.isAvailable());

            roomRepository.save(room);
            return true;
        }catch(Exception e){
            return false;
        }
    }
}
