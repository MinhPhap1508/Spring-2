package com.example.spring2.order.controller;

import com.example.spring2.order.model.IOrderDto;
import com.example.spring2.order.model.OrderDetailDto;
import com.example.spring2.order.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
                                         @RequestParam String username) {
        orderService.createOrders(orderDetailDto, username);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/history")
    public ResponseEntity<?> getListOrder(@RequestParam String username,
                                          @RequestParam(defaultValue = "0") Integer page,
                                          @RequestParam(defaultValue = "5") Integer size){
        Pageable pageable = PageRequest.of(page,size);
        Page<IOrderDto> listOrder = orderService.getListOrder(username, pageable);
        return new ResponseEntity<>(listOrder, HttpStatus.OK);
    }
}
