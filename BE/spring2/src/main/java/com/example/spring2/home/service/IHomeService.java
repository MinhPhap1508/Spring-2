package com.example.spring2.home.service;

import com.example.spring2.home.Model.IHomeDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IHomeService {
    Page<IHomeDto> searchHeader(String nameSearch, String searchType, Pageable pageable);
}
