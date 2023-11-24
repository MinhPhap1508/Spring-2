package com.example.spring2.customer.repository;

import com.example.spring2.customer.model.Customer;
import com.example.spring2.customer.model.ICustomerDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ICustomerRepository extends JpaRepository<Customer, Long> {

    @Query(value = "select c.id as id, c.full_name as fullName, c.dob, c.gender, c.email, c.phone, c.address, c.id_card as idCard from customer c " +
            "join app_user au on c.user_id = au.id " +
            "where au.id = :id ", nativeQuery = true)
    ICustomerDto getCustomerByIdAccount(Long id);
    @Transactional
    @Modifying
    @Query(value = " insert into customer(address, email, full_name, id_card, phone, user_id, dob, gender)\n" +
            " values (:address, :email, :fullName, :idCard, :phone, :userId, :dob, :gender ) ", nativeQuery = true)
    void createCustomer(String address, String email, String fullName, String idCard, String phone, Long userId, String dob, String gender);
    @Transactional
    @Modifying
    @Query(value = " update customer c set c.address = :address, c.email = :email, c.full_name = :fullName, c.id_card = :idCard, c.phone = :phone, c.dob = :dob, c.gender = :gender where c.id = :id", nativeQuery = true)
    void updateCustomer(String address, String email, String fullName, String idCard, String phone, String dob, String gender, Long id);
}
