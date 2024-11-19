package com.HotelGema.HotelServer.services.admin.category;

import com.HotelGema.HotelServer.dto.CategoryDto;
import com.HotelGema.HotelServer.entity.Category;

public interface CategoryService {
    Category createcategory(CategoryDto categoryDto);
}
