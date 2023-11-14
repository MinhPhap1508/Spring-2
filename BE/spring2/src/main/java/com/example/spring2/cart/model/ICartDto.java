package com.example.spring2.cart.model;

public interface ICartDto {
    Long getId();
    String getName();

    String getImage();

    Integer getQuantity();

    Integer getPrice();
}
