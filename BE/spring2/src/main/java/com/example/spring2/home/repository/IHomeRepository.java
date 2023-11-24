package com.example.spring2.home.repository;

import com.example.spring2.home.Model.IHomeDto;
import com.example.spring2.products.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IHomeRepository extends JpaRepository<Product, Long> {
    @Query(value = "select p.id , " +
            " p.name_product as nameProduct, " +
            " p.price as priceProduct, p.image, " +
            " ct.name_category as nameCategory " +
            " FROM product p " +
            " join category ct on p.category_id = ct.id " +
            " where p.flag_delete = 1 and name_product like CONCAT ('%', :nameSearch ,'%') " +
            " and name_category like CONCAT ('%', :searchType ,'%') " +
            " ORDER BY p.id DESC ", nativeQuery = true)
    Page<IHomeDto> searchHeader(String nameSearch, String searchType, Pageable pageable);
}
