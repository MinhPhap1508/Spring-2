package com.example.spring2.products.dto;

import com.example.spring2.products.model.Category;
import com.example.spring2.products.model.Product;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class ProductDto implements Validator {
    private Long id;
    private String nameProduct;
    private Double price;
    private String image;
    private Category category;

    public ProductDto() {
    }

    public ProductDto(Long id, String nameProduct, Double price, String image, Category category) {
        this.id = id;
        this.nameProduct = nameProduct;
        this.price = price;
        this.image = image;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameProduct() {
        return nameProduct;
    }

    public void setNameProduct(String nameProduct) {
        this.nameProduct = nameProduct;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        ProductDto productDto = (ProductDto) target;
        if(productDto.getNameProduct() == null) {
            errors.rejectValue("nameProduct", "","Không được để trống!");
        } else if (productDto.getNameProduct().trim().equals("")) {
            errors.rejectValue("nameProduct", "","Vui lòng nhập đúng thông tin");
        } else if (productDto.getNameProduct().length() <3) {
            errors.rejectValue("nameProduct", "", "Tên sản  phẩm phải lớn hơn 3 ký tự");
        }   else if (productDto.getNameProduct().length() > 50) {
            errors.rejectValue("nameProduct", "", "Tên sản  phẩm phải bé hơn 50 ký tự");
        } else if (productDto.getNameProduct().matches("^[a-zA-ZÀ-Úà-úĂăĐđĨĩƠơƯưẠ-ỹ0-9 .,+]*$")) {
            errors.rejectValue("nameProduct", "", "Tên không được chứa các kí tự đặt biệt");
        }
        if(productDto.getPrice() == null) {
            errors.rejectValue("priceProduct", "", "Không được để trống giá tiền");
        } else if (productDto.getPrice() < 0) {
            errors.rejectValue("priceProduct", "", "Giá tiền không nên nhỏ hơn 0");
        } else if (productDto.getPrice() > 100000) {
            errors.rejectValue("priceProduct", "", "Giá tiền không nên lớn hơn 100000");
        }
        if(productDto.getImage() == null) {
            errors.rejectValue("image","","Vui lòng không bỏ trống trường này");
        }
        if(productDto.getCategory() == null) {
            errors.rejectValue("category","","Vui lòng chọn loại sản phẩm");
        }
    }
}
