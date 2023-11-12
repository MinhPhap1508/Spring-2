package com.example.spring2.products.repository;

import com.example.spring2.products.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
    @Query(value = " SELECT ct.id, ct.name_category " +
            " FROM house_salt.category AS ct ", nativeQuery = true)
    List<Category> getAllType();
}
