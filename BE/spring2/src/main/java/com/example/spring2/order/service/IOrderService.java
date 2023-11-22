package com.example.spring2.order.service;

import com.example.spring2.order.model.IOrderDto;
import com.example.spring2.order.model.OrderDetailDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IOrderService {
    void createOrders(OrderDetailDto orderDetailDto, String username);
    Page<IOrderDto> getListOrder(String username, Pageable pageable);
}
