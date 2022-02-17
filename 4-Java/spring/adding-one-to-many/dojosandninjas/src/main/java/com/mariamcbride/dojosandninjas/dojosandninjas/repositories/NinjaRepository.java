package com.mariamcbride.dojosandninjas.dojosandninjas.repositories;

import java.util.List;

import com.mariamcbride.dojosandninjas.dojosandninjas.models.Ninja;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {
    List<Ninja> findAll();
}