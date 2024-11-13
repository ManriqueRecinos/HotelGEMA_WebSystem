package com.HotelGema.HotelServer.services.customer.booking;

import com.HotelGema.HotelServer.dto.ReservationDto;

public interface BookingService {
    boolean postReservation(ReservationDto reservationDto);
}
