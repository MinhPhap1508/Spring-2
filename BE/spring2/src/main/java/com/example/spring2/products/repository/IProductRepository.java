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
            " p.id as id, " +
            " p.name_product as nameProduct, " +
            " p.price as priceProduct, " +
            " p.image as image, " +
            " ct.name_category as nameCategory " +
            " FROM " +
            " house_salt.product p " +
            " JOIN " +
            " house_salt.category ct ON p.category_id = ct.id " +
            " WHERE " +
            " p.name_product LIKE :searchName and p.flag_delete = true " +
            " GROUP BY p.id " +
            " ORDER BY CASE WHEN :sortName = 'id' THEN p.id and DESC, CASE WHEN :sortName = 'price' THEN p.price_product END DESC", nativeQuery = true)
    List<IProductDTo> getProductsByNameSortByPriceDESC(@Param("searchName") String name,@Param("sortName") String sortName);

    @Query(value = " SELECT " +
            " p.id as id, " +
            " p.name_product as nameProduct, " +
            " p.price as priceProduct, " +
            " p.image as image, " +
            " ct.name_category as nameCategory " +
            " FROM " +
            " house_salt.product p " +
            " JOIN " +
            " house_salt.category ct ON p.category_id = ct.id " +
            " WHERE " +
            " p.name_product LIKE :searchName and p.flag_delete = true " +
            " GROUP BY p.id " +
            " ORDER BY CASE WHEN :sortName = 'id' THEN p.id and DESC, CASE WHEN :sortName = 'price' THEN p.price_product END DESC", nativeQuery = true)
    List<IProductDTo> getProductsByNameSortByPriceASC(@Param("searchName") String name,@Param("sortName") String sortName);

    @Query(value = "SELECT " +
            " p.id AS id, " +
            " p.name_product AS nameProduct, " +
            " p.price AS priceProduct, " +
            " p.image AS image, " +
            " SUM(od.quantity_order) as bestSeller  " +
            " FROM " +
            " house_salt.product p" +
            " JOIN order_detail od ON p.id = od.product_id " +
            " WHERE p.flag_delete = true" +
            " GROUP BY p.id, p.name_product, p.price, p.image" +
            " ORDER BY  SUM(od.quantity_order) DESC" +
            " LIMIT 10 ", nativeQuery = true)
    List<IProductDTo> getBestSeller();
    @Query(value = "SELECT p.id as id, p.name_product as nameProduct, p.price as priceProduct, p.image " +
            "FROM house_salt.product p " +
            " WHERE flag_delete = true and p.id = :id", nativeQuery = true)
    IProductDTo findProductById(@Param("id") Long id);
    @Query(value = "select p.id ," +
            " p.name_product as nameProduct, " +
            " p.price as priceProduct, p.image," +
            " ct.name_category as nameCategory " +
            "FROM product p " +
            "join category ct on p.category_id = ct.id " +
            "where p.flag_delete = 1 and name_category like :searchType", nativeQuery = true)
    Page<IProductDTo> findAllProductBy(Pageable pageable, String searchType);
    @Query(value = "SELECT p.id AS id, ct.id,\n" +
            "p.name_product AS nameProduct,\n" +
            "p.price AS priceProduct,\n" +
            "p.image AS image\n" +
            "FROM product p\n" +
            "JOIN category ct ON p.category_id = ct.id\n" +
            "WHERE p.flag_delete = true\n" +
            "AND ct.id = (SELECT category_id FROM product WHERE id = :id) ", nativeQuery = true)
    List<IProductDTo> findAllProductByCategory(@Param("id") Long id);
    @Query(value = "SELECT " +
            " p.id AS id, " +
            " p.name_product AS nameProduct, " +
            " p.price AS priceProduct, " +
            " p.image AS image " +
            "from product p " +
            "where category_id = :id ", nativeQuery = true)
    List<IProductDTo> getProductByCategory(Long id);
}
