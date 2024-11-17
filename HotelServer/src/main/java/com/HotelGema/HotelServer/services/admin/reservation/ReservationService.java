package com.HotelGema.HotelServer.services.admin.reservation;

import com.HotelGema.HotelServer.dto.ReservationResponseDto;

public interface ReservationService {

    ReservationResponseDto getAllReservations(int pageNumber);
}
