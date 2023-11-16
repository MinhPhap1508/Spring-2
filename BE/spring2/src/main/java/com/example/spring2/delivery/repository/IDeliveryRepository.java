package com.example.spring2.delivery.repository;

import com.example.spring2.delivery.model.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IDeliveryRepository extends JpaRepository<Delivery, Long> {
    @Query(value = " select d.id, d.name_delivery, d.price_delivery " +
            " from house_salt.delivery d ", nativeQuery = true)
    List<Delivery> getAllDelivery();
}
