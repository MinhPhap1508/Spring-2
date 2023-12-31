package com.example.spring2.order.repository;

import com.example.spring2.order.model.IOrderDto;
import com.example.spring2.order.model.Orders;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface IOrdersRepository extends JpaRepository<Orders, Long> {
    @Transactional
    @Modifying
    @Query(value = "insert into orders(order_date, flag, app_user_id ) " +
            " values( :orderDate, 0, :appId)", nativeQuery = true)
    void createOrder(String orderDate, Long appId);
    @Transactional
    @Modifying
    @Query(value = "insert into order_detail(price_order, quantity_order, is_flag, order_id, product_id) " +
            " values(:priceOrder, :quantityOrder, true, :orderId, :productId) ", nativeQuery = true)
    void createOrderDetail(Integer priceOrder, Integer quantityOrder, Long orderId, Long productId);
    @Query(value = " select  max(id) from orders ", nativeQuery = true)
    Long getIdMaxForOrder();
    @Query(value = "select o.order_date as orderDate, sum(price_order) as total \n" +
            "from orders o\n" +
            "join order_detail od on o.id = od.order_id\n" +
            "where o.app_user_id = :id " +
            "group by o.order_date, o.id " +
            " order by o.order_date desc", nativeQuery = true)
    Page<IOrderDto> getListOrder(Long id, Pageable pageable);
}
