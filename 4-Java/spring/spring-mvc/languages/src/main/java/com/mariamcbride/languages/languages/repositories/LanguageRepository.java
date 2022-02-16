package com.mariamcbride.languages.languages.repositories;

import java.util.List;

import com.mariamcbride.languages.languages.models.Language;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends CrudRepository<Language, Long> {
    List<Language> findAll();

    List<Language> findByNameContaining(String search);

    Long countByNameContaining(String search);

    Long deleteByNameStartingWith(String search);
}
