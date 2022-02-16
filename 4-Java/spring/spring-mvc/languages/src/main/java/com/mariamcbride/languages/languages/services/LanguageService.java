package com.mariamcbride.languages.languages.services;

import java.util.List;
import java.util.Optional;

import com.mariamcbride.languages.languages.models.Language;
import com.mariamcbride.languages.languages.repositories.LanguageRepository;

import org.springframework.stereotype.Service;

@Service
public class LanguageService {
    private final LanguageRepository languageRepository;

    // ------------------ Constructor ------------------ //
    public LanguageService(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    // ------------------ Retrieve All ----------------- //
    public List<Language> allLanguages() {
        return languageRepository.findAll();
    }

    // ------------------- Create One ------------------ //
    public Language createLanguage(Language b) {
        return languageRepository.save(b);
    }

    // ------------------ Retrieve One ----------------- //
    public Language findLanguage(Long id) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if (optionalLanguage.isPresent()) {
            return optionalLanguage.get();
        } else {
            return null;
        }
    }

    // ------------------- Update One ------------------ //
    public Language updateLanguage(Language language, Long id) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if (optionalLanguage.isPresent()) {
            // Language language1 = optionalLanguage.get();
            // language1.setName(language.getName());
            // language1.setCreator(language.getCreator());
            // language1.setVersion(language.getVersion());
            return languageRepository.save(language);
        } else {
            return null;
        }
    }

    // ------------------- Delete One ----------------- //
    public String delete(Long id) {
        Optional<Language> optionalLanguage = languageRepository.findById(id);
        if (optionalLanguage.isPresent()) {
            languageRepository.deleteById(id);
            return "Language deleted";
        } else {
            return "Nothing to delete";
        }
    }

}