package com.example.spring2.order.controller;

import com.example.spring2.order.model.OrderDetailDto;
import com.example.spring2.order.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class OrderController {
    @Autowired
    private IOrderService orderService;
@PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody OrderDetailDto orderDetailDto,
                                         @RequestParam String username,
                                         @RequestParam Long deliveryId) {
        orderService.createOrders(orderDetailDto, username, deliveryId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
