<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!-- c:out ; c:forEach etc. -->
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <!-- Formatting (dates) -->
    <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
      <!DOCTYPE html>
      <html>

      <head>
        <meta charset="UTF-8">
        <title>Dashboard</title>
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
            <h1 class="mb-4">Welcome
              <c:out value="${user.userName}" />!
            </h1>
            <p>This is your dashboard. Nothing to see here yet.</p>
            <form action="/logout" method="POST">
              <button class="border-0 bg-transparent text-primary">Logout</button>
            </form>
          </div>
        </div>

      </body>

      </html>