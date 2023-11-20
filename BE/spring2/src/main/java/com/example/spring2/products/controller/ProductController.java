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
import org.springframework.data.domain.Sort;
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
        if(categoryList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
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

    @GetMapping("/bestsellers")
    public ResponseEntity<List<IProductDTo>> getBestSeller() {
        List<IProductDTo> bestSellersList = productService.getBestSeller();
        if (bestSellersList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bestSellersList, HttpStatus.OK);
    }
    @GetMapping("/thesame")
    public ResponseEntity<?> getProductByCategory(@RequestParam Long id) {
        List<IProductDTo> bestSellersList = productService.getProduct(id);
        return new ResponseEntity<>(bestSellersList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> detail(@PathVariable("id") Long id) {
        return new ResponseEntity<>(productService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/page")
    public ResponseEntity<Page<IProductDTo>> getListSearch(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                           @RequestParam(name = "searchType", defaultValue = "", required = false) String searchType
                                                           ) {
//        Sort sort = null;
//        if (sortBy.equals("id")) {
//            sort = Sort.by("id").descending();
//        } else if (sortBy.equals("ASC")) {
//            sort = Sort.by("priceProduct").ascending();
//        } else if (sortBy.equals("DESC")) {
//            sort = Sort.by("priceProduct").descending();
//        }
        Pageable pageable = PageRequest.of(page, 6);
        Page<IProductDTo> productDToPage = productService.findAllProduct(pageable, "%" + searchType + "%");
        if (productDToPage.getContent().isEmpty()) {
            return new ResponseEntity<>(productDToPage, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDToPage, HttpStatus.OK);
    }
}
