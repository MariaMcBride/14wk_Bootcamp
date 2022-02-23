package com.mariamcbride.projectmanager.projectmanager.repositories;

import java.util.List;

import com.mariamcbride.projectmanager.projectmanager.models.Task;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {
    List<Task> findAll();
}
