package com.example.spring2.customer.service;

import com.example.spring2.app_user.model.AppUser;
import com.example.spring2.app_user.repository.IAppUserRepository;
import com.example.spring2.customer.model.CustomerDto;
import com.example.spring2.customer.model.ICustomerDto;
import com.example.spring2.customer.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository customerRepository;
    @Autowired
    private IAppUserRepository appUserRepository;

    @Override
    public ICustomerDto getInfoCustomer(String username) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        return customerRepository.getCustomerByIdAccount(appUser.getId());
    }

    @Override
    public void createCustomer(CustomerDto customerDto, String username) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        customerRepository.createCustomer(customerDto.getAddress(), customerDto.getEmail(), customerDto.getFullName(), customerDto.getIdCard(), customerDto.getPhone(), appUser.getId(), customerDto.getDob(), customerDto.getGender());
    }

    @Override
    public void updateCustomer(CustomerDto customerDto) {
        customerRepository.updateCustomer(customerDto.getAddress(), customerDto.getEmail(), customerDto.getFullName(), customerDto.getIdCard(), customerDto.getPhone(), customerDto.getDob(), customerDto.getGender(), customerDto.getId());
    }
}
