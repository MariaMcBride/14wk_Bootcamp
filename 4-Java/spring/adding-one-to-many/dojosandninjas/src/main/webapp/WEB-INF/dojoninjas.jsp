<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <!DOCTYPE html>
    <html>

    <head>
      <meta charset="UTF-8">
      <title>Dojo Page</title>
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
        <div class="card mx-auto p-4 rounded-0">
          <span class="d-flex align-items-center justify-content-between mb-3">
            <h1 class="heading">
              <c:out value="${dojo.location}" /> Location Ninjas
            </h1>
            <a href="/dojos">Dashboard</a>
          </span>
          <table class="table border-secondary">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              <c:forEach var="ninja" items="${dojo.ninjas}">
                <tr>
                  <td>
                    <c:out value="${ninja.firstName}" />
                  </td>
                  <td>
                    <c:out value="${ninja.lastName}" />
                  </td>
                  <td>
                    <c:out value="${ninja.age}" />
                  </td>
                </tr>
              </c:forEach>
            </tbody>
          </table>
        </div>
      </div>
    </body>

    </html>