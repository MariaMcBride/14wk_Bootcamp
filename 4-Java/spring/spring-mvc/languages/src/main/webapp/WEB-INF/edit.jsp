<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
      <%@ page isErrorPage="true" %>
        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8">
          <title>
            <c:out value="${language.name}" />
          </title>
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
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h2 class="heading">Edit
                <c:out value="${language.name}" />
              </h2>
              <span class="d-flex align-items-center justify-content-evenly">
                <form action="/languages/${language.id}" method="post">
                  <input type="hidden" name="_method" value="delete">
                  <input type="submit" value="Delete" class="link-danger border-0 bg-transparent me-3">
                </form>
                <a href="/languages">Dashboard</a>
              </span>
            </div>
            <div class="card mx-auto p-5">
              <form:form action="/languages/${language.id}" method="POST" modelAttribute="language">
                <input type="hidden" name="_method" value="put">
                <div class="mb-3">
                  <form:label path="name" for="formInput" class="form-label">Name:
                  </form:label>
                  <form:input type="text" class="form-control" id="formInput" path="name" />
                  <form:errors path="name" class="text-danger" />
                </div>
                <div class="mb-3">
                  <form:label path="creator" for="formInput" class="form-label">Creator:
                  </form:label>
                  <form:input type="text" class="form-control" id="formInput" path="creator" placeholder="" />
                  <form:errors path="creator" class="text-danger" />
                </div>
                <div class="mb-3">
                  <form:label path="version" for="formInput" class="form-label">Version:
                  </form:label>
                  <form:input type="text" class="form-control" id="formInput" path="version" placeholder="" />
                  <form:errors path="version" class="text-danger" />
                </div>
                <div class="d-flex justify-content-end">
                  <input type="submit" value="Update" class="btn btn-success text-white fw-bold">
                </div>
              </form:form>
            </div>
          </div>
        </body>

        </html>