package com.example.spring2.cart.repository;

import com.example.spring2.cart.model.Cart;
import com.example.spring2.cart.model.ICartDto;
import com.example.spring2.delivery.model.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ICartRepository extends JpaRepository<Cart, Long> {
    @Query(value = "select p.name_product as name, " +
            " p.id, " +
            " p.image, " +
            " p.price, " +
            " c.quantity_cart as quantity " +
            "from cart c " +
            "join app_user au on c.app_user_id = au.id " +
            "join product p on c.product_id = p.id " +
            "where au.id = :id ", nativeQuery = true)
    List<ICartDto> getCartDetail(Long id);

    @Transactional
    @Modifying
    @Query(value = "insert into cart(quantity_cart, app_user_id, product_id)\n" +
            "values(:quantity, :appId, :productId)", nativeQuery = true)
    void AddCart(Integer quantity, Long appId, Long productId);

    @Transactional
    @Modifying
    @Query(value = " DELETE " +
            " FROM cart c " +
            " WHERE c.product_id = :id AND c.app_user_id = :appId ", nativeQuery = true)
    void deleteCart(Long id, Long appId);

    @Query(value = " SELECT c.id " +
            " FROM cart c " +
            " WHERE c.product_id = :id AND c.app_user_id = :appId ", nativeQuery = true)
    Long getCartByIds(Long appId, Long id);
    @Transactional
    @Modifying
    @Query(value = "UPDATE cart c " +
            "SET c.quantity_cart = c.quantity_cart + :quantity " +
            "WHERE c.product_id = :id AND c.app_user_id = :appId", nativeQuery = true)
    void increaseQuantity(@Param("appId") Long appId, @Param("id") Long id, @Param("quantity") Integer quantity);
    @Transactional
    @Modifying
    @Query(value = "UPDATE cart c " +
            "SET c.quantity_cart = c.quantity_cart - 1 " +
            "WHERE c.product_id = :id AND c.app_user_id = :appId " +
            "AND c.quantity_cart >= 1", nativeQuery = true)
    void decreaseQuantity(Long appId, Long id);

}
