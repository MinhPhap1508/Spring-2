package com.example.spring2.customer.service;

import com.example.spring2.customer.model.CustomerDto;
import com.example.spring2.customer.model.ICustomerDto;

public interface ICustomerService {
    ICustomerDto getInfoCustomer(String username);
    void createCustomer(CustomerDto customerDto, String username);

    void updateCustomer(CustomerDto customerDto);
}
