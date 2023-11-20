package com.example.spring2.order.model;

import com.example.spring2.cart.model.ICartDto;

import java.util.List;

public class OrdersDto {
    List<ICartDto> cartDtoList;

    public OrdersDto() {
    }

    public OrdersDto(List<ICartDto> cartDtoList) {
        this.cartDtoList = cartDtoList;
    }

    public List<ICartDto> getCartDtoList() {
        return cartDtoList;
    }

    public void setCartDtoList(List<ICartDto> cartDtoList) {
        this.cartDtoList = cartDtoList;
    }
}
