<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
      <%@ page isErrorPage="true" %>
        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8">
          <title>New Dojo</title>
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
          <div class="container-md p-5">
            <div class="card mx-auto p-4 rounded-0">
              <span class="d-flex align-items-center justify-content-start gap-5">
                <a href="/dojos">Dashboard</a>
                <a href="/ninjas">Register a New Ninja</a>
              </span>
              <h1 class="mb-4">New Dojo</h1>
              <form:form action="/dojos" method="POST" modelAttribute="dojo">
                <div class="mb-3">
                  <form:label path="location" for="formInput" class="form-label">Location:</form:label>
                  <form:errors path="location" class="text-danger" />
                  <form:input type="text" class="form-control" id="formInput" path="location" />
                </div>
                <input type="submit" value="Create" class="btn btn-primary mb-5">
              </form:form>

              <table class="table">
                <thead class="header-row">
                  <tr class="header-row">
                    <th scope="col">Location</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <c:forEach var="dojo" items="${dojos}">
                    <tr>
                      <td>
                        <c:out value="${dojo.location}" />
                      </td>
                      <td>
                        <a href="/dojos/${dojo.id}">
                          See Students
                        </a>
                      </td>
                    </tr>
                  </c:forEach>
                </tbody>
              </table>
            </div>
          </div>
        </body>

        </html>