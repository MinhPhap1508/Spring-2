package com.example.spring2.order.service;

import com.example.spring2.order.model.OrderDetailDto;

public interface IOrderService {
    void createOrders(OrderDetailDto orderDetailDto, String username);
}
