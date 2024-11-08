package com.HotelGema.HotelServer.repository;

import com.HotelGema.HotelServer.entity.User;
import com.HotelGema.HotelServer.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findFirstByEmail(String email);

    Optional<User> findByUserRole(UserRole userRole);
}
