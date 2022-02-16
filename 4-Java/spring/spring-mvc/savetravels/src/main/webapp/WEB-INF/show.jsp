<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
      <!DOCTYPE html>
      <html>

      <head>
        <meta charset="UTF-8">
        <title>Show Expense</title>
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
            <h3 class="heading">Expense Details</h3>
            <a href="/expenses">Go back</a>
          </div>
          <div class="card mx-auto p-5">
            <div class="row">
              <div class="col">
                <strong>Expense Name:</strong>
              </div>
              <div class="col">
                <c:out value="${expense.name}" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <strong>Expense Description:</strong>
              </div>
              <div class="col">
                <c:out value="${expense.description}" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <strong>Vendor:</strong>
              </div>
              <div class="col">
                <c:out value="${expense.vendor}" />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <strong>Amount Spent:</strong>
              </div>
              <div class="col">
                <c:out value="${expense.amount}" />
              </div>
            </div>
          </div>
        </div>
      </body>

      </html>