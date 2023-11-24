package com.example.spring2.home.service;

import com.example.spring2.home.Model.IHomeDto;
import com.example.spring2.home.repository.IHomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HomeService implements IHomeService{
    @Autowired
    private IHomeRepository homeRepository;

    @Override
    public Page<IHomeDto> searchHeader(String nameSearch, String searchType, Pageable pageable) {
        return homeRepository.searchHeader(nameSearch, searchType, pageable);
    }
}
