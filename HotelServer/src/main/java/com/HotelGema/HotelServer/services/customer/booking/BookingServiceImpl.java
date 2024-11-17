package com.HotelGema.HotelServer.services.customer.booking;

import com.HotelGema.HotelServer.dto.ReservationDto;
import com.HotelGema.HotelServer.entity.Reservation;
import com.HotelGema.HotelServer.entity.Room;
import com.HotelGema.HotelServer.entity.User;
import com.HotelGema.HotelServer.enums.ReservationStatus;
import com.HotelGema.HotelServer.repository.ReservationRepository;
import com.HotelGema.HotelServer.repository.RoomRepository;
import com.HotelGema.HotelServer.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {

    private final UserRepository userRepository;

    private final RoomRepository roomRepository;

    private final ReservationRepository reservationRepository;

    public boolean postReservation(ReservationDto reservationDto) {
        Optional<User> optionalUser = userRepository.findById(reservationDto.getUserId());
        Optional<Room> optionalRoom = roomRepository.findById(reservationDto.getRoomId());

        if(optionalRoom.isPresent() && optionalUser.isPresent()) {
            Reservation reservation = new Reservation();

            reservation.setRoom(optionalRoom.get());
            reservation.setUser(optionalUser.get());
            reservation.setCheckInDate(reservationDto.getCheckInDate());
            reservation.setCheckOutDate(reservationDto.getCheckOutDate());
            reservation.setReservationStatus(ReservationStatus.PENDING);

            Long days = ChronoUnit.DAYS.between(reservationDto.getCheckInDate(), reservationDto.getCheckOutDate());
            reservation.setPrice(optionalRoom.get().getPrice()* days);

            reservationRepository.save(reservation);
            return true;
        }
        return false;
    }
}
