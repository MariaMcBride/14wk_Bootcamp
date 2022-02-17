package com.mariamcbride.dojosandninjas.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import com.mariamcbride.dojosandninjas.dojosandninjas.models.Ninja;
import com.mariamcbride.dojosandninjas.dojosandninjas.repositories.NinjaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NinjaService {
    @Autowired
    private NinjaRepository ninjaRepository;

    // ------------------ Retrieve All ----------------- //
    public List<Ninja> allNinjas() {
        return ninjaRepository.findAll();
    }

    // ------------------- Create One ------------------ //
    public Ninja createNinja(Ninja n) {
        return ninjaRepository.save(n);
    }

    // ------------------ Retrieve One ----------------- //
    public Ninja findNinja(Long id) {
        Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
        if (optionalNinja.isPresent()) {
            return optionalNinja.get();
        } else
            return null;
    }

    // ------------------- Update One ------------------ //
    public Ninja updateNinja(Ninja ninja) {
        Optional<Ninja> optionalNinja = ninjaRepository.findById(ninja.getId());
        if (optionalNinja.isPresent()) {
            return ninjaRepository.save(ninja);
        } else
            return null;
    }

    // ------------------- Delete One ------------------ //
    public void deleteNinja(Long id) {
        ninjaRepository.deleteById(id);
    }
}
