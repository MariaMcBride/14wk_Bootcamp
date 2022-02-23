<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
      <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8">
          <title>Props Page</title>
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
                  Project:
                  <c:out value="${project.title}" />
                </h2>
                <a href="/dashboard">Back to Dashboard</a>
              </span>
              <p>
                <strong>Project Lead:</strong>
                <c:out value="${project.leader.firstName}" />
              </p>
              <div class="mb-4">
                <form:form action="/projects/${project.id}/tasks" method="POST" modelAttribute="task">
                  <form:label path="activity" for="formControlTextarea" class="form-label">Add a task ticket for this
                    team:
                  </form:label>
                  <form:errors path="activity" class="alert-danger" />
                  <form:textarea type="text" class="form-control" id="formControlTextarea" path="activity" row="4" />
                  <form:input type="hidden" path="member" value="${member.id}" />
                  <form:input type="hidden" path="project" value="${project.id}" />
                  <div class="d-flex justify-content-end">
                    <input type="submit" value="Submit" class="btn btn-primary mt-3 me-1">
                  </div>
                </form:form>
              </div>
              <div class="mt-3">
                <c:forEach var="task" items="${project.tasks}">
                  <ul class="ps-0">
                    <li>
                      <strong>Added by
                        <c:out value="${task.member.firstName}" /> at
                        <fmt:formatDate type="both" pattern="kk:mm a MMM dd" value="${task.createdAt}" />:
                      </strong><br>
                      <c:out value="${task.activity}" />
                    </li>
                  </ul>
                </c:forEach>
              </div>
            </div>
          </div>
        </body>

        </html>