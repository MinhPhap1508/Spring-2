package com.example.spring2.order.service;

import com.example.spring2.app_user.model.AppUser;
import com.example.spring2.app_user.repository.IAppUserRepository;
import com.example.spring2.cart.model.CartDto;
import com.example.spring2.cart.repository.ICartRepository;
import com.example.spring2.order.model.OrderDetailDto;
import com.example.spring2.order.repository.IOrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrdersRepository ordersRepository;
    @Autowired
    private IAppUserRepository appUserRepository;
    @Autowired
    private ICartRepository cartRepository;

    @Override
    public void createOrders(OrderDetailDto orderDetailDto, String username, Long deliveryId) {
        LocalDate localDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String formatterDate = localDate.format(formatter);
        AppUser appUser = appUserRepository.getAccountByUserName(username);
        ordersRepository.createOrder(formatterDate, appUser.getId(), deliveryId);
        Long idOrder = ordersRepository.getIdMaxForOrder();
        for (CartDto c : orderDetailDto.getCartDtoList()) {
            cartRepository.deleteCart(c.getId(), appUser.getId());
            ordersRepository.createOrderDetail(c.getPrice(), c.getQuantity(), idOrder, c.getId());
        }
    }
}
