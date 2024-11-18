package com.HotelGema.HotelServer.services.admin.reservation;

import com.HotelGema.HotelServer.dto.ReservationResponseDto;
import com.HotelGema.HotelServer.entity.Reservation;
import com.HotelGema.HotelServer.entity.Room;
import com.HotelGema.HotelServer.enums.ReservationStatus;
import com.HotelGema.HotelServer.repository.ReservationRepository;
import com.HotelGema.HotelServer.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;

    private final RoomRepository roomRepository;

    public static final int SEARCH_RESULT_PER_PAGE = 10;

    public ReservationResponseDto getAllReservations(int pageNumber){
        Pageable pageable = PageRequest.of(pageNumber, SEARCH_RESULT_PER_PAGE);

        Page<Reservation> reservationPage = reservationRepository.findAll(pageable);

        ReservationResponseDto reservationResponseDto = new ReservationResponseDto();

        reservationResponseDto.setReservationDtoList(reservationPage.stream().map(Reservation::getReservationDto)
                .collect(Collectors.toList()));

        reservationResponseDto.setPageNumber(reservationPage.getPageable().getPageNumber());
        reservationResponseDto.setTotalPages(reservationPage.getTotalPages());

        return reservationResponseDto;
    }

    public boolean changeReservationStatus(Long id, String status) {
        Optional<Reservation> optionalReservation = reservationRepository.findById(id);
        if(optionalReservation.isPresent()) {
            Reservation existingReservation = optionalReservation.get();


            if(Objects.equals(status,"Approve")) {
                existingReservation.setReservationStatus(ReservationStatus.APPROVED);
            }else{
                existingReservation.setReservationStatus(ReservationStatus.REJECTED);
            }

            reservationRepository.save(existingReservation);

            Room existingRoom = existingReservation.getRoom();
            existingRoom.setAvailable(false);

            roomRepository.save(existingRoom);

            return true;
        }
        return false;
    }
}