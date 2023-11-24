package com.example.spring2.customer.controller;

import com.example.spring2.customer.model.CustomerDto;
import com.example.spring2.customer.model.ICustomerDto;
import com.example.spring2.customer.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;
    @GetMapping("")
    public ResponseEntity<?> getCustomer(@RequestParam String username){
        ICustomerDto customerDto = customerService.getInfoCustomer(username);
        return new ResponseEntity<>(customerDto, HttpStatus.OK);
    }
    @PostMapping("/add-customer")
    public ResponseEntity<?> createCustomer(@RequestBody CustomerDto customerDto,
                                            @RequestParam String username){
        if(customerDto.getId() == null){
            customerService.createCustomer(customerDto, username);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } else {
            customerService.updateCustomer(customerDto);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }
}
