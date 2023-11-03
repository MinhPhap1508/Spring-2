package com.example.spring2.products.service.impl;

import com.example.spring2.products.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> getALL(Pageable pageable);
}
