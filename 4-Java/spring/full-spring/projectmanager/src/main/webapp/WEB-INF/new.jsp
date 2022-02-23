<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
      <%@ page isErrorPage="true" %>
        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8">
          <title>Create a Project</title>
          <!-- for Bootstrap CSS -->
          <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
          <!-- YOUR own local CSS -->
          <link rel="stylesheet" type="text/css" href="/css/style.css">
          <!-- For any Bootstrap that uses JS or jQuery-->
          <script src="/webjars/jquery/jquery.min.js"></script>
          <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
          <!-- YOUR own local JS -->
          <script type="text/javascript" src="/js/app.js"></script>
        </head>

        <body>
          <div class="container mx-auto p-5">
            <div class="card form-card mx-auto p-4 rounded-0">
              <h2 class="mb-3">Create a Project</h2>
              <form:form action="/projects/new" method="POST" modelAttribute="project">
                <div class="mb-3">
                  <form:label path="title" for="formInput" class="form-label">Project Title:</form:label>
                  <form:errors path="title" class="alert-danger" />
                  <form:input type="text" class="form-control" id="formInput" path="title" />
                </div>
                <div class="mb-3">
                  <form:label path="description" for="formControlTextarea" class="form-label">Project Description:
                  </form:label>
                  <form:errors path="description" class="alert-danger" />
                  <form:textarea type="text" class="form-control" id="formControlTextarea" path="description" row="4" />
                </div>
                <div class="mb-3">
                  <form:label path="dueDate" for="formInput" class="form-label">Due Date:
                  </form:label>
                  <form:errors path="dueDate" class="alert-danger" />
                  <form:input type="date" class="form-control" id="formInput" path="dueDate" />
                </div>
                <div class="flex">
                  <span class="flex gap-3 buttons">
                    <a href="/dashboard" class="btn btn-secondary">
                      Cancel
                    </a>
                    <input type="submit" value="Submit" class="btn btn-success">
                  </span>
                </div>
              </form:form>
            </div>
          </div>
        </body>

        </html>