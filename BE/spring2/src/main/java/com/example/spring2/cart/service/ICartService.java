package com.example.spring2.cart.service;

import com.example.spring2.cart.model.Cart;
import com.example.spring2.cart.model.ICartDto;
import com.example.spring2.delivery.model.Delivery;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ICartService {
    List<ICartDto> getCartDetail(String username);
    void addCart(Integer quantity, String username, Long productId);

    void deleteCart(Long id, String username);

    Long getCartById(String username, Long productId);


    void increaseQuantity(String username, Long id);

    void decreaseQuantity(String username, Long id);

    List<Delivery> getAllDelivery();
}
