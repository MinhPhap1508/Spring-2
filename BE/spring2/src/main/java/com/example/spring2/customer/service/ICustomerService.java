package com.example.spring2.customer.service;

import com.example.spring2.customer.model.ICustomerDto;

public interface ICustomerService {
    ICustomerDto getInfoCustomer(String username);
}
