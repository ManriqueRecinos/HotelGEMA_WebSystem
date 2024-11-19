package com.HotelGema.HotelServer.services.admin.category;

import com.HotelGema.HotelServer.dto.CategoryDto;
import com.HotelGema.HotelServer.entity.Category;
import com.HotelGema.HotelServer.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    public Category createcategory(CategoryDto categoryDto) {
        Category category = new Category();
        category.setName(categoryDto.getName());
        category.setDescription(categoryDto.getDescription());

        return categoryRepository.save(category);
    }
}
