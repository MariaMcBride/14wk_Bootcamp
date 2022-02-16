<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
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
            <h3 class="heading">Language Details</h3>
            <a href="/languages">Dashboard</a>
          </div>
          <div class="card mx-auto p-5">
            <div class="row">
              <div class="col">
                <strong>Name:</strong>
              </div>
              <div class="col">
                <c:out value="${language.name}" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <strong>Creator:</strong>
              </div>
              <div class="col">
                <c:out value="${language.creator}" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <strong>Version:</strong>
              </div>
              <div class="col">
                <c:out value="${language.version}" />
              </div>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center mt-3">
            <a href="/languages/edit/${language.id}" class="link-warning me-3">Edit</a> | <form
              action="/languages/${language.id}" method="post">
              <input type="hidden" name="_method" value="delete">
              <input type="submit" value="Delete" class="link-danger border-0 bg-transparent ms-2">
            </form>
          </div>
        </div>
      </body>

      </html>