package com.example.spring2.cart.controller;

import com.example.spring2.cart.model.Cart;
import com.example.spring2.cart.model.ICartDto;
import com.example.spring2.cart.service.ICartService;
import com.example.spring2.delivery.model.Delivery;
import com.example.spring2.products.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private ICartService cartService;

    @GetMapping("/cart-detail")
    public ResponseEntity<?> getCartByUserName(@RequestParam String username) {
        List<ICartDto> cartDtoList = cartService.getCartDetail(username);
        return new ResponseEntity<>(cartDtoList, HttpStatus.OK);
    }
    @PostMapping("/add-cart")
    public ResponseEntity<?> addCart(@RequestParam Integer quantity,
                                     @RequestParam String username,
                                     @RequestParam Long productId){
        Long cart = cartService.getCartById(username, productId);
        if(cart != null) {
            cartService.increaseQuantity(username, productId);
            return new ResponseEntity<>(HttpStatus.OK);
        }
         cartService.addCart(quantity, username, productId);
         return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @DeleteMapping("/delete-cart")
    public ResponseEntity<?> delete (@RequestParam("id") Long id, String username){
        cartService.deleteCart(id, username);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/increase-quantity")
    public ResponseEntity<?> increaseQuantity(@RequestParam String username,
                                              @RequestParam Long id) {
        cartService.increaseQuantity(username, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/decrease-quantity")
    public ResponseEntity<?> decreaseQuantity(@RequestParam String username,
                                              @RequestParam Long id) {
        cartService.decreaseQuantity(username, id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/delivery")
    public ResponseEntity<List<Delivery>> getAllCategory() {
        List<Delivery> deliveryList = cartService.getAllDelivery();
        if(deliveryList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(deliveryList, HttpStatus.OK);
    }
}
