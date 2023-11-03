package com.example.spring2.products.service;

import com.example.spring2.products.model.Product;
import com.example.spring2.products.repository.IProductRepository;
import com.example.spring2.products.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<Product> getALL(Pageable pageable) {
        return productRepository.findAll(pageable);
    }
}
