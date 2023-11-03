package com.example.spring2.products.controller;

import com.example.spring2.products.model.Product;
import com.example.spring2.products.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;
    @GetMapping("/list")
    public ResponseEntity<Page<Product>> getAll(@RequestParam (defaultValue = "0") int  page,
                                                @RequestParam (defaultValue = "5") int size){
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> productPage = productService.getALL(pageable);
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }
}
