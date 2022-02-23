package com.mariamcbride.projectmanager.projectmanager.repositories;

import java.util.List;

import com.mariamcbride.projectmanager.projectmanager.models.Project;

import org.springframework.data.repository.CrudRepository;

public interface ProjectRepository extends CrudRepository<Project, Long> {
    List<Project> findAll();

}
