package com.mariamcbride.projectmanager.projectmanager.services;

import java.util.List;
import java.util.Optional;

import com.mariamcbride.projectmanager.projectmanager.models.Project;
import com.mariamcbride.projectmanager.projectmanager.repositories.ProjectRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    // ------------------ Retrieve All ----------------- //
    public List<Project> allProjects() {
        return projectRepository.findAll();
    }

    // ------------------- Create One ------------------ //
    public Project createProject(Project p) {
        return projectRepository.save(p);
    }

    // ------------------ Retrieve One ----------------- //
    public Project findProject(Long id) {
        Optional<Project> optionalProject = projectRepository.findById(id);
        if (optionalProject.isPresent()) {
            return optionalProject.get();
        } else
            return null;
    }

    // ------------------- Update One ------------------ //
    public Project updateProject(Project project) {
        return projectRepository.save(project);
    }

    // ------------------- Delete One ------------------ //
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

}
