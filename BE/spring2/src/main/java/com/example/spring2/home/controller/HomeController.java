package com.example.spring2.home.controller;

import com.example.spring2.home.Model.IHomeDto;
import com.example.spring2.home.service.IHomeService;
import com.example.spring2.products.dto.IProductDTo;
import com.example.spring2.products.service.impl.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/home")
@CrossOrigin("*")
public class HomeController {
    @Autowired
    private IHomeService homeService;
    @Autowired
    private IProductService productService;

    @GetMapping("/search")
    public ResponseEntity<?> searchForHeader(@RequestParam(name = "page", defaultValue = "0", required = false) Integer page,
                                             @RequestParam(name = "size", defaultValue = "6", required = false) Integer size,
                                             @RequestParam(name = "nameSearch", defaultValue = "", required = false) String nameSearch,
                                             @RequestParam(name = "searchType", defaultValue = "", required = false) String searchType,
                                             @RequestParam(name = "sort", defaultValue = "asc", required = false) String sort,
                                             @RequestParam(name = "sortBy", defaultValue = "priceProduct", required = false) String sortBy) {
        Sort sort1 = Sort.by(Sort.Direction.fromString(sort), sortBy);
        Pageable pageable = PageRequest.of(page, size, sort1);
        Page<IHomeDto> homeDtoPage = homeService.searchHeader(nameSearch, searchType, pageable);
        if (homeDtoPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(homeDtoPage, HttpStatus.OK);
    }
    @GetMapping("/listSearch")
    public ResponseEntity<Page<IProductDTo>> getListSearch(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                           @RequestParam(name = "searchName", defaultValue = "", required = false) String searchName
    ) {
        Pageable pageable = PageRequest.of(page, 6);
        Page<IProductDTo> productDToPage = productService.findAllProductByName(pageable, "%" + searchName + "%");
        if (productDToPage.getContent().isEmpty()) {
            return new ResponseEntity<>(productDToPage, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productDToPage, HttpStatus.OK);
    }
}
