package com.example.spring2.cart.service;

import com.example.spring2.app_user.model.AppUser;
import com.example.spring2.app_user.repository.IAppUserRepository;
import com.example.spring2.cart.model.Cart;
import com.example.spring2.cart.model.ICartDto;
import com.example.spring2.cart.repository.ICartRepository;
import com.example.spring2.delivery.model.Delivery;
import com.example.spring2.delivery.repository.IDeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService{
    @Autowired
    private ICartRepository cartRepository;
    @Autowired
    IAppUserRepository appUserRepository;
    @Autowired
    private IDeliveryRepository deliveryRepository;
    @Override
    public List<ICartDto> getCartDetail(String username) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        return cartRepository.getCartDetail(appUser.getId());
    }

    @Override
    public void addCart(Integer quantity, String username, Long productId) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        cartRepository.AddCart(quantity,appUser.getId(),productId);
    }

    @Override
    public void deleteCart(Long id, String username) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        cartRepository.deleteCart(id, appUser.getId());
    }

    @Override
    public Long getCartById(String username, Long productId) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        return cartRepository.getCartByIds(appUser.getId(),productId);
    }

    @Override
    public void increaseQuantity(String username, Long id, Integer quantity) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        cartRepository.increaseQuantity(appUser.getId(), id, quantity);
    }

    @Override
    public void decreaseQuantity(String username, Long id) {
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        cartRepository.decreaseQuantity(appUser.getId(), id);
    }

    @Override
    public List<Delivery> getAllDelivery() {
        return deliveryRepository.getAllDelivery();
    }


}
