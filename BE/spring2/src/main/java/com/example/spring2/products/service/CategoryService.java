package com.example.spring2.products.service;

import com.example.spring2.products.model.Category;
import com.example.spring2.products.repository.ICategoryRepository;
import com.example.spring2.products.service.impl.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private ICategoryRepository categoryRepository;
    @Override
    public List<Category> getAllType() {
        return categoryRepository.getAllType();
    }
}
