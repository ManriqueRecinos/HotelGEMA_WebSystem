package com.HotelGema.HotelServer.services.customer.booking;

import com.HotelGema.HotelServer.dto.ReservationDto;
import com.HotelGema.HotelServer.dto.ReservationResponseDto;

public interface BookingService {
    boolean postReservation(ReservationDto reservationDto);
    ReservationResponseDto getAllReservationByUserId(Long userId, int pageNumber);
}
