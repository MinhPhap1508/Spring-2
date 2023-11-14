package com.example.spring2.products.service;

import com.example.spring2.products.dto.IProductDTo;
import com.example.spring2.products.model.Product;
import com.example.spring2.products.repository.IProductRepository;
import com.example.spring2.products.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<IProductDTo> getALL(Pageable pageable, String search) {
        return productRepository.findAllProduct(pageable, search);
    }

    @Override
    public List<IProductDTo> getALLHome() {
        return productRepository.getAllHome();
    }

    @Override
    public List<IProductDTo> getProductsByNameSortByPriceDESC(String name, String sortName) {
        return productRepository.getProductsByNameSortByPriceDESC(name, sortName);
    }

    @Override
    public List<IProductDTo> getProductsByNameSortByPriceASC(String name, String sortName) {
        return productRepository.getProductsByNameSortByPriceASC(name, sortName);
    }

    @Override
    public List<IProductDTo> getBestSeller() {
        return productRepository.getBestSeller();
    }

    @Override
    public IProductDTo getById(Long id) {
        return productRepository.findProductById(id);
    }

    @Override
    public Page<IProductDTo> findAllProduct(Pageable pageable, String searchType) {
        return productRepository.findAllProductBy(pageable, searchType);
    }
}
