package com.mariamcbride.projectmanager.projectmanager.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import com.mariamcbride.projectmanager.projectmanager.models.Project;
import com.mariamcbride.projectmanager.projectmanager.models.Task;
import com.mariamcbride.projectmanager.projectmanager.models.User;
import com.mariamcbride.projectmanager.projectmanager.services.ProjectService;
import com.mariamcbride.projectmanager.projectmanager.services.TaskService;
import com.mariamcbride.projectmanager.projectmanager.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

@Controller
public class ProjectController {
    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private TaskService taskService;

    // ------------ Dashboard / Retrieve All ----------- //
    @GetMapping("/dashboard")
    public String dashboard(HttpSession session, Model model) {
        // route guard
        // grab user from database using session id
        Long userId = (Long) session.getAttribute("user_id");
        // check to make sure user is logged in
        if (userId != null) {
            // grab user by id from the database
            User loggedUser = userService.findUser(userId);
            List<Project> projects = projectService.allProjects();
            System.out.println(loggedUser.getProjects());
            model.addAttribute("loggedUser", loggedUser);
            model.addAttribute("projects", projects);
            return "dashboard.jsp";
        } else {
            return "redirect:/";
        }
    }

    // ------------------ Create One ------------------ //
    // create new project form
    @GetMapping("/projects/new")
    public String createProject(
            @ModelAttribute("project") Project project,
            Model model,
            HttpSession session) {
        // route guard
        Long userId = (Long) session.getAttribute("user_id");
        if (userId == null) {
            return "redirect:/";
        } else {
            User leader = userService.findUser(userId);
            model.addAttribute("leader", leader);
            return "new.jsp";
        }
    }

    // submit new project
    @PostMapping("/projects/new")
    public String submitProject(
            @Valid @ModelAttribute("project") Project project,
            BindingResult result,
            Model model,
            HttpSession session) {
        Long userId = (Long) session.getAttribute("user_id");
        if (result.hasErrors()) {
            User leader = userService.findUser(userId);
            model.addAttribute("leader", leader);
            return "new.jsp";
        } else {
            User leader = userService.findUser(userId);
            model.addAttribute("leader", leader);
            project.setLeader(leader);
            projectService.createProject(project);
            return "redirect:/dashboard";
        }
    }

    // ------------------ Retrieve One ----------------- //
    @GetMapping("/projects/{id}")
    public String viewProject(
            @PathVariable("id") Long id,
            Model model,
            HttpSession session) {
        // route guard
        // grab user from session for conditional rendering (on edit button)
        Long userId = (Long) session.getAttribute("user_id");
        if (userId != null) {
            User loggedUser = userService.findUser(userId);
            model.addAttribute("loggedUser", loggedUser);
            Project project = projectService.findProject(id);
            model.addAttribute("project", project);
            return "viewone.jsp";
        } else {
            return "redirect:/";
        }
    }

    // ------------------- Update One ------------------ //
    @GetMapping("/projects/edit/{id}")
    public String editProject(
            @PathVariable("id") Long id,
            Model model,
            HttpSession session) {
        // route guard
        Long userId = (Long) session.getAttribute("user_id");
        if (userId != null) {
            Project project = projectService.findProject(id);
            model.addAttribute("project", project);
            model.addAttribute("users", userService.allUsers());
            return "edit.jsp";
        } else {
            return "redirect:/";
        }
    }

    // submit update
    @PutMapping("/projects/edit/{id}")
    public String updateProject(
            @Valid @ModelAttribute("project") Project project,
            BindingResult result,
            Model model) {
        if (result.hasErrors()) {
            // keeps title from disappearing when you submit an empty input field
            // Project project1 = projectService.findProject(project.getId());
            // project.setTitle(project1.getTitle());
            List<User> users = userService.allUsers();
            model.addAttribute("users", users);
            return "edit.jsp";
        } else {
            projectService.updateProject(project);
            return "redirect:/projects/{id}";
        }
    }

    // -------------------- Join Team ------------------ //
    @PutMapping("/projects/join/{id}")
    public String joinProject(
            @PathVariable("id") Long id,
            HttpSession session) {
        // grab current logged in user from DB using id session
        Long userId = (Long) session.getAttribute("user_id");
        User member = userService.findUser(userId);
        // find the project to add to and add new member
        Project project = projectService.findProject(id);
        project.getMembers().add(member);
        // save
        projectService.updateProject(project);
        return "redirect:/dashboard";
    }

    // ------------------- Leave Team ------------------ //
    @PutMapping("/projects/leave/{id}")
    public String leaveProject(
            @PathVariable("id") Long id,
            HttpSession session) {
        Long userId = (Long) session.getAttribute("user_id");
        User member = userService.findUser(userId);
        Project project = projectService.findProject(id);
        project.getMembers().remove(member);
        projectService.updateProject(project);
        return "redirect:/dashboard";
    }

    // ------------------- View Tasks ------------------ //
    @GetMapping("/projects/{id}/tasks")
    public String createTask(
            @PathVariable("id") Long id, // grab the project id
            @ModelAttribute("task") Task task,
            Model model,
            HttpSession session) {
        Long userId = (Long) session.getAttribute("user_id");
        User member = userService.findUser(userId);
        if (session.getAttribute("user_id") != null) {
            Project project = projectService.findProject(id);
            model.addAttribute("member", member);
            model.addAttribute("project", project);
            return "tasks.jsp";
        } else {
            return "redirect:/";
        }
    }

    // submit new task
    @PostMapping("/projects/{projectId}/tasks")
    public String submitTask(
            @Valid @ModelAttribute("task") Task task,
            BindingResult result,
            @PathVariable("projectId") Long projectId,
            Model model,
            HttpSession session) {
        Long userId = (Long) session.getAttribute("user_id");
        User member = userService.findUser(userId);
        Project project = projectService.findProject(projectId);
        if (result.hasErrors()) {
            model.addAttribute("member", member);
            System.out.println(userId);
            model.addAttribute("project", project);
            return "tasks.jsp";
        } else {
            taskService.createTask(task);
            return "redirect:/projects/{projectId}/tasks";
        }
    }

    // ------------------- Delete One ------------------ //
    @DeleteMapping("/projects/delete/{id}")
    public String deleteProject(@PathVariable("id") Long id) {
        projectService.deleteProject(id);
        return "redirect:/dashboard";
    }

}
