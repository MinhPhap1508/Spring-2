package com.example.spring2.products.repository;

import com.example.spring2.products.dto.IProductDTo;
import com.example.spring2.products.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "SELECT " +
            " p.id AS id, " +
            " p.name_product AS nameProduct, " +
            " p.price AS priceProduct, " +
            " p.image AS image, " +
            " ct.name_category AS nameCategory " +
            " FROM " +
            " house_salt.product p " +
            " JOIN " +
            " house_salt.category ct ON p.category_id = ct.id " +
            " WHERE p.flag_delete = true and name_product like: %search% ", nativeQuery = true)
    Page<IProductDTo> findAllProduct(Pageable pageable, @Param("search") String search);

    @Query(value = "SELECT " +
            " p.id AS id, " +
            " p.name_product AS nameProduct, " +
            " p.price AS priceProduct, " +
            " p.image AS image " +
            " FROM " +
            " house_salt.product p " +
            " WHERE p.flag_delete = true ", nativeQuery = true)
    List<IProductDTo> getAllHome();


    @Query(value = " SELECT " +
            " p.id as id," +
            " p.name_product as nameProduct," +
            " p.price as priceProduct," +
            " p.image as image," +
            " ct.name_category as nameCategory " +
            " FROM product p ", nativeQuery = true)
    List<IProductDTo> getProductsByNameSortByPriceDESC(String name, String sortName);
}
