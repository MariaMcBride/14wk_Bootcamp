<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="UTF-8">
      <title>Book Details</title>
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
              <c:out value="${book.title}" />
            </h2>
            <a href="/books">Back to the shelves</a>
          </span>
          <em>
            <p class="mb-0">
              <c:choose>
                <c:when test="${book.user.id == loggedUser.id}">
                  <span class="text-danger">You</span> read
                </c:when>
                <c:otherwise>
                  <span class="text-danger">
                    <c:out value="${book.user.name}" />
                  </span> read
                </c:otherwise>
              </c:choose>
              <span class="text-title">
                <c:out value="${book.title}" />
              </span>
              by
              <span class="text-author me-0">
                <c:out value="${book.author}" />
              </span>
            </p>
          </em>
          <p class="mb-4">Here are
            <c:choose>
              <c:when test="${book.user.id == loggedUser.id}">
                your thoughts:
              </c:when>
              <c:otherwise>
                <c:out value="${book.user.name}" />'s thoughts:
              </c:otherwise>
            </c:choose>
          </p>
          <div class="border-top border-bottom mx-5 p-4 mb-4">
            <p class="mb-0">
              <em>
                <c:out value="${book.thoughts}" />
              </em>
            </p>
          </div>
          <div class="d-flex justify-content-end mx-5">
            <c:if test="${book.user.id == loggedUser.id}">
              <a href="/books/${book.id}/edit" class="btn btn-warning">Edit</a>
            </c:if>
          </div>
        </div>
      </div>
    </body>

    </html>