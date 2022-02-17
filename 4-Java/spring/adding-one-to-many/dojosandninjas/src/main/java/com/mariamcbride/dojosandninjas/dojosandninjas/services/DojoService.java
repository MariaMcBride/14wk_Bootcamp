package com.mariamcbride.dojosandninjas.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import com.mariamcbride.dojosandninjas.dojosandninjas.models.Dojo;
import com.mariamcbride.dojosandninjas.dojosandninjas.repositories.DojoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DojoService {
    @Autowired
    private DojoRepository dojoRepository;

    // ------------------ Retrieve All ----------------- //
    public List<Dojo> allDojos() {
        return dojoRepository.findAll();
    }

    // ------------------- Create One ------------------ //
    public Dojo createDojo(Dojo d) {
        return dojoRepository.save(d);
    }

    // ------------------ Retrieve One ----------------- //
    public Dojo findDojo(Long id) {
        Optional<Dojo> optionalDojo = dojoRepository.findById(id);
        if (optionalDojo.isPresent()) {
            return optionalDojo.get();
        } else
            return null;
    }

    // ------------------- Update One ------------------ //
    public Dojo updateDojo(Dojo dojo) {
        Optional<Dojo> optionalDojo = dojoRepository.findById(dojo.getId());
        if (optionalDojo.isPresent()) {
            return dojoRepository.save(dojo);
        } else
            return null;
    }

    // ------------------- Delete One ------------------ //
    public void deleteDojo(Long id) {
        dojoRepository.deleteById(id);
    }

}
