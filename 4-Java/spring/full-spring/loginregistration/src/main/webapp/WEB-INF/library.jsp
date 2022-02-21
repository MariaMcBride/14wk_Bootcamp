<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!-- c:out ; c:forEach etc. -->
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <!-- Formatting (dates) -->
    <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
      <!DOCTYPE html>
      <html>

      <head>
        <meta charset="UTF-8">
        <title>Book Lender Collection</title>
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
        <!-- Enter body here -->
        <div class="container p-5">
          <div class="card mx-auto p-4 rounded-0">
            <div class="flex mb-0">
              <div>
                <p class="mb-1">
                  Hello,
                  <c:out value="${loggedUser.name}" />! Welcome to...
                </p>
                <h1 class="mb-3">The Book Broker</h1>
                <p>Available Books to Borrow:</p>
              </div>
              <div class="text-end">
                <form action="/logout" method="POST">
                  <button class="border-0 bg-transparent text-primary mb-3">Logout</button>
                </form>
                <a href="/books">Back to your dashboard</a>
              </div>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Owner</th>
                  <th scope="col" class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <c:forEach var="book" items="${books}">
                  <tr>
                    <c:if test="${book.borrower == null}">
                      <td>
                        <c:out value="${book.id}" />
                      </td>
                      <td>
                        <a href="/books/${book.id}">
                          <c:out value="${book.title}" />
                        </a>
                      </td>
                      <td>
                        <c:out value="${book.author}" />
                      </td>
                      <td>
                        <c:out value="${book.user.name}" />
                      </td>
                      <td class="text-center">
                        <c:choose>
                          <c:when test="${book.user.id == loggedUser.id}">
                            <span class="flex">
                              <a href="/books/${book.id}/edit" class="link-warning">Edit</a> |
                              <form action="/books/${book.id}/delete" method="post">
                                <input type="hidden" name="_method" value="delete">
                                <input type="submit" value="Delete" class="link-danger border-0 bg-transparent px-0">
                              </form>
                            </span>
                          </c:when>
                          <c:otherwise>
                            <form action="/books/${book.id}/borrow" method="POST">
                              <input type="hidden" name="_method" value="put">
                              <input type="hidden" name="id" value="${book.id}" />
                              <input type="submit" value="Borrow" class="link-info border-0 bg-transparent">
                            </form>
                          </c:otherwise>
                        </c:choose>
                      </td>
                    </c:if>
                  </tr>
                </c:forEach>
              </tbody>
            </table>
            <div class="mt-4">
              <p>Books I'm Borrowing:</p>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Owner</th>
                    <th scope="col" class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <c:forEach var="book" items="${loggedUser.borrowedBooks}">
                    <tr>
                      <td>
                        <c:out value="${book.id}" />
                      </td>
                      <td>
                        <a href="/books/${book.id}">
                          <c:out value="${book.title}" />
                        </a>
                      </td>
                      <td>
                        <c:out value="${book.author}" />
                      </td>
                      <td>
                        <c:out value="${book.user.name}" />
                      </td>
                      <td class="text-center">
                        <form action="/books/${book.id}/return" method="POST">
                          <input type="hidden" name="_method" value="put">
                          <input type="hidden" name="id" value="${book.id}" />
                          <input type="submit" value="Return" class="link-success border-0 bg-transparent">
                        </form>
                      </td>
                    </tr>
                  </c:forEach>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </body>

      </html>