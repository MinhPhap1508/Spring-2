package com.example.spring2.order.model;

import com.example.spring2.cart.model.CartDto;

import java.util.List;

public class OrderDetailDto {
    List<CartDto> cartDtoList;

    public OrderDetailDto() {
    }

    public OrderDetailDto(List<CartDto> cartDtoList) {
        this.cartDtoList = cartDtoList;
    }

    public List<CartDto> getCartDtoList() {
        return cartDtoList;
    }

    public void setCartDtoList(List<CartDto> cartDtoList) {
        this.cartDtoList = cartDtoList;
    }
}
