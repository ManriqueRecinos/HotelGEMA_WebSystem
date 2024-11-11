package com.HotelGema.HotelServer.entity;

import com.HotelGema.HotelServer.dto.RoomDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Generated;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Entity
@Data
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    private Long price;

    private boolean available;

    public void setAvailable(boolean b) {
    }

    public void setName(Object name) {
    }
    public RoomDto getRoomDto() {
     RoomDto roomDto = new RoomDto();
     roomDto.setId(id);
     roomDto.setName(name);
     roomDto.setType(type);
     roomDto.setAvailable(available);
     roomDto.setPrice(price);

     return roomDto;
    }
    @GetMapping("/rooms/{pageNumber}")
    public ResponseEntity<?> getAllRooms(@PathVariable int pageNumber){
        return ResponseEntity.ok(roomsService.getAllRooms(pageNumber));
    }
}
