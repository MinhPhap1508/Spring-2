package com.example.spring2.customer.repository;

import com.example.spring2.customer.model.Customer;
import com.example.spring2.customer.model.ICustomerDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ICustomerRepository extends JpaRepository<Customer, Long> {

    @Query(value = "select c.id as id, c.full_name as fullName, c.dob, c.gender, c.email, c.phone, c.address, c.id_card as idCard from customer c " +
            "join app_user au on c.user_id = au.id " +
            "where au.id = :id ", nativeQuery = true)
    ICustomerDto getCustomerByIdAccount(Long id);
}
