package com.example.spring2.products.repository;

import com.example.spring2.products.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ICategoryRepository extends JpaRepository<Category, Long> {
    @Query(value = " SELECT c.id , c.name_category " +
            " FROM house_salt.category c ", nativeQuery = true)
    List<Category> getAllType();
}
