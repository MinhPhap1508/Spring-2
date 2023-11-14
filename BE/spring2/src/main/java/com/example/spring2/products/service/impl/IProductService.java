package com.example.spring2.products.service.impl;

import com.example.spring2.products.dto.IProductDTo;
import com.example.spring2.products.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<IProductDTo> getALL(Pageable pageable, String search);

    List<IProductDTo> getALLHome();

    List<IProductDTo> getProductsByNameSortByPriceDESC(String name, String sortName);

    List<IProductDTo> getProductsByNameSortByPriceASC(String name, String sortName);

    List<IProductDTo> getBestSeller();

    IProductDTo getById(Long id);
    Page<IProductDTo> findAllProduct(Pageable pageable, String searchType);
}
