package com.example.spring2.app_user.repository;

import com.example.spring2.app_user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;

public interface IAppUserRepository extends JpaRepository<AppUser, Integer> {
    @Query(value = "select * from app_user a where a.user_name like :userName ",nativeQuery = true)
    AppUser getAccountByUserName(@Param("userName") String userName);
    @Transactional
    @Modifying
    @Query(value = " call insert_acc (:userName,:password,:app_role_id) ", nativeQuery = true)
    void createAccount(@Param("userName")String userName, @Param("password")String password,@Param("app_role_id") Long app_role_id);
}
