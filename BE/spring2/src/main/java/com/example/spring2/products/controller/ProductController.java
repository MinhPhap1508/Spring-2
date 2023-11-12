package com.example.spring2.products.controller;

import com.example.spring2.products.dto.IProductDTo;
import com.example.spring2.products.model.Category;
import com.example.spring2.products.model.Product;
import com.example.spring2.products.service.impl.ICategoryService;
import com.example.spring2.products.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/auth/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;
    @Autowired
    private ICategoryService categoryService;

    @GetMapping("/list1")
    public ResponseEntity<Page<IProductDTo>> getAll(@RequestParam(defaultValue = "0") int page,
                                                    @RequestParam(defaultValue = "5") int size,
                                                    @RequestParam(defaultValue = "") String search) {
        Pageable pageable = PageRequest.of(page, size);
        Page<IProductDTo> productPage = productService.getALL(pageable, search);
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }
    @GetMapping("/list")
    public ResponseEntity<List<IProductDTo>> getListByName(@RequestParam(value = "name", defaultValue = "", required = false) String name, @RequestParam(value = "sortName", defaultValue = "id", required = false) String sortName, @RequestParam(value = "sortType", required = false, defaultValue = "desc") String sortType) {
        if (sortType.equals("desc")) {
            List<IProductDTo> getListByName = productService.getProductsByNameSortByPriceDESC("%" + name + "%", sortName);
            if (getListByName.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(getListByName, HttpStatus.OK);
        }
        List<IProductDTo> getListByName = productService.getProductsByNameSortByPriceASC("%" + name + "%", sortName);

        if (getListByName.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getListByName, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> categoryList = categoryService.getAllType();
        return new ResponseEntity<>(categoryList, HttpStatus.OK);

    }

    @GetMapping("/home")
    public ResponseEntity<List<IProductDTo>> getListForHome() {
        List<IProductDTo> productDToList = productService.getALLHome();
        if (productDToList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDToList, HttpStatus.OK);
    }
}
