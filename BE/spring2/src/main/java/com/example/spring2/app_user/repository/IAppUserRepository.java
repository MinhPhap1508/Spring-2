package com.example.spring2.app_user.repository;

import com.example.spring2.app_user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IAppUserRepository extends JpaRepository<AppUser, Integer> {
    Optional<AppUser> findByUserName(String userName);
}
