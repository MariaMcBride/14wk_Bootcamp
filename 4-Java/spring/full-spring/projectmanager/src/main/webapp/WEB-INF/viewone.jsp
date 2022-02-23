<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="UTF-8">
      <title>Project Details</title>
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
        <div class="card mx-auto p-5 rounded-0">
          <span class="flex mb-4">
            <h2 class="heading">
              Project Details
            </h2>
            <a href="/dashboard">Back to Dashboard</a>
          </span>
          <div class="mb-4">
            <p>
              <strong>Project:</strong>
              <c:out value="${project.title}" />
            </p>
            <p>
              <strong>Description:</strong>
              <c:out value="${project.description}" />
            </p>
            <p>
              <strong>Due Date:</strong>
              <c:out value="${project.dueDate}" />
            </p>
            <p><a href="/projects/${project.id}/tasks">See tasks!</a></p>
          </div>
          <div class="d-flex justify-content-end gap-3">
            <c:if test="${project.leader.id == user_id}">
              <a href="/projects/edit/${project.id}" class="btn btn-warning">Edit</a>
              <form action="/projects/delete/${project.id}" method="post">
                <input type="hidden" name="_method" value="delete">
                <input type="submit" value="Delete" class="btn btn-danger">
              </form>
            </c:if>
          </div>
        </div>
      </div>
    </body>

    </html>