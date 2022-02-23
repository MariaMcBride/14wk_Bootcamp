package com.mariamcbride.projectmanager.projectmanager.services;

import java.util.List;

import com.mariamcbride.projectmanager.projectmanager.models.Task;
import com.mariamcbride.projectmanager.projectmanager.repositories.TaskRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    // ------------------ Retrieve All ----------------- //
    public List<Task> allTasks() {
        return taskRepository.findAll();
    }

    // ------------------- Create One ------------------ //
    public Task createTask(Task t) {
        return taskRepository.save(t);
    }
}
